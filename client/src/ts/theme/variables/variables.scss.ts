import Color from "color"

import { rgba } from "../helpers"
import { typography } from "./typography"

export const unsortedColors = <const>{
    // offWhite: "#636155",
    offWhite:  "#ACAB95",
    EldenRingColor: {
        // menuBg: "#292927",
        menuBg: "#201F19",
        menuFg: "#D6CDB8", // used for footer
        green: "#265139",
        gold: "#C9BBA1",
    },
    gold: "#C9BBA1", // ECard
    // $black: "#2A2923",
    // $erColors: {
    //     gray: "#221e19",
    //     transparentGray: "rgba(#221e19, 0.85)",
    // },
}

// ----------------------------------------------------------------------------
// Layout
// ----------------------------------------------------------------------------

export const layout = <const>{
    header: {
        height: "86px",
        imageSize: "55px",
        /** vertical margins */
        margins: {
            xs: "5px",
            sm: "10px",
            // md: "15px",
        },
    },
    footer: {
        height: "40px",
    },
    sideNav: {
        // colorBg: "#35352f",
        colorBg: "#36342f",
        width: {
            desktop: "400px",
            mobile: "75%",
        },
    },
}

// ----------------------------------------------------------------------------
// Button
// ----------------------------------------------------------------------------

export const button = <const>{
    colorBg: "#14120F",
    colorFg: typography.colorFg,
    borderColor: "#999999",
    horizontalPadding: "75px",
    verticalPadding: "5px",
}

// ----------------------------------------------------------------------------
// Table
// ----------------------------------------------------------------------------

export const table = <const>{
    fontSize: "16px",
    colorFg: typography.colorFg,
    // colorBg: "transparent !default",
    headerColorBg: "#1c1c19",
    borderRadius: "0.25rem !important",
    borderColor: "#515151",
    border: `1px solid #515151`,
}

// ----------------------------------------------------------------------------
// Modal
// ----------------------------------------------------------------------------

export const modal = <const>{
    backdropBg: rgba("#221e19", 0.55).hexa(),
    colorBg: "#26221C",
    colorBorder: "#4D4B3F",
    innerBorderColors: [
        "#423E35", // $modal-inner-border-color-1
        "#4C4A3F", // $modal-inner-border-color-2
        "#454139", // $modal-inner-border-color-3
    ],
}

export const debugging = {
    hex: {
        modalColorBg:  modal.colorBg,
        itemBg:        Color(modal.colorBg).lighten(.05).hexa(),
        itemActiveBg:  Color(modal.colorBg).lighten(.15).hexa(),
    },
    hsl: {
        modalColorBg:  Color(modal.colorBg).hsl().string(),
        itemBg:        Color(modal.colorBg).lighten(.05).hsl().string(),
        itemActiveBg:  Color(modal.colorBg).lighten(.15).hsl().string(),
    },
}

export const affinityModal = <const>{
    option: {
        fontSize: "16px",
        horizontalPadding: "16px",
        verticalPadding: "6px",
    },
    // // FIXME: incorrect color conversion
    // item: {
    //     colorBg: Color(modal.colorBg).lighten(.05).hexa(),
    //     colorActiveBg: Color(modal.colorBg).lighten(.15).hexa(),
    // },
}

// ----------------------------------------------------------------------------
// Context Menu
// ----------------------------------------------------------------------------

export const contextMenu = <const>{
    colorBg: modal.colorBg,
    colorBorder: modal.colorBorder,
    item: {
        /**
         * ```scss
         * lighten($modal-color-bg, 11%)
         *```
         */
        colorBg: "#463f34",
        /**
         * ```scss
         * lighten($modal-color-bg, 30%)
         *```
         */
        colorBgActive: "#7e715d",
    },
}

// ----------------------------------------------------------------------------
// You Died
// ----------------------------------------------------------------------------

export const youDied = <const>{
    red: "#520000",
    black: "black",
}

// ----------------------------------------------------------------------------
// Popover
// ----------------------------------------------------------------------------

export const popover = <const>{
    borderSize: "2.5px",
    colorBg: "#181813",
    colorFg: typography.colorFg,
    colorBorder: "#938b7c",
}

// ----------------------------------------------------------------------------
// Starting Class
// ----------------------------------------------------------------------------

export const startingClass = <const>{
    bgGradientColorLeft: "#3d3b34",
    bgGradientColorRight: "#221f17",
    topBottomBorderColor: "#5b5749",
    optionOverlayColorBg: "#181815",
    optionTitleColorBg: "#201f1a",
    optionTitleBorderHeight: "2px",
}

// ----------------------------------------------------------------------------
// Equipment Detail
// ----------------------------------------------------------------------------

const equipmentDetailPrimaryImage = <const>{
    /** pixels */
    size: 100,
    /** pixels */
    mobileSize: 100,
}

const equipmentDetailSecondaryImage = <const>{
    size: (equipmentDetailPrimaryImage.size / 2),
    mobileSize: (equipmentDetailPrimaryImage.mobileSize / 2),
}

export const equipmentDetail = <const>{
    primaryImage: equipmentDetailPrimaryImage,
    secondaryImage: equipmentDetailSecondaryImage,
}

// ----------------------------------------------------------------------------
// Equipment Grid / Equipment Slots
// ----------------------------------------------------------------------------

/** Equipment Grid / Equipment Slots */
export const equipmentSlots = <const>{
    "equipment-menu-horizontal-margin": "10%",
    "equipment-grid-cell-width":  "150px",
    "equipment-grid-cell-height": "170px",
}

// ----------------------------------------------------------------------------
// Equipment Menu
// ----------------------------------------------------------------------------

export const equipmentMenu = <const>{
    imageBackgroundColor: "#3A3931",
    backgroundColor: "#3d3b32",
    dividerColor: "#4c4a41",
    cellColor: "#36352d",
    minCellSize: "50px",
}

export const RedX = <const>{
    size: "16px",
    padding: "4px",
}


export const equipmentCellGradientColors = [
    "#2e2d26",
]
