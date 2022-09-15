import json2mq from "json2mq"

export interface MediaQueryParams {
    screen?: boolean
    // handheld?: boolean
    minWidth?: number | string
    maxWidth?: number | string
    minHeight?: number | string
    maxHeight?: number | string
    // aspectRatio?: string
    orientation?: "portrait" | "landscape"
    // all?: boolean
    // monochrome?: boolean
}

export const mediaQuery = (queryObject: MediaQueryParams): string => {
    // @ts-ignore: next-line
    const query = json2mq(queryObject)
    return `@media ${query}`
}

export const mediaQueries = (...queryObjects: MediaQueryParams[]): string => {
    // @ts-ignore: next-line
    const query = json2mq(queryObjects)
    return `@media ${query}`
}
