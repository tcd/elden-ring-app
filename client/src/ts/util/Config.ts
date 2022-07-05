export type NodeEnvironment = "test" | "development" | "production"

export interface IConfig {
    nodeEnv: NodeEnvironment
    cloudflareHash: string
    apiServerRoot: string
}

class Configuration implements IConfig {

    public nodeEnv: NodeEnvironment
    public cloudflareHash: string
    public apiServerRoot: string

    constructor() {
        this.nodeEnv        = this.getNodeEnv()
        this.cloudflareHash = process?.env["CLOUDFLARE_HASH"] ?? ""
        this.apiServerRoot  = process?.env["API_SERVER_ROOT"] ?? ""
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
