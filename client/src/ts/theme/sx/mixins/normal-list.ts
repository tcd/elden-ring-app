import type { SxProps } from "@mui/material"

export const normalList: SxProps = {
    display: "block",
    listStyleType: "disc",
    listStylePosition: "inside",
    marginBlockStart: "0.5rem",
    marginBlockEnd: "0.5rem",
    // marginInlineStart: "0px",
    // marginInlineEnd: "0px",
    // paddingInlineStart: "40px",
    "& li": {
        listStyleType: "disc",
        listStylePosition: "inside",
    },
}
