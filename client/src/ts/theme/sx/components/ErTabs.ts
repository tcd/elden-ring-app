import Color from "color"
import type { SxProps } from "@mui/material"
import type { CSSSelectorObjectOrCssVariables } from "@mui/system"
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled"
import { tabUnstyledClasses } from "@mui/base/TabUnstyled"

import { ThemeVars } from "@app/theme"

const blue = {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#80BFFF",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
    800: "#004C99",
    900: "#003A75",
}

const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
}

const Vars = {
    bg: "#1f1e19",
    borderColors: [
        "#434037",
    ],
}


const tab: SxProps = {
    fontFamily: "IBM Plex Sans, sans-serif",
    color: "#fff",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: 600,
    backgroundColor: "transparent",
    width: "100%",
    padding: "10px 12px",
    margin: "6px 6px",
    border: "none",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "center",

    "&:hover": {
        backgroundColor: blue[400],
    },

    "&:focus": {
        color: "#fff",
        outline: `3px solid ${blue[200]}`,
    },

    [`&.${tabUnstyledClasses.selected}`]: {
        backgroundColor: "#fff",
        color: blue[600],
    },

    [`&.${buttonUnstyledClasses.disabled}`]: {
        opacity: 0.5,
        cursor: "not-allowed",
    },
}

const tabPanel: SxProps = {
    width: "100%",
    fontFamily: "IBM Plex Sans, sans-serif",
    fontSize: "0.875rem",
    padding: "20px 12px",
    background: "#fff",
    border: `1px solid ${grey[700]}`,
    borderRadius: "12px",
    opacity: 0.6,
}

const tabList: SxProps = {
    minWidth: "400px",
    backgroundColor: Vars.bg,
    borderRadius: "12px",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "space-between",
}


export const ErTabs = {
    tab,
    tabPanel: tabPanel as CSSSelectorObjectOrCssVariables,
    tabList: tabList as CSSSelectorObjectOrCssVariables,
}
