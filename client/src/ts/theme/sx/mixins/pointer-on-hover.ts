// import type { SxProps } from "@mui/material"

// export const pointerOnHover: SxProps = {
//     "&:hover": {
//         cursor: "pointer",
//     },
// }

import type { CSSInterpolation } from "@emotion/serialize"

export const pointerOnHover: CSSInterpolation = {
    "&:hover": {
        cursor: "pointer",
    },
    "& *": {
        "&:hover": {
            cursor: "pointer",
        },
    },
}
