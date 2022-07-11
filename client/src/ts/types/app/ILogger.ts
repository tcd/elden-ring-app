// 0: "silly";
// 1: "trace";
// 2: "debug";
// 3: "info";
// 4: "warn";
// 5: "error";
// 6: "fatal";

export interface ILogger {
    trace: (args: any) => void
    debug: (args: any) => void
    info:  (args: any) => void
    warn:  (args: any) => void
    error: (args: any) => void
    fatal: (args: any) => void
}
