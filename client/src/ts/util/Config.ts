import { TLogLevelName } from "tslog"

export type NodeEnvironment = "test" | "development" | "production"

export interface IConfig {
    nodeEnv: NodeEnvironment
    cloudflareHash: string
    apiServerRoot: string
    logLevel: TLogLevelName
    logsFolder?: string
}

class Configuration implements IConfig {

    public nodeEnv: NodeEnvironment
    public cloudflareHash: string
    public apiServerRoot: string
    public logLevel: TLogLevelName
    public logsFolder: string

    constructor() {
        this.nodeEnv        = this.getNodeEnv()
        this.cloudflareHash = process?.env["CLOUDFLARE_HASH"] ?? ""
        this.apiServerRoot  = process?.env["API_SERVER_ROOT"] ?? ""
        this.logsFolder     = process?.env["LOGS_FOLDER"] ?? null
        this.logLevel       = "silly"
    }

    public production(): boolean {
        return this.nodeEnv == "production"
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
