import { DynamicLinkInfo } from "./DynamicLinkInfo"

/**
 * [Firebase Dynamic Links Short Links API Reference](https://firebase.google.com/docs/reference/dynamic-links/link-shortener#parameters)
 */
export interface DynamicLinkRequest {
    // longDynamicLink?: string
    dynamicLinkInfo?: DynamicLinkInfo
    /**
     * Specifies how to create the path component of a short Dynamic Link.
     * By default, Firebase Dynamic Links generates 17-character string suffixes.
     *
     * - `"SHORT"`
     *     - Generate path strings that are only as long as needed to be unique, with a minimum length of 4 characters. Use this method if sensitive information would not be exposed if a short Dynamic Link URL were guessed.
     * - `"UNGUESSABLE"`
     *     - Shorten the path to an unguessable string. Such strings are created by base62-encoding randomly generated 96-bit numbers, and consist of 17 alphanumeric characters. Use unguessable strings to prevent your Dynamic Links from being crawled, which can potentially expose sensitive information.
     */
    suffix?: {
        option?: "SHORT" | "UNGUESSABLE"
    }
}
