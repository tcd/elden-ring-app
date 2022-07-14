import { ILogger } from "@app/types"

export class ConsoleLogger implements ILogger {
    public trace(...args: any[]): void { console.trace(...args) }
    public debug(...args: any[]): void { console.debug(...args) }
    public info (...args: any[]): void { console.info(...args)  }
    public warn (...args: any[]): void { console.warn(...args)  }
    public error(...args: any[]): void { console.error(...args) }
    public fatal(...args: any[]): void { console.error(...args) }
}
