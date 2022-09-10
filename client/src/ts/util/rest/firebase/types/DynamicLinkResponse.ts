/**
 * [Firebase Dynamic Links Short Links API Reference](https://firebase.google.com/docs/reference/dynamic-links/link-shortener#response_body)
 */
export interface DynamicLinkResponse {
    /** The generated short Dynamic Link. */
    shortLink?: string
    /** A link to a flowchart of the Dynamic Link's behavior. */
    previewLink?: string
}
