// node
const { join } = require("path")
const { writeFile } = require("fs/promises")
// npm
const moment = require("moment");
const { S3Client } = require("@aws-sdk/client-s3")
const { CloudFrontClient, CreateInvalidationCommand  } = require("@aws-sdk/client-cloudfront");
const S3SyncClient = require("s3-sync-client")
// local
const config = require("../env/env.json")
const { ROOT_FOLDER } = require("./helpers.js")

// =============================================================================

/** @returns {string} */
const getNodeEnv = () => {
    const nodeEnv = process?.env?.NODE_ENV
    if (!["production", "staging"].includes(nodeEnv)) {
        console.error(`invalid environment: '${nodeEnv}'`)
        process.exit(1)
    }
    return nodeEnv
}

/** @returns {void} */
const writeLogs = async (timestamp, logsFolder, nodeEnv, s3Output, cloudFrontOutput) => {
    try {
        const data = {
            env: nodeEnv,
            s3: s3Output,
            cloudFront: cloudFrontOutput,
        }
        const fileContent = JSON.stringify(data, null, 4)
        const filePath = join(logsFolder, `${nodeEnv}.${timestamp}.json`)
        await writeFile(filePath, fileContent)
        console.log(`deployment log written: '${filePath}'`)
        return null;
    } catch (error) {
        console.error("unable to write log file")
        console.error(error)
        process.exit(1)
    }
}

/**
 * Sync `client/dist/**` with our S3 bucket on AWS.
 *
 * @param {"production" | "staging"} environment
 * @returns {any}
 */
const syncS3 = async (awsConfig, distFolder, environment) => {
    const s3Client = new S3Client(awsConfig)
    const { sync } = new S3SyncClient({ client: s3Client })
    const response = await sync(distFolder, config[environment].S3_BUCKET_URI, {
        dryRun: false,
    })
    return response
}

/**
 * Create a CloudFront invalidation to clear old cached files.
 *
 * @param {"production" | "staging"} environment
 * @returns {void}
 */
 const updateCloudFront = async (awsConfig, timestamp, environment) => {
    const client = new CloudFrontClient(awsConfig);
    const command = new CreateInvalidationCommand({
        DistributionId: config[environment].CLOUDFRONT_DISTRIBUTION_ID,
        InvalidationBatch: {
            CallerReference: timestamp,
            Paths: {
                Quantity: 1,
                Items: ["/*"],
            }
        },
    });
    const response = await client.send(command);
    return response
}

/**
 * @returns {void}
 */
const deploy = async () => {
    /** @type {string} */
    const nodeEnv = getNodeEnv()
    /** @type {string} */
    const timestamp = moment().format("YYYY-MM-DD-HH-mm")
    /** @type {string} */
    const distFolderPath = join(ROOT_FOLDER, "dist")
    /** @type {string} */
    const logsFolderPath = join(ROOT_FOLDER, "logs", "deployment")
    /** @type {S3ClientConfig | CloudFrontClientConfig} */
    const awsConfig = {
        credentials: {
            accessKeyId: config.defaults.AWS_USER_ACCESS_KEY_ID,
            secretAccessKey: config.defaults.AWS_USER_SECRET_ACCESS_KEY,
        }
    }
    console.log("syncing S3")
    const s3Output = await syncS3(awsConfig, distFolderPath, nodeEnv)
    console.log("creating CloudFront invalidation")
    const cloudFrontOutput = await updateCloudFront(awsConfig, timestamp, nodeEnv)
    await writeLogs(timestamp, logsFolderPath, nodeEnv, s3Output, cloudFrontOutput)
    return null;
}

// =============================================================================

const main = async () => {
    await deploy()
}

(async () => {
    main()
        .then((res) => {
            if (res) { console.log(res) }
            process.exit(0)
        })
        .catch((error) => {
            if (error) { console.error(error) }
            process.exit(1)
        })
})()
