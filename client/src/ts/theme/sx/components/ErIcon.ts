import type { SxProps } from "@mui/material"

/** `.er__icon__wrapper` */
const wrapperSx: SxProps = {
    width:  "20px",
    height: "20px",

    marginLeft:  "5px",
    marginRight: "5px",

    display:        "flex",
    flexDirection:  "row",
    flexWrap:       "nowrap",
    justifyContent: "center",
}

/** `.er__icon__wrapper > img.er__icon__image` */
const imageSx: SxProps = {
    height: "100%",
}

export const ErIcon = {
    wrapper: wrapperSx,
    image: imageSx,
}
