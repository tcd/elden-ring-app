export const cssUrl = (url: string): string => `url("${url}")`
/** Base64-encoded transparent png */
export const blankCssUrl = cssUrl("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=")
