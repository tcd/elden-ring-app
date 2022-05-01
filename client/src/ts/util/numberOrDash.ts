export const numberOrDash = (number?: number, dash = "-"): number | string => {
    return ((number ?? 0) > 0) ? number : dash
}
