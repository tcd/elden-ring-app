export interface AbsoluteLengths {
    cm: "centimeters"
    mm:	"millimeters"
    /** (1in = 96px = 2.54cm) */
    in:	"inches"
    /** (1px = 1/96th of 1in) */
    px: "pixels"
    /** (1pt = 1/72 of 1in) */
    pt:	"points"
    /** (1pc = 12 pt) */
    pc:	"picas"
}

// * Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.

export interface RelativeLengths {
    "em":     "em"   // Relative to the font-size of the element (2em means 2 times the size of the current font)
    "ex":     "ex"   // Relative to the x-height of the current font (rarely used)
    "ch":     "ch"   // Relative to the width of the "0" (zero)
    "rem":    "rem"  // Relative to font-size of the root element
    "vw":     "vw"   // Relative to 1% of the width of the viewport*
    "vh":     "vh"   // Relative to 1% of the height of the viewport*
    "vmin":   "vmin" // Relative to 1% of viewport's* smaller dimension
    "vmax":   "vmax" // Relative to 1% of viewport's* larger dimension
    "%":      "%"    // Relative to the parent element
}
export type Pixels = `${number}px`
