import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

import { pointerOnHover } from "../../mixins"

/** `.er__startingClass` */
const root: SxProps = {
    "& ul": {
        paddingLeft: "0px",
        listStyle: "none",
    },
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",

    // FIXME: I really don't think we need all four of these.
    alignItems:     "stretch",
    alignContent:   "stretch",
    justifyItems:   "stretch",
    justifyContent: "stretch",
}

/**
 * - `.er__startingClass__topBorder`
 * - `.er__startingClass__bottomBorder`
 */
const borders: SxProps = {
    alignSelf: "center",
    width: "90%",
    marginTop:    "10px",
    marginBottom: "10px",
    height: "3px",
    background: ThemeVars.gradients.startingClassTopBottomBorder,
}

/** `#er__startingClass__menu` */
const menu: SxProps = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
}

/** `#er__startingClass__menu > .er__startingClass__menu__arrowContainer` */
const arrowContainer: SxProps = {
    height: "100%",
    width: "100px",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
}

/** `ul#er__startingClass__menu__options` */
const options: SxProps = {
    height: "100%",
    width: "100%",
}

/** `ul#er__startingClass__menu__options > .er__startingClass__menu__option` */
const option: SxProps = {
    height: "100%",

    backgroundRepeat:   "no-repeat",
    backgroundSize:     "contain",
    backgroundPosition: "center",

    marginTop:    "0px",
    marginBottom: "0px",
    paddingTop:    "0px",
    paddingBottom: "0px",
    backgroundColor: "#1f1c16",
    border: "3px solid #312d26",
    ...pointerOnHover,
}

/** `.er__startingClass__menu__optionContent` */
const optionContent: SxProps = {
    width:  "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",

    // .er__statRow__column span { font-size: 1.25rem; }
}

/** `ul.er__startingClass__menu__option__attributes` */
const optionAttributes: SxProps = {
    width: "50%",
}

/** `ul.er__startingClass__menu__option__equipment` */
const optionEquipmentRoot: SxProps = {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // marginTop:    "10px",
    marginBottom: "10px",
}

/** `ul.er__startingClass__menu__option__equipment > li` */
const optionEquipmentItem: SxProps = {
    width:  "50px",
    height: "50px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "& img": {
        padding: "10px",
    },
}

/** `.er__startingClass__menu__option__title` */
const optionTitle: SxProps = {
    width: "50%",
    paddingTop:    ThemeVars.startingClass.optionTitleBorderHeight,
    paddingBottom: ThemeVars.startingClass.optionTitleBorderHeight,
    marginBottom: "20px",
    backgroundColor: "#201f1a",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    position: "relative",
    background: ThemeVars.gradients.startingClassTitle,

    "& span": {
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        fontSize: "1.75rem",
        // backgroundColor: "#201f1a",
    },
}

const _optionTitleBorderShared: SxProps = {
    position: "absolute",
    width: "100%",
    height: ThemeVars.startingClass.optionTitleBorderHeight,
    background: ThemeVars.gradients.startingClassTopBottomBorder,
}

const optionTitleTopBorder: SxProps = {
    ..._optionTitleBorderShared,
    top: 0,
}

const optionTitleBottomBorder: SxProps = {
    ..._optionTitleBorderShared,
    bottom: 0,
}

/**
 * - `.er__startingClass__menu__optionHoverOverlay`
 * - `.er__startingClass__menu__optionOverlay`
 */
const _optionOverlayShared: SxProps = {
    position: "absolute",
    bottom: "0",
    left:   "0",
    width:  "100%",
    height: "100%",
}

/** `.er__startingClass__menu__optionOverlay` */
const optionOverlay: SxProps = {
    ..._optionOverlayShared,
    zIndex: ThemeVars.zIndex.startingClassBackground,
    background: ThemeVars.gradients.startingClassOverlay,
}

/** `.er__startingClass__menu__optionOverlay` */
const optionOverlayHover: SxProps = {
    ..._optionOverlayShared,
    zIndex: ThemeVars.zIndex.startingClassHover,
    "&:hover": {
        background: ThemeVars.gradients.startingClassGoldenHover,
    },
}

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------

/** `.er__startingClass__footer` */
const footer: SxProps = {
    height: "50px",
    marginLeft:  "100px",
    marginRight: "100px",
}


// =============================================================================
// All Together
// =============================================================================

export const StartingClassPage = {
    root,
    menu,
    arrowContainer,
    borders,
    footer,
    options: {
        root: options,
        item: option,
        content: optionContent,
        attributes: optionAttributes,
        equipmentRoot: optionEquipmentRoot,
        equipmentItem: optionEquipmentItem,
        title: optionTitle,
        titleTopBorder: optionTitleTopBorder,
        titleBottomBorder: optionTitleBottomBorder,
        overlay: optionOverlay,
        hover: optionOverlayHover,
    },
}
