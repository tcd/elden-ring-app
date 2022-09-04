// =============================================================================
// Types
// =============================================================================

export const DirectionValues = {
    top:    "top",
    bottom: "bottom",
    left:   "left",
    right:  "right",
} as const

export type Direction = keyof typeof DirectionValues

export type IDirections<T> = Partial<Record<Direction, T>>

export type Margins = IDirections<number>
export type Padding = IDirections<number>
export type Borders = IDirections<number>

// =============================================================================
// Functions
// =============================================================================

export class DOMHelpers {

    public static getPadding(el: Element | HTMLElement): Padding {
        const elementStyles = window.getComputedStyle(el, null)
        return {
            top:    parseFloat(elementStyles.paddingTop),
            bottom: parseFloat(elementStyles.paddingBottom),
            left:   parseFloat(elementStyles.paddingLeft),
            right:  parseFloat(elementStyles.paddingRight),
        }
    }

    public static getMargins(el: Element | HTMLElement): Margins {
        const elementStyles = window.getComputedStyle(el, null)
        return {
            top:    parseFloat(elementStyles.marginTop),
            bottom: parseFloat(elementStyles.marginBottom),
            left:   parseFloat(elementStyles.marginLeft),
            right:  parseFloat(elementStyles.marginRight),
        }
    }

    public static getBorders(el: Element | HTMLElement): Borders {
        const elementStyles = window.getComputedStyle(el, null)
        return {
            top:    parseFloat(elementStyles.borderTopWidth),
            bottom: parseFloat(elementStyles.borderBottomWidth),
            left:   parseFloat(elementStyles.borderLeftWidth),
            right:  parseFloat(elementStyles.borderRightWidth),
        }
    }
}
