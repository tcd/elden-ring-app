import JSONCrush from "jsoncrush"

import type { RootState } from "@app/state"
import { CONFIG, JsUrl } from "@app/util"

import { BuildDataSelectors } from "./BuildDataSelectors"

const { raw, compact, minifiedCompact } = BuildDataSelectors

// const selectDataUrl = (rootState: RootState): string => {
//     const json = selectBuildData(rootState)
//     // const encodedData = btoa(JSON.stringify(json))
//     const encodedData = JsUrl.stringify(json)
//     const url = `${CONFIG.clientUrl}/data?data=${encodedData}`
//     return url
// }

const withJsonStringify = (rootState: RootState): string => {
    const json = compact(rootState)
    const encodedData = encodeURIComponent(JSON.stringify(json))
    const url = `${CONFIG.clientUrl}/data?data=${encodedData}`
    return url
}

const withBtoa = (rootState: RootState): string => {
    const json = compact(rootState)
    const encodedData = btoa(JSON.stringify(json))
    const url = `${CONFIG.clientUrl}/data?data=${encodedData}`
    return url
}

const withJsUrl = (rootState: RootState): string => {
    const json = compact(rootState)
    const encodedData = JsUrl.stringify(json)
    const url = `${CONFIG.clientUrl}/data?data=${encodedData}`
    return url
}

const withJsonCrush = (rootState: RootState): string => {
    const json = compact(rootState)
    const crushed = JSONCrush.crush(JSON.stringify(json))
    const encoded = encodeURIComponent(crushed)
    const url = `${CONFIG.clientUrl}/data?data=${encoded}`
    return url
}

const withMinify = (rootState: RootState): string => {
    const json = minifiedCompact(rootState)
    const encodedData = encodeURIComponent(JSON.stringify(json))
    const url = `${CONFIG.clientUrl}/data?data=${encodedData}`
    return url
}

export const WipSelectors = {
    json: withJsonStringify,
    minifiedCompact: withMinify,
    btoa: withBtoa,
    jsurl: withJsUrl,
    jsonCrush: withJsonCrush,
}
