import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

import {
    textShadow,
    pointerOnHoverChildren,
    invisibleContent,
} from "../mixins"

// TODO: `#weapon-skill-grid-menu`
// "#weapon-skill-grid-menu": {
//     position: "relative",
// }

// =============================================================================
// Root
// =============================================================================

/**
 * Same styles as the regular modal.
 *
 * - `.er__affinityModal__overlay`
 * - `.er__modal__overlay`
 */
const overlaySx: React.CSSProperties = {
    zIndex: ThemeVars.zIndex.modalBackdrop,
    outline: "none !important",
    position: "absolute",
    // top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ThemeVars.modal.backdropBg,
}

/** `.er__affinityModal` */
const modalSx: SxProps = {
    outline: "none !important",
    width: "70%",
    // minWidth: "45%",
    // minHeight: "50%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch",
    backgroundColor: ThemeVars.modal.colorBg,
    background: ThemeVars.gradients.affinityModalBody,
}

// =============================================================================
// Header
// =============================================================================

const headerRoot: SxProps = {
    textAlign: "center",
    pt: "6px",
    pb: "3px",
}

const headerTitle: SxProps = {
    fontSize: "20px",
    // lineHeight: "20px",
    color: ThemeVars.colors.gold.light,
    ...textShadow,
}

// =============================================================================
// Borders
// =============================================================================

/**
 * - `er__affinityModal > .top-border`
 * - `er__affinityModal > .bottom-border`
 */
const horizontalBorder: SxProps = {
    height: "3px",
    background: ThemeVars.gradients.affinityModalHorizontalBorder,
}

/** `.inner-border-wrapper` */
const innerBorderWrapper: SxProps = {
    content: ThemeVars.ZWSP,
    width: "100%",
    display: "flex",
    justifyContent: "center",
}

/** `.inner-border-wrapper > .inner-border` */
const innerBorderContent: SxProps = {
    textAlign: "center",
    width: "90%",
    height: "2px",
    background: ThemeVars.gradients.modalInnerBorder,
}

const _verticalBorder: SxProps = {
    content: ThemeVars.ZWSP,
    position: "absolute",
    top: 0,
    height: "100%",
    width: "3px",
    background: ThemeVars.gradients.affinityModalVerticalBorder,
}

/** `.left-border-wrapper` */
const leftBorder: SxProps = {
    ..._verticalBorder,
    left: 0,
}

/** `.right-border-wrapper` */
const rightBorder: SxProps = {
    ..._verticalBorder,
    right: 0,
}

// =============================================================================
// Option
// =============================================================================

/** `ul.er__affinityModal__options` */
const optionsRoot: SxProps = {
    marginTop: "10px",
    paddingLeft: "0px",
    listStyle: "none",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
}

/**
 * - `li.er__affinityModal__option:hover`
 * - `li.er__affinityModal__option.active`
 */
const _optionActive: SxProps = {
    background: ThemeVars.gradients.affinityModalItemActive,
    cursor: "pointer",
}

/** `li.er__affinityModal__option` */
const option: SxProps = {
    ...pointerOnHoverChildren,

    background: ThemeVars.gradients.affinityModalItem,

    height: "25px",
    mx: ThemeVars.affinityModal.option.horizontalPadding,
    my: ThemeVars.affinityModal.option.verticalPadding,

    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",

    "&:hover": {
        ..._optionActive,
    },

    "&[data-is-selected='true']": {
        ..._optionActive,
    },
}

/** `.er__affinityModal__option__image` */
const optionImage: SxProps = {
    width:  "24px",
    height: "24px",
}

/** `.er__affinityModal__option__imagePlaceholder` */
const optionImagePlaceholder: SxProps = {
    ...optionImage,
    ...invisibleContent,
}

/** `li.er__affinityModal__option > span` */
const optionTitle: SxProps = {
    // ...pointerOnHover, // don't need it here, have it on option root
    px: "8px",
    fontSize:   ThemeVars.affinityModal.option.fontSize,
    lineHeight: ThemeVars.affinityModal.option.fontSize,
}

// =============================================================================
// All Together
// =============================================================================

export const AffinityModal = {
    modal: modalSx,
    overlay: overlaySx,
    header: {
        root: headerRoot,
        title: headerTitle,
    },
    borders: {
        horizontal: horizontalBorder,
        left: leftBorder,
        right: rightBorder,
        innerBorder: {
            wrapper: innerBorderWrapper,
            content: innerBorderContent,
        },
    },
    options: {
        root: optionsRoot,
        option: option,
        title: optionTitle,
        image: optionImage,
        imagePlaceholder: optionImagePlaceholder,
    },
}
