import axios, { AxiosRequestConfig } from "axios"

import { CONFIG, logger } from "@app/util"

export type BitlyResponse = {
    /** timestamp */
    created_at?: string
    id?: string
    link?: string
    custom_bitlinks?: any[]
    long_url?: string
    archived?: boolean
    tags?: any[]
    deeplinks?: unknown[]
    references?: {
        group?: string
    }
}

const example: BitlyResponse = {
    created_at: "2022-09-08T18:44:45+0000",
    id: "bit.ly/3Qulqm0",
    link: "https://bit.ly/3Qulqm0",
    custom_bitlinks: [],
    long_url: "http://127.0.0.1:8080/data?data=hello from bitly",
    archived: false,
    tags: [],
    deeplinks: [],
    references: {
        group: "https://api-ssl.bitly.com/v4/groups/Bm98dnW7Scu",
    },
}

export abstract class BitlyClient {
    /**
     * See:
     * - [Bitly API Docs](https://dev.bitly.com/api-reference/#createBitlink)
     */
    public static async shorten(long_url: string): Promise<BitlyResponse> {
        const config: AxiosRequestConfig = {
            method: "POST",
            url: "https://api-ssl.bitly.com/v4/shorten",
            headers: {
                Authorization: `Bearer ${CONFIG.bitlyToken}`,
            },
            data: {
                // domain: "bit.ly",
                long_url: long_url,
            },
        }
        try {
            const response = await axios.request<BitlyResponse>(config)
            return response.data
        } catch (error) {
            debugger
            logger.error("Error connecting to bitly", error)
            throw error
        }
    }
}
