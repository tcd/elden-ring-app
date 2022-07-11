import { join } from "path"
import { appendFileSync } from "fs"
import { ILogObject } from "tslog"

import { CONFIG } from "@app/util"

const logFileName = "logs.jsonl"
const logFilePath = join(CONFIG.logsFolder, logFileName)

const logToFile = (logObject: ILogObject) => {
    const {
        // hostname,
        date,
        logLevel,
        // logLevelId,
        filePath,
        // fullFilePath,
        // fileName,
        lineNumber,
        // columnNumber,
        // isConstructor,
        argumentsArray,
    } = logObject
    const output = {
        date,
        logLevel,
        // logLevelId,
        // filePath,
        // fullFilePath,
        // fileName,
        // lineNumber,
        // columnNumber,
        // isConstructor,
        source: `${filePath.replaceAll("\\", "/")}:${lineNumber}`,
        argumentsArray,
    }
    appendFileSync(logFilePath, JSON.stringify(output) + "\n")
}

export default logToFile
