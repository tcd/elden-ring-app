import type { SxProps } from "@mui/material"
import Color from "color"

import { ThemeVars } from "@app/theme"

import {
    textShadow,
    cardSideBorder,
    pointerOnHover,
    pointerOnHoverChildren,
} from "../mixins"

// =============================================================================
// Root
// =============================================================================

/**
 * Same styles as the regular modal.
 *
 * - `.er__affinityModal__overlay`
 * - `.er__modal__overlay`
 */
const overlaySx: SxProps = {
    zIndex: ThemeVars.zIndex.modalBackdrop,
    outline: "none !important",
    position: "absolute",
    top: 0,
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

// $topBottomBorderStops = modalInnerBorder1

const sideBorderShared: SxProps = {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "3px",
    // backgroundColor: "blue",
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
const optionActive: SxProps = {
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
        ...optionActive,
    },
}

/**
 * - `.er__affinityModal__option__imagePlaceholder`
 * - `img.er__affinityModal__option__image`
 */
const optionImage: SxProps = {
    width:  "24px",
    height: "24px",
}

/** `li.er__affinityModal__option > span` */
const optionTitle: SxProps = {
    // ...pointerOnHover, // don't need it here, have it on option root
    px: "8px",
    fontSize:   ThemeVars.affinityModal.option.fontSize,
    lineHeight: ThemeVars.affinityModal.option.fontSize,
}

// =============================================================================
// Unsorted
// =============================================================================



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
    "ul.er__affinityModal__options": {},
    "li.er__affinityModal__option": {
        ...pointerOnHover,
    },
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
    options: {
        root: optionsRoot,
        option: option,
        image: optionImage,
        title: optionTitle,
        active: optionActive,
    },
}
