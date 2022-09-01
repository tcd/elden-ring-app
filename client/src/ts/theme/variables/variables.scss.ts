import { rgba } from "../helpers"

export const unsortedColors = {
    // "offWhite": "#636155",
    "offWhite":  "#ACAB94",
    /** Hover Gold */
    "equipment-slot-overlay-color": "#B6AD84",
    EldenRingColor: {
        // menuBg: "#292927",
        menuBg: "#201F19",
        menuFg: "#D6CDB8",
        green: "#265139",
        gold: "#C9BBA1",
    },
    gold: "#C9BBA1", // ECard
    // $black: "#2A2923",
    // $erColors: {
    //     offwhite: "#636155",
    //     gray: "#221e19",
    //     transparentGray: "rgba(#221e19, 0.85)",
    // },
    CorrectColors: {
        red:   "#CD3138",
        blue:  "#527ED5",
    },
}

// ----------------------------------------------------------------------------
// Color System
// ----------------------------------------------------------------------------

const colorSystemRoot = <const>{
    white:    "#d4d4d4",
    black:    "#1e1e1e",
    blue:    "#527ED5",
    // indigo:  "#6610f2",
    // purple:  "#6f42c1",
    // pink:    "#d63384",
    red:     "#CD3138",
    // orange:  "#fd7e14",
    yellow:  "#ebbd6c", // don't remember where I got these
    green:   "#338636", // don't remember where I got these
    teal:    "#20c997", // not final
    // cyan:    "#0dcaf0",
}

const colorSystemTheme = <const>{
    primary:       colorSystemRoot.blue,
    secondary:     "gray-600",
    success:       colorSystemRoot.teal,
    info:          colorSystemRoot.blue,
    warning:       colorSystemRoot.yellow,
    danger:        colorSystemRoot.red,
    light:         "gray-100",
    dark:          "gray-900",
}

export const colorSystem = {
    ...colorSystemRoot,
    ...colorSystemTheme,
}

// ----------------------------------------------------------------------------
// Body
//
// ----------------------------------------------------------------------------

/** Settings for the `<body>` element. */
export const body = {
    colorBg: colorSystem.black,
    colorFg: "#d3d3d3",
}

/** Font, line-height, and color for body text, headings, and more. */
export const typography = {
    headingsColor: "#cfc1a6",
    textShadowOffset: "1px",
    // statRowFontSize: "16px",
    statRowFontSize: "0.875rem",
}

// ----------------------------------------------------------------------------
// Layout
// ----------------------------------------------------------------------------

export const layout = {
    headerImageSize: "55px",
    sideNavWidth: "400px",
    // sideNavBg: "#35352f",
    sideNavBg: "#36342f",
}

// ----------------------------------------------------------------------------
// Mobile Layout
// ----------------------------------------------------------------------------

export const mobileHeader = {
    height: "86px",
    contentHeight: "86px",
    topMargin: "5px",
}

// ----------------------------------------------------------------------------
// Button
// ----------------------------------------------------------------------------

export const button = {
    bgColor: "#14120F",
    fgColor: "#D3D3D3",
    borderColor: "#999999",
    horizontalPadding: "75px",
    verticalPadding: "5px",
}

// ----------------------------------------------------------------------------
// Navbar
// ----------------------------------------------------------------------------

/** 48px / 56px / 64px */
export const navbarHeight = "48px"

// ----------------------------------------------------------------------------
// Tables
// ----------------------------------------------------------------------------

export const table = {
    colorFg: body.colorFg, // !default
    colorBg: "transparent !default",
}

// ----------------------------------------------------------------------------
// Data Table
// ----------------------------------------------------------------------------

export const dataTable = {
    colorFg: body.colorFg,
    headerColorBg: "#1c1c19",
    borderRadius: "0.25rem !important",
    borderColor: "#515151",
}
// ----------------------------------------------------------------------------
// Modal
// ----------------------------------------------------------------------------

export const modal = {
    backdropBg: rgba("#221e19", 0.55).hexa(),
    colorBg: "#26221C",
    colorBorder: "#4D4B3F",
    innerBorderColors: [
        "#423E35", // $modal-inner-border-color-1
        "#4C4A3F", // $modal-inner-border-color-2
        "#454139", // $modal-inner-border-color-3
    ],
}

// ----------------------------------------------------------------------------
// Context Menu
// ----------------------------------------------------------------------------

export const contextMenu = {
    colorBg: "$modal-color-bg",
    colorBorder: "$modal-color-border",
    item: {
        colorBg: "lighten($modal-color-bg, 11%)",
        colorBgActive: "lighten($modal-color-bg, 30%)",
    },
}


// ----------------------------------------------------------------------------
// You Died
// ----------------------------------------------------------------------------

export const youDied = {
    red: "#520000",
    black: "black",
}

// ----------------------------------------------------------------------------
// Popover
// ----------------------------------------------------------------------------

export const popover = {
    borderSize: "2.5px",
    colorBg: "#181813",
    colorFg: body.colorFg,
    colorBorder: "#938b7c",
}

// ----------------------------------------------------------------------------
// Starting Class
// ----------------------------------------------------------------------------

export const startingClass = {
    bgGradientColorLeft: "#3d3b34",
    bgGradientColorRight: "#221f17",
}

// ----------------------------------------------------------------------------
// Equipment Detail
// ----------------------------------------------------------------------------

const equipmentDetailPrimaryImage = {
    /** pixels */
    size: 155,
    /** pixels */
    mobileSize: 100,
}

const equipmentDetailSecondaryImage = {
    size: (equipmentDetailPrimaryImage.size / 2),
    mobileSize: (equipmentDetailPrimaryImage.mobileSize / 2),

}

export const equipmentDetail = {
    primaryImage: equipmentDetailPrimaryImage,
    secondaryImage: equipmentDetailSecondaryImage,
}

// ----------------------------------------------------------------------------
// Equipment Grid / Equipment Slots
// ----------------------------------------------------------------------------

/** Equipment Grid / Equipment Slots */
export const equipmentSlots = {
    "equipment-slot-overlay-color": "#B6AD84",
    "equipment-menu-horizontal-margin": "10%",
    "equipment-grid-cell-width":  "150px",
    "equipment-grid-cell-height": "170px",
}

// ----------------------------------------------------------------------------
// Equipment Menu
// ----------------------------------------------------------------------------

export const equipmentMenu = {
    imageBackgroundColor: "#3A3931",
    backgroundColor: "#3d3b32",
    dividerColor: "#4c4a41",
    cellColor: "#36352d",
    minCellSize: "50px",
}

export const RedX = {
    size: "16px",
    padding: "4px",
}


export const equipmentCellGradientColors = [
    "#2e2d26",
]
