import axios, { AxiosRequestConfig } from "axios"

import { CONFIG, logger, getImageSrcManual } from "@app/util"

import type {
    DynamicLinkResponse,
    DynamicLinkRequest,
} from "./types"

export abstract class FirebaseClient {
    /**
     * See:
     * - [Firebase Dynamic Links Short Links API Reference](https://firebase.google.com/docs/reference/dynamic-links/link-shortener)
     * - [Create Dynamic Links with the REST API](https://firebase.google.com/docs/dynamic-links/rest)
     * - [Manually constructing a Dynamic Link URL](https://firebase.google.com/docs/dynamic-links/create-manually)
     */
    public static async shortLink(long_url: string): Promise<DynamicLinkResponse> {
        try {
            const data: DynamicLinkRequest = {
                dynamicLinkInfo: {
                    domainUriPrefix: "https://eldenring.page.link",
                    link: long_url,
                    socialMetaTagInfo: {
                        socialTitle: "elden-ring-app.com",
                        socialDescription: "A custom character build for Elden Ring.",
                        socialImageLink: getImageSrcManual("logo-square", "512"),
                    },
                },
                suffix: {
                    option: "SHORT",
                },
            }
            const config: AxiosRequestConfig = {
                method: "POST",
                url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks",
                params: {
                    key: CONFIG.firebaseApiKey,
                },
                data: data,
            }
            const response = await axios.request(config)
            return response.data
        } catch (error) {
            logger.error("Error connecting to firebase", error)
            throw error
        }
    }
}
