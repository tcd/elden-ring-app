import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios"

import { urlJoin, CONFIG } from "@app/util"
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

    public static async getEverything(): Promise<AxiosResponse<KitchenSink>> {
        return await this.get(ENDPOINTS.kitchenSink)
    }

    private static async get<T>(path: string): Promise<AxiosResponse<T>> {
        const url = this.buildUrl(path)
        const overrides: AxiosRequestConfig = {
            timeout: 5_000,
        }
        return await axios.get<T>(url, this.buildConfig(overrides))
    }

    private static buildUrl(...segments: string[]): string {
        return urlJoin(this.ApiRoot, ...segments)
    }

    private static get ApiRoot() {
        return CONFIG.apiServerRoot
    }

    private static buildConfig(overrides: AxiosRequestConfig = {}): AxiosRequestConfig {
        return {
            ...this.defaultConfig(),
            ...overrides,
        }
    }

    private static defaultConfig(): AxiosRequestConfig {
        return {
            // withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            },
        }
    }
}
