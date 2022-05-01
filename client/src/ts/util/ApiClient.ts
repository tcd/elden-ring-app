import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

import { urlJoin } from "@app/util"
import { KitchenSink } from "@app/types"

export const AXIOS_REQUEST_CONFIG: AxiosRequestConfig<any> = {
    // withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    },
}

const ENDPOINTS = {
    weapons: "weapons",
    armor: "armor",
    spells: "spells",
    weaponSkills: "weapon-skills",
    kitchenSink: "kitchen-sink",
}

export class ApiClient {

    public static ApiRoot = "http://localhost:3000/api"


    public static async getEverything(): Promise<AxiosResponse<KitchenSink>> {
        return await this.get(ENDPOINTS.kitchenSink)
    }

    private static async get<T>(path: string): Promise<AxiosResponse<T>> {
        const url = this.buildUrl(path)
        return await axios.get<T>(url, AXIOS_REQUEST_CONFIG)
    }

    private static buildUrl(...segments: string[]): string {
        return urlJoin(this.ApiRoot, ...segments)
    }

    private getCookie(name: string): string {
        const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
        if (match) {
            return match[2]
        } else {
            return null
        }
    }
}
