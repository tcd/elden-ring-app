import type { LogLevel } from "@app/types/app/ILogger"

export type NodeEnvironment = "test" | "development" | "production"

export interface IConfig {
    nodeEnv: NodeEnvironment
    cloudflareHash: string
    apiServerRoot: string
    version: string
    logLevel: LogLevel
}

class Configuration implements IConfig {

    public nodeEnv: NodeEnvironment
    public cloudflareHash: string
    public apiServerRoot: string
    public version: string
    public logLevel: LogLevel

    constructor() {
        this.nodeEnv        = this.getNodeEnv()
        this.cloudflareHash = process?.env["CLOUDFLARE_HASH"] ?? ""
        this.apiServerRoot  = process?.env["API_SERVER_ROOT"] ?? ""
        this.version        = process?.env["VERSION"] ?? ""
        this.logLevel       = process?.env["ER_LOG_LEVEL"] as LogLevel ?? "error"
    }

    public production(): boolean {
        return this.nodeEnv != "development"
    }

    public toJson(): any {
        return {
            nodeEnv:        this.nodeEnv,
            cloudflareHash: this.cloudflareHash,
            apiServerRoot:  this.apiServerRoot,
            version:        this.version,
            logLevel:       this.logLevel,
        }
    }

    private getNodeEnv(): NodeEnvironment {
        const fromEnv = process?.env["NODE_ENV"] as unknown as NodeEnvironment
        if (fromEnv) {
            return fromEnv
        }
        return "production"
    }
}

export const CONFIG = new Configuration()
