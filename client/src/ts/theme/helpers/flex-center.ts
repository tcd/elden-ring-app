import type { Property } from "csstype"
import { SxProps } from "@mui/material"

export type FlexCenterOptions = {
    direction: Property.FlexDirection
    /**
     * | direction |            rule            |
     * | --------- | -------------------------- |
     * | column    | `justify-content: center;` |
     * | row       | `align-items: center;`     |
     *
     * @default true
     */
    vertical?: boolean
    /**
     * | direction |            rule            |
     * | --------- | -------------------------- |
     * | row       | `justify-content: center;` |
     * | column    | `align-items: center;`     |
     *
     * @default true
     */
    horizontal?: boolean
    wrap?: Property.FlexWrap
}

export const flexCenter = (options: FlexCenterOptions): SxProps => {

    const {
        direction,
        vertical = true,
        horizontal = true,
        wrap = undefined,
    } = options

    const sx: SxProps = {
        flexDirection: options.direction,
        wrap: wrap,
    }

    if (["column", "column-reverse"].includes(direction)) {
        if (vertical)   { sx.justifyContent = "center" }
        if (horizontal) { sx.alignItems     = "center" }
    }

    if (["row", "row-reverse"].includes(direction)) {
        if (vertical)   { sx.alignItems     = "center" }
        if (horizontal) { sx.justifyContent = "center" }
    }

    return sx
}
