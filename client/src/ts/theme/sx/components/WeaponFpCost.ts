import type { SxProps } from "@mui/material"

const root: SxProps = {
    display: "flex",
    flexFlow: "row nowrap",
    flexGrow: 1,
    flexShrink: 0,
    // backgroundColor: "maroon",
    "& span": {
        boxSizing: "border-box",
        // flexGrow: 1,
    },
}

/** base */
const col1: SxProps = {}

/** opening parenthesis */
const col2: SxProps = {
    paddingLeft: "10px",
}

/** light */
const col3: SxProps = {
    paddingLeft: "20px",
}

/** heavy/charge/chain/tick */
const col4: SxProps = {
    paddingLeft: "20px",
}

/** closing parenthesis */
const col5: SxProps = {
    paddingLeft: "10px",
}

export const WeaponFpCost = {
    root,
    col1,
    col2,
    col3,
    col4,
    col5,
}
