const { join } = require("path")

const { S3, S3Client } = require("@aws-sdk/client-s3")
const S3SyncClient = require("s3-sync-client")

const { ROOT_FOLDER } = require("./helpers.js")
const config = require("../env/env.json")


const distFolderPath = join(ROOT_FOLDER, "dist")
// console.log(distFolderPath)
// console.log(env)


const listBuckets = async () => {
    const s3 = new S3({
        credentials: {
            accessKeyId: config.defaults.AWS_USER_ACCESS_KEY_ID,
            secretAccessKey: config.defaults.AWS_USER_SECRET_ACCESS_KEY,
        }
    })
    const response = await s3.listBuckets({});
    console.log(response)
}

const deployStaging = async () => {
    const s3Client = new S3Client({
        credentials: {
            accessKeyId: config.defaults.AWS_USER_ACCESS_KEY_ID,
            secretAccessKey: config.defaults.AWS_USER_SECRET_ACCESS_KEY,
        }
    })
    const { sync } = new S3SyncClient({ client: s3Client })
    const response = await sync(distFolderPath, config.staging.S3_BUCKET_URI, {
        dryRun: false,
    })
    console.log(response)
}




const main = async () => {
    await deployStaging()
}

(async () => {
    // main()
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
