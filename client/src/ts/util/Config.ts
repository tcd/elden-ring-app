export interface IConfig {
    cloudflareHash: string
}

class Configuration implements IConfig {

    public cloudflareHash: string

    constructor() {
        this.cloudflareHash = process?.env["CLOUDFLARE_HASH"] ?? ""
    }
}

export const CONFIG = new Configuration()
