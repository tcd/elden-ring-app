/* eslint-disable no-console */
import { ILogger, LogLevel } from "@app/types"
import { CONFIG } from "@app/config"

import { isBlank } from "../helpers/is-blank"
import { isObject } from "../srk"
import {
    // getCallsite,
    getCallingFunction,
} from "./callsite"

const LogLevelIds: Record<LogLevel, number> = {
    trace: 0,
    debug: 1,
    info:  2,
    warn:  3,
    error: 4,
    fatal: 5,
}

// const ConsoleFunctions: Record<LogLevel, string> = {
//     trace: "trace",
//     debug: "debug",
//     info:  "info",
//     warn:  "warn",
//     error: "error",
//     fatal: "error",
// }

export class ConsoleLogger implements ILogger {
    public trace(message?: any, ...optionalParams: any[]) { this._log("trace", message, ...optionalParams) }
    public debug(message?: any, ...optionalParams: any[]) { this._log("debug", message, ...optionalParams) }
    public info (message?: any, ...optionalParams: any[]) { this._log("info",  message, ...optionalParams) }
    public warn (message?: any, ...optionalParams: any[]) { this._log("warn",  message, ...optionalParams) }
    public error(message?: any, ...optionalParams: any[]) { this._log("error", message, ...optionalParams) }
    public fatal(message?: any, ...optionalParams: any[]) { this._log("fatal", message, ...optionalParams) }

    private _log(level: LogLevel, message?: any, ...optionalParams: any[]): void {
        if (!this._shouldLog(level)) {
            return null
        }

        // let fixedOptionalParams

        if (isBlank(message)) {
            message = `[${getCallingFunction()}]`
        } else if (isObject(message)) {
            optionalParams = [message]
            message = `[${getCallingFunction()}]`
        } else {
            message = `[${getCallingFunction()}] ${message}`
        }

        if (isBlank(optionalParams)) {
            switch (level) {
                case "trace": console.trace(message); break
                case "debug": console.debug(message); break
                case "info":  console.info(message);  break
                case "warn":  console.warn(message);  break
                case "error": console.error(message); break
                case "fatal": console.error(message); break
                default: break
            }
            return null
        } else {
            switch (level) {
                case "trace": console.trace(message, ...optionalParams); break
                case "debug": console.debug(message, ...optionalParams); break
                case "info":  console.info(message,  ...optionalParams); break
                case "warn":  console.warn(message,  ...optionalParams); break
                case "error": console.error(message, ...optionalParams); break
                case "fatal": console.error(message, ...optionalParams); break
                default: break
            }
            return null
        }
    }

    private _shouldLog(level: LogLevel): boolean {
        const minimumLevelId = LogLevelIds[CONFIG.logLevel]
        const levelId        = LogLevelIds[level]
        return levelId >= minimumLevelId
    }
}
