import {
    Logger,
    ISettingsParam,
} from "tslog"
import { CONFIG } from "@app/util"
// import logToFile from "./log-to-file"

const loggerSettings: ISettingsParam = {
    minLevel: CONFIG.logLevel,
    type: "pretty",
    displayFunctionName: false,
    displayInstanceName: false,
    dateTimeTimezone: "CST",
    dateTimePattern: "year-month-day hour:minute:second",
}

const _logger: Logger = new Logger(loggerSettings)

// _logger.attachTransport(
//     {
//         silly: logToFile,
//         debug: logToFile,
//         trace: logToFile,
//         info:  logToFile,
//         warn:  logToFile,
//         error: logToFile,
//         fatal: logToFile,
//     },
//     CONFIG.logLevel,
// )

export const logger = _logger
