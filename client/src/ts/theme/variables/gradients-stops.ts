import type { Css } from "@app/types"

// --------------------------------------
// Layout
// --------------------------------------

const sideNav: Css.ColorStop[] = [
    { percentage:   "0%",  transparency:  1.00 },
    { percentage:  "25%",  transparency:  0.90 },
    { percentage:  "50%",  transparency:  0.75 },
    { percentage:  "75%",  transparency:  0.50 },
    { percentage:  "90%",  transparency:  0.30 },
    { percentage: "100%",  transparency:  0.00 },
]

const sideNavBackdrop: Css.ColorStop[] = [
    { percentage:   "0%",  transparency:  1.00 },
    { percentage:   "5%",  transparency:  0.90 },
    { percentage:   "6%",  transparency:  0.75 },
    { percentage:   "7%",  transparency:  0.50 },
    { percentage:   "8%",  transparency:  0.30 },
    { percentage:   "9%",  transparency:  0.00 },
    { percentage:  "91%",  transparency:  0.00 },
    { percentage:  "92%",  transparency:  0.30 },
    { percentage:  "93%",  transparency:  0.50 },
    { percentage:  "94%",  transparency:  0.75 },
    { percentage:  "95%",  transparency:  0.90 },
    { percentage: "100%",  transparency:  1.00 },
]

// --------------------------------------
// Modal
// --------------------------------------

const modalBody: Css.ColorStop[] = [
    { percentage:   "0%",  transparency:  0.10 },
    { percentage:   "1%",  transparency:  0.30 },
    { percentage:   "2%",  transparency:  0.50 },
    { percentage:   "3%",  transparency:  0.70 },
    { percentage:   "4%",  transparency:  0.80 },
    { percentage:   "5%",  transparency:  0.85 },
    { percentage:   "6%",  transparency:  0.90 },
    { percentage:  "10%",  transparency:  0.95 },
    { percentage:  "90%",  transparency:  0.95 },
    { percentage:  "94%",  transparency:  0.90 },
    { percentage:  "95%",  transparency:  0.85 },
    { percentage:  "96%",  transparency:  0.80 },
    { percentage:  "97%",  transparency:  0.70 },
    { percentage:  "98%",  transparency:  0.50 },
    { percentage:  "99%",  transparency:  0.30 },
    { percentage: "100%",  transparency:  0.10 },
]

const modalTopBottomBorder: Css.ColorStop[] = [
    { percentage: "0%",  transparency:    0.95 },
    { percentage: "10%",  transparency:   0.00 },
    { percentage: "90%",  transparency:   0.00 },
    { percentage: "100%",  transparency:  0.95 },
]

const modalInnerBorder: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 1.0 },
    { percentage:  "10%", transparency: 0.0 },
    { percentage:  "90%", transparency: 0.0 },
    { percentage: "100%", transparency: 1.0 },
]

// --------------------------------------
// Context Menu
// --------------------------------------

const contextMenuItem: Css.ColorStop[] = [
    { percentage:   "0%",    transparency:  0.10 },
    { percentage:  "10%",    transparency:  0.25 },
    { percentage:  "40%",    transparency:  0.60 },
    { percentage:  "50%",    transparency:  0.75 },
    { percentage:  "60%",    transparency:  0.60 },
    { percentage:  "90%",    transparency:  0.25 },
    { percentage: "100%",    transparency:  0.10 },
]

// --------------------------------------
// You Died
// --------------------------------------

const youDiedGradient: Css.ColorStop[] = [
    { percentage:   "0%",  transparency: 0.20 },
    { percentage:  "10%",  transparency: 0.40 },
    { percentage:  "25%",  transparency: 0.60 },
    { percentage:  "50%",  transparency: 0.75 },
    { percentage:  "75%",  transparency: 0.60 },
    { percentage:  "90%",  transparency: 0.40 },
    { percentage: "100%",  transparency: 0.20 },
]

// --------------------------------------
// Equipment Grid / Equipment Slots
// --------------------------------------

const equipmentGridBorder: Css.ColorStop[] = [
    { percentage:   "0%",  transparency:  0.0 },
    { percentage:  "10%",  transparency:  1.0 },
    { percentage:  "90%",  transparency:  1.0 },
    { percentage: "100%",  transparency:  0.0 },
]

const equipmentCellBorder: Css.ColorStop[] = [
    { percentage:   "0%",  transparency: 0.00 },
    { percentage:  "25%",  transparency: 0.05 },
    { percentage:  "45%",  transparency: 0.10 },
    { percentage:  "50%",  transparency: 0.20 },
    { percentage:  "60%",  transparency: 0.30 },
    { percentage:  "70%",  transparency: 0.40 },
    { percentage:  "80%",  transparency: 0.50 },
    { percentage:  "90%",  transparency: 0.90 },
    { percentage:  "95%",  transparency: 0.75 },
    { percentage: "100%",  transparency: 0.00 },
]

// =============================================================================
// All Together
// =============================================================================

export const gradientStops = {
    // Side Nav
    sideNav,
    sideNavBackdrop,
    // Modal
    modalBody,
    modalTopBottomBorder,
    modalInnerBorder,
    // Context Menu
    contextMenuItem,
    // You Died
    youDiedGradient,
    // Equipment Grid / Equipment Slots
    equipmentGridBorder,
    equipmentCellBorder,
}
