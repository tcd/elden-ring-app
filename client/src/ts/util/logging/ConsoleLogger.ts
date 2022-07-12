import { ILogger } from "@app/types"

export class ConsoleLogger implements ILogger {
    public trace(...args: any[]) { console.trace(args) }
    public debug(...args: any[]) { console.debug(args) }
    public info (...args: any[]) { console.info(args)  }
    public warn (...args: any[]) { console.warn(args)  }
    public error(...args: any[]) { console.error(args) }
    // public fatal(args: any) { console.error(args) }
}
