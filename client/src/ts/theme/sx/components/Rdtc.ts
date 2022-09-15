import { CSSObject } from "@mui/material"
import type { Theme } from "react-data-table-component"

import { ThemeVars } from "@app/theme"
import { reduceObjectToObject } from "@app/util"

const theme: Theme = {
    text: {
        primary: "#d3d3d3",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
    },
    background: {
        default: "#FFFFFF",
    },
    context: {
        background: "#e3f2fd",
        text: "rgba(0, 0, 0, 0.87)",
    },
    divider: {
        default: "rgba(0,0,0,.12)",
    },
    button: {
        default: "#b6ad84",
        focus: "rgba(0,0,0,.12)",
        hover: "rgba(0,0,0,.12)",
        disabled: "rgba(0, 0, 0, .18)",
    },
    selected: {
        default: "#e3f2fd",
        text: "rgba(0, 0, 0, 0.87)",
    },
    highlightOnHover: {
        default: "#EEEEEE",
        text: "rgba(0, 0, 0, 0.87)",
    },
    striped: {
        default: "#FAFAFA",
        text: "rgba(0, 0, 0, 0.87)",
    },
    // sortFocus: {
    //     default: "#2aa198",
    // },
}

/**
 * - [react-data-table-component](https://github.com/jbetancur/react-data-table-component)
 *     - [themes](https://github.com/jbetancur/react-data-table-component/blob/master/src/DataTable/themes.ts)
 *     - [styles](https://github.com/jbetancur/react-data-table-component/blob/master/src/DataTable/styles.ts)
 */
const RdtcCssClasses = <const>{
    table: ".rdt_Table",
    row: ".rdt_TableRow",
    col: ".rdt_TableCol",
    colSortable: ".rdt_TableCol_Sortable",
    cell: ".rdt_TableCell",
    header: ".rdt_TableHeader",
    footer: ".rdt_TableFooter",
    head: ".rdt_TableHead",
    headRow: ".rdt_TableHeadRow",
    body: ".rdt_TableBody",
    expanderRow: ".rdt_ExpanderRow",
    pagination: ".rdt_Pagination",
    paginationPrevious: "#pagination-previous-page",
    paginationNext: "#pagination-next-page",
    paginationFirst: "#pagination-first-page",
    paginationLast: "#pagination-last-page",
}

type RdtcCssClassName = keyof typeof RdtcCssClasses
type RdtcCssClass = typeof RdtcCssClasses[RdtcCssClassName]

// =============================================================================
// Mixins
// =============================================================================

const mixins: Record<string, CSSObject> = {
    roundedTopBorder: {
        borderTopRightRadius: ThemeVars.table.borderRadius,
        borderTopLeftRadius:  ThemeVars.table.borderRadius,
    },
    roundedBottomBorder: {
        borderBottomRightRadius: ThemeVars.table.borderRadius,
        borderBottomLeftRadius:  ThemeVars.table.borderRadius,
    },
    transparentBg: {
        background: "transparent !important",
        backgroundColor: "transparent !important",
    },
    border: {
        border: ThemeVars.table.border,
    },
    stickyHeader: {
        position: "sticky",
        top: 0,
        zIndex: 10,
    },
}

// =============================================================================
// React Data Table Component - https://github.com/jbetancur/react-data-table-component/blob/master/src/DataTable/themes.ts
// =============================================================================

/** `.data-table-wrapper` */
const wrapper: CSSObject = {
    position: "relative",
    height: "100%",
    // overflow-y: "scroll",
    // max-height: "100vh",
    borderCollapse: "collapse",
    ...mixins.transparentBg,
}

const styles: Record<RdtcCssClassName, CSSObject> = {
    table: {
        ...mixins.roundedTopBorder,
        ...mixins.roundedBottomBorder,
        ...mixins.transparentBg,
        ...mixins.border,
        // position: "relative",
        // borderCollapse: "collapse",
        "& *": {
            fontSize: ThemeVars.table.fontSize,
            textShadow: "none",
        },
    },
    row: {
        // ...mixins.roundedBottomBorder,
        ...mixins.transparentBg,
        // ...mixins.border,
        // position: "relative",
    },
    col: {
        ...mixins.transparentBg,
    },
    colSortable: {
        ...mixins.transparentBg,
    },
    cell: {
        ...mixins.transparentBg,
        color: ThemeVars.table.colorFg,
        borderBottom: ThemeVars.table.border,
        borderLeft: ThemeVars.table.border,
        "&:nth-child(1)": {
            borderLeft: "none",
        },
    },
    header: {
        backgroundColor: ThemeVars.table.headerColorBg,
        // ...mixins.transparentBg,
        // ...mixins.stickyHeader,
    },
    footer: {
        ...mixins.transparentBg,
    },
    head: {
        backgroundColor: ThemeVars.table.headerColorBg,
        // ...mixins.transparentBg,
        borderTop: ThemeVars.table.border,
        borderBottom: ThemeVars.table.border,
        // ...mixins.roundedTopBorder,
        fontWeight: "bold",
        // ...mixins.stickyHeader,
    },
    headRow: {
        // backgroundColor: ThemeVars.table.headerColorBg,
        ...mixins.transparentBg,
        ...mixins.roundedTopBorder,
        height: "56px",
        backgroundColor: ThemeVars.table.headerColorBg,
        color: ThemeVars.table.colorFg,
        // ...mixins.stickyHeader,
    },
    body: {
        ...mixins.transparentBg,
    },
    expanderRow: {
        ...mixins.transparentBg,
    },
    pagination: {
        ...mixins.transparentBg,
        // "& option, & *": {
        //     color: "white !important",
        // },
        "& span": {
            textShadow: "none",
        },
    },
    paginationPrevious: {},
    paginationNext: {},
    paginationFirst: {},
    paginationLast: {},
}

const tableStyles = reduceObjectToObject(
    styles,
    (name, styles) => [RdtcCssClasses[name], styles],
)

export const Rdtc = {
    theme,
    wrapper,
}
