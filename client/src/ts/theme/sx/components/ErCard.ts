import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"
import {
    textShadow,
    cardSideBorder,
} from "../mixins"

// =============================================================================
// Root
// =============================================================================

/** `article.er__card` */
const rootSx: SxProps = {
    display:       "flex",
    flexDirection: "column",
    flexWrap:      "nowrap",
}

/** `article.er__card > header` */
const header: SxProps = {
    display:       "flex",
    flexDirection: "row",
    alignItems:    "center",
}

// =============================================================================
// Svg
// =============================================================================

/** `article.er__card > header > svg` */
const svg: SxProps = {
    color: ThemeVars.colors.gold.light,
    marginRight: "5px",
    marginLeft:  "5px",
    // https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow
    // drop-shadow(offset-x offset-y blur-radius color)
    filter: `drop-shadow(${ThemeVars.typography.textShadowOffset} ${ThemeVars.typography.textShadowOffset} 0.075px black)`,
}

/** `article.er__card > header.small-title > svg` */
const svg_small: SxProps = {
    ...svg,
    height: "20px",
}

// =============================================================================
// Title
// =============================================================================

/** `article.er__card > header > span.er__card__title` */
const title: SxProps = {
    color: ThemeVars.colors.gold.light,
    fontSize: "24px",
    paddingTop: "0.2em",
    marginBottom: "0px",
    paddingBottom: "0px",
    whiteSpace: "nowrap",
    ...textShadow,
}

/** `article.er__card > header.small-title > span.er__card__title` */
const title_smallTitle: SxProps = {
    ...title,
    fontSize: "18px",
}

/** `article.er__card > header.no-icon > span.er__card__title` */
const title_noIcon: SxProps = {
    ...title,
    fontSize: "32px",
    color: "#D3D3D3",
}

// =============================================================================
// Content
// =============================================================================

/** `article.er__card > section` */
const contentRoot: SxProps = {
    flexGrow: 1,
    display: "flex",
}

/** `article.er__card > section > .er__card2__content` */
const content: SxProps = {
    flexGrow: 1,
    flexShrink: 0,
}

/** `article.er__card > section > .left-border-wrapper` */
const leftBorderWrapper: SxProps = {
    width: "34px",
    // height: "140px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

/** `article.er__card > section > .left-border-wrapper > .left-border-inner` */
const leftBorderInner: SxProps = {
    ...cardSideBorder,
    height: "100%",
    width: "4px",
    marginBottom: "5px",
    borderRadius: "3px",
}

// =============================================================================
// All Together
// =============================================================================

export const ErCard = {
    root: rootSx,
    header: header,
    title: {
        default: title,
        noIcon: title_noIcon,
        small: title_smallTitle,
    },
    svg: {
        default: svg,
        small: svg_small,
    },
    content: {
        root: contentRoot,
        content: content,
        leftBorderWrapper,
        leftBorderInner,
    },
}
