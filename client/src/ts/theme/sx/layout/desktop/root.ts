import type { SxProps } from "@mui/material"

/** `#er__layout` */
const root: SxProps = {
    height: "100%",

    display: "flex",
    flexFlow: "column nowrap",
}

/** `#er__layout` */
const outletWrapper: SxProps = {
    flexGrow: 1,
    marginTop: "1.0rem",
    marginBottom: "0.5rem",
    // boxSizing: "border-box",
    // paddingTop: "1.5rem",
    // paddingBottom: "0.5rem",
    // backgroundColor: "LightGoldenrodYellow",
}

export const rootStyles = {
    root,
    outletWrapper,
}
