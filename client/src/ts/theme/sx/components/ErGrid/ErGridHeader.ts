import type { SxProps } from "@mui/material"

import {
    ThemeVars,
} from "@app/theme"

import {
    textShadow,
} from "../../mixins"


// =============================================================================
// Header
// =============================================================================

/** `header.er__equipmentGrid__header` */
const root: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
}

const headerShared: SxProps = {
    whiteSpace: "nowrap",
    ...textShadow,
}

/** `.er__equipmentGrid__headerTitle` */
const title: SxProps = {
    display: "flex",
    color: ThemeVars.colors.gold.light,
    fontSize: "24px",
    paddingTop: "0.2em",
    marginBottom: "0px",
    paddingBottom: "0px",
    ...headerShared,
}

/** `.er__equipmentGrid__headerDescription` */
const subTitle: SxProps = {
    fontSize: "18px",
    ...headerShared,
}

// =============================================================================
// All Together
// =============================================================================

export const ErGridHeader = {
    root,
    title,
    subTitle,
}
