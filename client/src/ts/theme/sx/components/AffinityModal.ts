import type { SxProps } from "@mui/material"
import Color from "color"

import { ThemeVars } from "@app/theme"

import {
    textShadow,
    cardSideBorder,
} from "../mixins"

const rootSx: SxProps = {
    display:       "flex",
    flexDirection: "column",
    flexWrap:      "nowrap",
}

const _variables = {
    "affinityModal-option-font-size": "16px",
    "affinityModal-option-horizontal-padding": "16px",
    "affinity-item-color-bg": Color(ThemeVars.modal.colorBg).lighten(.05).hexa(),
    "affinity-item-color-active-bg": Color(ThemeVars.modal.colorBg).lighten(.15).hexa(),

    "inner-border-1": "#423E35",
    "inner-border-2": "#4C4A3F",
    "inner-border-3": "#454139",
    "top-bottom-border-stops": [
        { percentage:   "0%", transparency: 1.0 },
        { percentage:  "10%", transparency: 0.0 },
        { percentage:  "90%", transparency: 0.0 },
        { percentage: "100%", transparency: 1.0 },
    ],
    "body-stops": [
        // { percentage:   "0%", transparency: 0.60 },
        // { percentage:   "1%", transparency: 0.65 },
        // { percentage:   "2%", transparency: 0.70 },
        // { percentage:   "3%", transparency: 0.75 },
        { percentage:   "4%", transparency: 0.80 },
        { percentage:   "5%", transparency: 0.85 },
        { percentage:   "6%", transparency: 0.90 },
        { percentage:  "10%", transparency: 0.95 },
        { percentage:  "90%", transparency: 0.95 },
        { percentage:  "94%", transparency: 0.90 },
        { percentage:  "95%", transparency: 0.85 },
        { percentage:  "96%", transparency: 0.80 },
        // { percentage:  "97%", transparency: 0.75 },
        // { percentage:  "98%", transparency: 0.70 },
        // { percentage:  "99%", transparency: 0.65 },
        // { percentage: "100%", transparency: 0.60 },
    ],
    "affinity-item-stops": [
        { percentage:    "0%", transparency: 0.10 },
        { percentage:   "10%", transparency: 0.25 },
        { percentage:   "50%", transparency: 0.75 },
        { percentage:   "90%", transparency: 0.25 },
        { percentage:  "100%", transparency: 0.10 },
    ],
}

const _styles: Record<string, SxProps> = {
    "#weapon-skill-grid-menu": {
        position: "relative",
    },
    ".er__affinityModal, .er__affinityModal__overlay": {
        outline: "none !important",
    },
    ".er__affinityModal__overlay": {
        zIndex: ThemeVars.zIndex.modalBackdrop,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ThemeVars.modal.backdropBg,
    },
    ".er__affinityModal": {
        width: "70%",
        // minWidth: "45%",
        // minHeight: "50%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "stretch",
        backgroundColor: ThemeVars.modal.colorBg,
        background: "TODO: gradient",
    },
    "header": {
        textAlign: "center",
        paddingTop:    "6px",
        paddingBottom: "3px",
    },
    "header > span": {
        fontSize: "20px",
        // lineHeight: "20px",
        color: ThemeVars.colors.gold.light,
        ...textShadow,
    },
}

// =============================================================================
// All Together
// =============================================================================

export const AffinityModal = {
    root: rootSx,
}
