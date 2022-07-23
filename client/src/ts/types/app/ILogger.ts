export const LogLevels = {
    trace: "trace",
    debug: "debug",
    info:  "info",
    warn:  "warn",
    error: "error",
    fatal: "fatal",
} as const
type LogLevelKey = keyof typeof LogLevels
export type LogLevel = typeof LogLevels[LogLevelKey]

export type LogFunction = (message?: any, ...optionalParams: any[]) => void;

export interface ILogger {
    trace: LogFunction
    debug: LogFunction
    info:  LogFunction
    warn:  LogFunction
    error: LogFunction
    fatal: LogFunction
}
