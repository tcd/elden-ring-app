import axios, { AxiosRequestConfig } from "axios"

import { CONFIG, logger } from "@app/util"

import { CreateDynamicLinkResponse } from "./firebase.types"

export abstract class FirebaseClient {
    /**
     * See:
     * - [Firebase Dynamic Links Short Links API Reference](https://firebase.google.com/docs/reference/dynamic-links/link-shortener)
     * - [Create Dynamic Links with the REST API](https://firebase.google.com/docs/dynamic-links/rest)
     * - [Manually constructing a Dynamic Link URL](https://firebase.google.com/docs/dynamic-links/create-manually)
     */
    public static async shortLink(long_url: string): Promise<CreateDynamicLinkResponse> {
        try {
            const config: AxiosRequestConfig = {
                method: "POST",
                url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks",
                params: {
                    key: CONFIG.firebaseApiKey,
                },
                data: {
                    // longDynamicLink: long_url,
                    "dynamicLinkInfo": {
                        "domainUriPrefix": "https://links.eldenring.app/links",
                        "link": long_url,
                    },
                },
            }
            // const url = axios.getUri(config)
            // return url
            const response = await axios.request(config)
            return response.data
        } catch (error) {
            logger.error("Error connecting to firebase", error)
            throw error
        }
    }
}
