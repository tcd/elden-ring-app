import Color from "color"
import type { SxProps } from "@mui/material"
import type { CSSSelectorObjectOrCssVariables } from "@mui/system"
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled"
import { tabUnstyledClasses } from "@mui/base/TabUnstyled"

import { boxShadow } from "@app/theme/helpers"
import { invisibleContent } from "@app/theme/sx/mixins"
import { ThemeVars } from "@app/theme/variables"

const Vars = {
    bg: "#1f1e19",
    borderColors: [
        "#434037",
    ],
    hover: "#4b4b3f",
    panelBg: "#2c2922",
}

const py = (arg: string) => ({ paddingTop:  arg, paddingBottom: arg })
const px = (arg: string) => ({ paddingLeft: arg, paddingRight:  arg })
const my = (arg: string) => ({ marginTop:   arg, marginBottom:  arg })
const mx = (arg: string) => ({ marginLeft:  arg, marginRight:   arg })

// =============================================================================
// Mixins
// =============================================================================

const _afterActive: SxProps = {
    content: ThemeVars.ZWSP,
    position: "absolute",
    // boxSizing: "content-box",

    top: 0,
    left: 0,
    transform: "translate(50%)",

    height: "100%",
    width: "50%",

    // width: "25%",

    // ...px("25%"),

    boxShadow: boxShadow({
        x: "0px",
        y: "0px",
        blur: "5px",
        spread: "5px",
        color: ThemeVars.colors.gold.dark,
    }),
    opacity: 0.5,
}

const _activeTab: SxProps = {
    backgroundColor: "rebeccapurple",
    boxShadow: [
        boxShadow({
            x: "5px",
            y: "5px",
            blur: "5px",
            spread: "5px",
            color: ThemeVars.colors.gold.dark,
        }),
        "inset" + boxShadow({
            x: "0px",
            y: "0px",
            blur: "5px",
            spread: "5px",
            color: ThemeVars.colors.gold.dark,
        }),
    ].join(", "),
    "&::after": _afterActive,
}

// =============================================================================
// Sx
// =============================================================================

const tab: SxProps = {
    position: "relative",
    color: ThemeVars.colors.gold.light,
    cursor: "pointer",
    backgroundColor: "transparent",
    width: "100%",
    ...py("10px"),
    ...px("12px"),
    margin: "6px",
    border: "none",
    borderRadius: "0px",
    display: "flex",
    justifyContent: "center",

    "&:hover": {
        ..._activeTab,
    },

    "&:focus": {
        outline: `3px solid ${ThemeVars.colors.gold.light}`,
    },

    [`&.${tabUnstyledClasses.selected}`]: {
        ..._activeTab,
    },

    [`&.${buttonUnstyledClasses.disabled}`]: {
        opacity: 0.5,
        cursor: "not-allowed",
    },
}

const tabPanel: SxProps = {
    width: "100%",
    fontSize: "0.875rem",
    ...py("20px"),
    ...px("12px"),
    background: "#fff",
    // border: `1px solid ${grey[700]}`,
    borderRadius: "0px",
    opacity: 0.6,
    textShadow: "none",
    backgroundColor: Vars.panelBg,
}

const tabList: SxProps = {
    minWidth: "100px",
    backgroundColor: Vars.bg,
    borderRadius: "0px",
    // marginBottom: "16px",
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
