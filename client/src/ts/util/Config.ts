export interface IConfig {
    cloudflareHash: string
    apiServerRoot: string
}

class Configuration implements IConfig {

    public cloudflareHash: string
    public apiServerRoot: string

    constructor() {
        this.cloudflareHash = process?.env["CLOUDFLARE_HASH"] ?? ""
        this.apiServerRoot  = process?.env["API_SERVER_ROOT"] ?? ""
    }
}

export const CONFIG = new Configuration()
