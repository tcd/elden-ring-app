// import type { SxProps } from "@mui/material"
// import type { CSSInterpolation } from "@emotion/serialize"
//
// export const pointerOnHover: SxProps = {
//     "&:hover": {
//         cursor: "pointer",
//     },
// }

export const pointerOnHoverChildren = {
    "& *": {
        "&:hover": {
            cursor: "pointer",
        },
    },
}

export const pointerOnHover = {
    "&:hover": {
        cursor: "pointer",
    },
    ...pointerOnHoverChildren,
}
