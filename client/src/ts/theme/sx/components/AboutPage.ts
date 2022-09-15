import type { SxProps } from "@mui/material"

const root: SxProps = {
    // height: "100vh",
    height: `calc(100vh - 60px - 101px - 1px)`, // No clue what the hell this is.
    overflowY: "auto",
    boxSizing: "border-box",
    margin: "0px",
    padding: "0px",
}

export const AboutPage = {
    root,
}
