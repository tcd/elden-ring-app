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
    // marginTop: "1rem",
    marginBottom: "0.5rem",
}

export const rootStyles = {
    root,
    outletWrapper,
}
