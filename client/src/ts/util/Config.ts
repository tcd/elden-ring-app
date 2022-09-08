import type { LogLevel } from "@app/types/app/ILogger"

export type NodeEnvironment = "test" | "development" | "production"

export interface IConfig {
    nodeEnv: NodeEnvironment
    logLevel: LogLevel
    cloudflareHash: string
    apiServerRoot: string
    version: string
    clientUrl: string
    bitlyToken: string
}

class Configuration implements IConfig {

    public nodeEnv: NodeEnvironment
    public logLevel: LogLevel
    public cloudflareHash: string
    public apiServerRoot: string
    public version: string
    public clientUrl: string
    public bitlyToken: string

    constructor() {
        this.nodeEnv        = this.getNodeEnv()
        this.logLevel       = process?.env["ER_LOG_LEVEL"] as LogLevel ?? "error"
        this.cloudflareHash = process?.env["CLOUDFLARE_HASH"] ?? ""
        this.apiServerRoot  = process?.env["API_SERVER_ROOT"] ?? ""
        this.version        = process?.env["VERSION"] ?? ""
        this.clientUrl      = process?.env["CLIENT_URL"] ?? ""
        this.bitlyToken     = process?.env["BITLY_TOKEN"] ?? ""
    }

    public production(): boolean {
        return this.nodeEnv != "development"
    }

    public toJson(): any {
        return {
            nodeEnv:        this.nodeEnv,
            logLevel:       this.logLevel,
            cloudflareHash: this.cloudflareHash,
            apiServerRoot:  this.apiServerRoot,
            version:        this.version,
            clientUrl:      this.clientUrl,
            bitlyToken:      this.bitlyToken,
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
