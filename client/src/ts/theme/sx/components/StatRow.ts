import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"
import { invisibleContent } from "../mixins"

const statRowStyles: SxProps = {
    fontSize: ThemeVars.typography.statRowFontSize,
    color: ThemeVars.body.colorFg,
    "& span": {
        whiteSpace: "nowrap",
        fontSize: ThemeVars.typography.statRowFontSize,
    },
}

// =============================================================================
// Basic
// =============================================================================

/** `.er__statRow__column` */
const row: SxProps = {
    ...statRowStyles,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",

    "& span:empty": invisibleContent,
}

/** Title */
const col_1: SxProps = {
    "&:empty": invisibleContent,
}

/** Value */
const col_2: SxProps = {
    "&:empty": invisibleContent,
}

// =============================================================================
// Plus
// =============================================================================

/** `.er__statRow__column-plus` */
const rowPlus: SxProps = {
    ...statRowStyles,
    display: "grid",
    gridTemplateColumns: "30% 45% 10% 15%",
}

/** Title */
const colPlus_1: SxProps = {
    // backgroundColor: "red",
    textAlign: "left",
}

/** Value 1 */
const colPlus_2: SxProps = {
    // backgroundColor: "yellow",
    textAlign: "right",
    boxSizing: "border-box",
    marginRight: "5px",
}

/** Divider */
const colPlus_3: SxProps = {
    // backgroundColor: "green",
    textAlign: "left",
}

/** Value 2 */
const colPlus_4: SxProps = {
    // backgroundColor: "blue",
    textAlign: "right",
}

// =============================================================================
// Plus Plus
// =============================================================================

/** `.er__statRow__column-plus-plus` */
const rowPlusPlus: SxProps = {
    ...statRowStyles,
    display: "grid",
    gridTemplateColumns: "30% 20% 5% 20% 25%",
}

/** Title (Damage Type) */
const colPlusPlus_1: SxProps = {
    // backgroundColor: "red",
    textAlign: "left",
    boxSizing: "border-box",
}

/** Base Damage */
const colPlusPlus_2: SxProps = {
    // backgroundColor: "yellow",
    textAlign: "right",
    boxSizing: "border-box",
}

/** Plus Sign */
const colPlusPlus_3: SxProps = {
    // backgroundColor: "green",
    marginLeft: "5px",
}

/** Scaled Damage */
const colPlusPlus_4: SxProps = {
    // backgroundColor: "blue",
    textAlign: "right",
}

const _padded: SxProps = {
    marginLeft: "1px",
    marginRight: "1px",
}

/** Total Damage */
const colPlusPlus_5: SxProps = {
    // backgroundColor: "indigo",
    textAlign: "right",
    ..._padded,
}

const parens: SxProps = {
    // backgroundColor: "violet",
    color: "gray",
    ..._padded,
}

// =============================================================================
// All Together
// =============================================================================

export const StatRow = {
    basic: {
        row: row,
        col1: col_1,
        col2: col_2,
    },
    plus: {
        row: rowPlus,
        col1: colPlus_1,
        col2: colPlus_2,
        col3: colPlus_3,
        col4: colPlus_4,
    },
    plusPlus: {
        row: rowPlusPlus,
        col1: colPlusPlus_1,
        col2: colPlusPlus_2,
        col3: colPlusPlus_3,
        col4: colPlusPlus_4,
        col5: colPlusPlus_5,
        parens,
    },
}
