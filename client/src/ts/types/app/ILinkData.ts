export type LinkDataType = "divider" | "group" | "link" | "subtitle"

/**
 * For passing to Breadcrumbs, Navs, etc.
 */
export interface ILinkData {
    active?: boolean
    title?: string
    subtitle?: string
    url?: string
    icon?: string
    divider?: boolean
    links?: ILinkData[]
}
