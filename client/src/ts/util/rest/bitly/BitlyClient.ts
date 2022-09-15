import axios, { AxiosRequestConfig } from "axios"

import { CONFIG, logger } from "@app/util"

import { Bitly } from "./types"

export abstract class BitlyClient {
    /**
     * Shorten a Link
     *
     * See:
     * - [Bitly API Docs](https://dev.bitly.com/api-reference/#createBitlink)
     */
    public static async shorten(long_url: string): Promise<Bitly.Responses.Shorten> {
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
            const response = await axios.request<Bitly.Responses.Shorten>(config)
            return response.data
        } catch (error) {
            debugger
            logger.error("Error connecting to bitly", error)
            throw error
        }
    }
    // /**
    //  * Create a Bitlink
    //  *
    //  * See:
    //  * - [Bitly API Docs](https://dev.bitly.com/api-reference/#createFullBitlink)
    //  */
    // public static async bitlinks(long_url: string): Promise<Bitly.Responses.Bitlink> {
    //     const config: AxiosRequestConfig = {
    //         method: "POST",
    //         url: "https://api-ssl.bitly.com/v4/bitlinks",
    //         headers: {
    //             Authorization: `Bearer ${CONFIG.bitlyToken}`,
    //         },
    //         data: {
    //             // domain: "bit.ly",
    //             long_url: long_url,
    //         },
    //     }
    //     try {
    //         const response = await axios.request<Bitly.Responses.Bitlink>(config)
    //         return response.data
    //     } catch (error) {
    //         debugger
    //         logger.error("Error connecting to bitly", error)
    //         throw error
    //     }
    // }
}
