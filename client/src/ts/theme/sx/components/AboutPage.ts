import type { SxProps } from "@mui/material"
import Color from "color"

import { ThemeVars } from "@app/theme"


const link: SxProps = {
    color: ThemeVars.colors.gold.light,
    "&:active, &:focus, &:hover": {
        textDecoration: "underline",
        color: Color(ThemeVars.colors.gold.light).darken(0.15).hexa(),
    },
}

const root: SxProps = {
    // height: "100vh",
    height: `calc(100vh - 60px - 101px - 1px)`, // No clue what the hell this is.
    overflowY: "auto",
    boxSizing: "border-box",
    margin: "0px",
    padding: "0px",
    "& a": link,
}

export const AboutPage = {
    root,
}
