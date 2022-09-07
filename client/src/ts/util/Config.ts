import type { LogLevel } from "@app/types/app/ILogger"

export type NodeEnvironment = "test" | "development" | "production"

export interface IConfig {
    nodeEnv: NodeEnvironment
    cloudflareHash: string
    apiServerRoot: string
    version: string
    clientUrl: string
    logLevel: LogLevel
}

class Configuration implements IConfig {

    public nodeEnv: NodeEnvironment
    public cloudflareHash: string
    public apiServerRoot: string
    public version: string
    public clientUrl: string
    public logLevel: LogLevel

    constructor() {
        this.nodeEnv        = this.getNodeEnv()
        this.cloudflareHash = process?.env["CLOUDFLARE_HASH"] ?? ""
        this.apiServerRoot  = process?.env["API_SERVER_ROOT"] ?? ""
        this.version        = process?.env["VERSION"] ?? ""
        this.clientUrl      = process?.env["CLIENT_URL"] ?? ""
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
            clientUrl:      this.clientUrl,
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
