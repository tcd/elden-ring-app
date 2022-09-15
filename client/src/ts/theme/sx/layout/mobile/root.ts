import type { SxProps } from "@mui/material"

/** `#er__mobileLayout` */
const root: SxProps = {
    height: "100%",

    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "stretch",
}

/** `#er__mobileLayout__outletWrapper` */
const outletWrapper: SxProps = {
    boxSizing: "border-box",
    flexGrow: 1,
    marginTop: "1.5rem",
    marginBottom: "0.5rem",
    overflowY: "scroll",
}

/** `#er__mobileLayout__footerRoot` */
const footer: SxProps = {
    mx: 0,
    mb: 0,
    justifySelf: "flex-end",
}

export const rootStyles = {
    root,
    outletWrapper,
    footer,
}
