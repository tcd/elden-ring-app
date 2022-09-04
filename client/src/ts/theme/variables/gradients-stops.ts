import type { Css } from "@app/types"

import { startingClass } from "./variables.scss"
import { colors } from "./colors"

// --------------------------------------
// Layout
// --------------------------------------

const sideNav: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 1.00 },
    { percentage:  "25%", transparency: 0.90 },
    { percentage:  "50%", transparency: 0.75 },
    { percentage:  "75%", transparency: 0.50 },
    { percentage:  "90%", transparency: 0.30 },
    { percentage: "100%", transparency: 0.00 },
]

const sideNavBackdrop: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 1.00 },
    { percentage:   "5%", transparency: 0.90 },
    { percentage:   "6%", transparency: 0.75 },
    { percentage:   "7%", transparency: 0.50 },
    { percentage:   "8%", transparency: 0.30 },
    { percentage:   "9%", transparency: 0.00 },
    { percentage:  "91%", transparency: 0.00 },
    { percentage:  "92%", transparency: 0.30 },
    { percentage:  "93%", transparency: 0.50 },
    { percentage:  "94%", transparency: 0.75 },
    { percentage:  "95%", transparency: 0.90 },
    { percentage: "100%", transparency: 1.00 },
]

const sideNavMobileBackdrop: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 1.00 },
    { percentage:  "10%", transparency: 0.95 },
    { percentage:  "15%", transparency: 0.90 },
    { percentage:  "20%", transparency: 0.85 },
    { percentage:  "25%", transparency: 0.80 },
    { percentage:  "30%", transparency: 0.75 },
    { percentage:  "35%", transparency: 0.70 },
    { percentage:  "40%", transparency: 0.65 },
    { percentage:  "45%", transparency: 0.60 },
    { percentage:  "50%", transparency: 0.50 },
    { percentage:  "55%", transparency: 0.40 },
    { percentage:  "60%", transparency: 0.30 },
    { percentage:  "65%", transparency: 0.20 },
    { percentage:  "70%", transparency: 0.10 },
    { percentage:  "75%", transparency: 0.00 },
]

// --------------------------------------
// Modal
// --------------------------------------

const modalBody: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 0.10 },
    { percentage:   "1%", transparency: 0.30 },
    { percentage:   "2%", transparency: 0.50 },
    { percentage:   "3%", transparency: 0.70 },
    { percentage:   "4%", transparency: 0.80 },
    { percentage:   "5%", transparency: 0.85 },
    { percentage:   "6%", transparency: 0.90 },
    { percentage:  "10%", transparency: 0.95 },
    { percentage:  "90%", transparency: 0.95 },
    { percentage:  "94%", transparency: 0.90 },
    { percentage:  "95%", transparency: 0.85 },
    { percentage:  "96%", transparency: 0.80 },
    { percentage:  "97%", transparency: 0.70 },
    { percentage:  "98%", transparency: 0.50 },
    { percentage:  "99%", transparency: 0.30 },
    { percentage: "100%", transparency: 0.10 },
]

const modalTopBottomBorder: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 0.95 },
    { percentage:  "10%", transparency: 0.00 },
    { percentage:  "90%", transparency: 0.00 },
    { percentage: "100%", transparency: 0.95 },
]

const modalInnerBorder1: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 1.0 },
    { percentage:  "10%", transparency: 0.0 },
    { percentage:  "90%", transparency: 0.0 },
    { percentage: "100%", transparency: 1.0 },
]

const modalInnerBorder2: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 0.5, color: "#423e35" },
    { percentage:  "50%", transparency: 1.0, color: "#4c4a3f" },
    { percentage: "100%", transparency: 0.5, color: "#454139" },
]

// --------------------------------------
// Affinity Modal
// --------------------------------------

const affinityModalBody: Css.ColorStop[]  = [
    // { percentage:   "0%", transparency: 0.60 },
    // { percentage:   "1%", transparency: 0.65 },
    // { percentage:   "2%", transparency: 0.70 },
    // { percentage:   "3%", transparency: 0.75 },
    { percentage:   "4%", transparency: 0.80 },
    { percentage:   "5%", transparency: 0.85 },
    { percentage:   "6%", transparency: 0.90 },
    { percentage:  "10%", transparency: 0.95 },
    { percentage:  "90%", transparency: 0.95 },
    { percentage:  "94%", transparency: 0.90 },
    { percentage:  "95%", transparency: 0.85 },
    { percentage:  "96%", transparency: 0.80 },
    // { percentage:  "97%", transparency: 0.75 },
    // { percentage:  "98%", transparency: 0.70 },
    // { percentage:  "99%", transparency: 0.65 },
    // { percentage: "100%", transparency: 0.60 },
]

const affinityModalItem: Css.ColorStop[]  = [
    { percentage:   "0%", transparency: 0.10 },
    { percentage:  "10%", transparency: 0.25 },
    { percentage:  "50%", transparency: 0.75 },
    { percentage:  "90%", transparency: 0.25 },
    { percentage: "100%", transparency: 0.10 },
]

// --------------------------------------
// Context Menu
// --------------------------------------

const contextMenuItem: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 0.10 },
    { percentage:  "10%", transparency: 0.25 },
    { percentage:  "40%", transparency: 0.60 },
    { percentage:  "50%", transparency: 0.75 },
    { percentage:  "60%", transparency: 0.60 },
    { percentage:  "90%", transparency: 0.25 },
    { percentage: "100%", transparency: 0.10 },
]

// --------------------------------------
// You Died
// --------------------------------------

const youDiedGradient: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 0.20 },
    { percentage:  "10%", transparency: 0.40 },
    { percentage:  "25%", transparency: 0.60 },
    { percentage:  "50%", transparency: 0.75 },
    { percentage:  "75%", transparency: 0.60 },
    { percentage:  "90%", transparency: 0.40 },
    { percentage: "100%", transparency: 0.20 },
]

// --------------------------------------
// Equipment Grid / Equipment Slots
// --------------------------------------

const equipmentGridBorder: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 0.0 },
    { percentage:  "10%", transparency: 1.0 },
    { percentage:  "90%", transparency: 1.0 },
    { percentage: "100%", transparency: 0.0 },
]

const equipmentCellBorder: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 0.00 },
    { percentage:  "25%", transparency: 0.05 },
    { percentage:  "45%", transparency: 0.10 },
    { percentage:  "50%", transparency: 0.20 },
    { percentage:  "60%", transparency: 0.30 },
    { percentage:  "70%", transparency: 0.40 },
    { percentage:  "80%", transparency: 0.50 },
    { percentage:  "90%", transparency: 0.90 },
    { percentage:  "95%", transparency: 0.75 },
    { percentage: "100%", transparency: 0.00 },
]

// --------------------------------------
// Starting Class
// --------------------------------------

const startingClassBackground: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 1.0, color: startingClass.bgGradientColorLeft  },
    { percentage:  "50%", transparency: 1.0, color: startingClass.bgGradientColorRight },
    { percentage: "100%", transparency: 1.0, color: startingClass.bgGradientColorRight },
]

const startingClassTopBottomBorder: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 0.0 },
    { percentage:  "10%", transparency: 1.0 },
    { percentage:  "90%", transparency: 1.0 },
    { percentage: "100%", transparency: 0.0 },
]

const startingClassOverlay: Css.ColorStop[] = [
    // { percentage:   "0%", transparency: 0.00 },
    { percentage:  "25%", transparency: 0.00 },
    { percentage:  "30%", transparency: 0.40 },
    // { percentage:  "40%", transparency: 0.30 },
    { percentage:  "50%", transparency: 0.50 },
    // { percentage:  "60%", transparency: 0.50 },
    { percentage:  "70%", transparency: 0.60 },
    { percentage:  "80%", transparency: 0.70 },
    { percentage:  "90%", transparency: 0.80 },
    { percentage: "100%", transparency: 0.90 },
]

const startingClassTitle: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 0.00 },

    { percentage:   "5%", transparency: 0.30 },
    { percentage:   "6%", transparency: 0.50 },
    { percentage:   "7%", transparency: 0.70 },
    { percentage:   "8%", transparency: 0.80 },
    { percentage:   "9%", transparency: 0.85 },

    { percentage:  "50%", transparency: 0.90 },

    { percentage:  "91%", transparency: 0.85 },
    { percentage:  "92%", transparency: 0.80 },
    { percentage:  "93%", transparency: 0.70 },
    { percentage:  "94%", transparency: 0.50 },
    { percentage:  "95%", transparency: 0.30 },

    { percentage: "100%", transparency: 0.00 },
]

const startingClassGoldenHover: Css.ColorStop[] = [
    { percentage:  "40%", color: colors.gold.dark, transparency: 0.0 },
    { percentage: "100%", color: colors.gold.dark, transparency: 0.4 },
]

// =============================================================================
// All Together
// =============================================================================

export const gradientStops = {
    // Side Nav
    sideNav,
    sideNavBackdrop,
    sideNavMobileBackdrop,
    // Modal
    modalBody,
    modalTopBottomBorder,
    modalInnerBorder1,
    modalInnerBorder2,
    // Affinity Modal
    affinityModalBody,
    affinityModalItem,
    // Context Menu
    contextMenuItem,
    // You Died
    youDiedGradient,
    // Equipment Grid / Equipment Slots
    equipmentGridBorder,
    equipmentCellBorder,
    // Starting Class
    startingClassBackground,
    startingClassTopBottomBorder,
    startingClassOverlay,
    startingClassTitle,
    startingClassGoldenHover,
}
