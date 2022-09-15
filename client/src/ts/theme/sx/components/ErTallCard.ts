import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

import { textShadow } from "../mixins"

// =============================================================================
// Root
// =============================================================================

/** `.er__tallCard` */
const rootSx: SxProps = {
    mx: 3,
    my: 2,
    display:       "flex",
    flexDirection: "column",
    flexWrap:      "nowrap",
    "& *": {
        boxSizing: "border-box",
    },
}

// =============================================================================
// Header
// =============================================================================

/** `header.er__tallCard__header` */
const headerRoot: SxProps = {
    display:        "flex",
    flexDirection:  "row",
    flexWrap:       "nowrap",
    alignItems:     "center",
    justifyContent: "start",
}

/** `span.er__tallCard__header--title` */
const headerTitle: SxProps = {
    color: ThemeVars.colors.gold.light,
    height: "100%",
    fontSize: "24px",
    paddingTop: "0.2em",
    marginBottom: "0px",
    paddingBottom: "0px",
    whiteSpace: "nowrap",
    ...textShadow,
}

// =============================================================================
// Section
// =============================================================================

/** `section.er__tallCard__section` */
const sectionRoot: SxProps = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    marginBottom: "20px",
}

/** `section.er__tallCard__section > span.er__tallCard__section--title` */
const sectionTitle: SxProps = {
    whiteSpace: "nowrap",
    color: ThemeVars.colors.gold.light,
    fontSize: "18px",
}

// =============================================================================
// Content
// =============================================================================

/** `.er__tallCard__content--wrapper` */
const contentWrapper: SxProps = {
    display: "flex",
}

/** `article.er__card > section > .er__card2__content` */
const content: SxProps = {
    flexGrow: 1,
    // flexShrink: 0,
    "& ul, & li": {
        paddingLeft:      "0px !important",
        marginBlockStart: "0px !important",
        marginBlockEnd:   "0px !important",
    },
}

// =============================================================================
// All Together
// =============================================================================

export const ErTallCard = {
    root: rootSx,
    header: {
        root: headerRoot,
        title: headerTitle,
    },
    content: {
        wrapper: contentWrapper,
        content: content,
    },
    section: {
        root: sectionRoot,
        title: sectionTitle,
    },
}
