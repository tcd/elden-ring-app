import { logJson } from "@app/util"

// =============================================================================
// Types
// =============================================================================

interface ChromeDOMRect /* extends DOMRect */ {
    width:   Decimal
    height:  Decimal
    x:       Decimal
    y:       Decimal
    top?:    Decimal
    bottom?: Decimal
    left?:   Decimal
    right?:  Decimal
}

const getOptionsElement     = (): Element => document.getElementById("er__startingClass__menu__options")
const getFirstOptionElement = (): Element => document.getElementsByClassName("er__startingClass__menu__option")?.[0]

const getOptionsWidth = (): number => {
    const el = getOptionsElement()
    const rect = el.getBoundingClientRect()
    return rect.width
}

const getOptionWidth = (): number => {
    const el = document.getElementsByClassName("er__startingClass__menu__option ")?.[0]
    const rect = el.getBoundingClientRect()
    return rect.width
}

const getScrollPosition = (): number => {
    const el = getOptionsElement()
    logWidths(el)
    const rect = el.getBoundingClientRect()
    // console.log(rect)
    return rect.width
}

export const scroll = (): void => {
    const firstOption = getFirstOptionElement()
    const containerWidth = getOptionsWidth()
    const itemWidth = getOptionWidth()
    const scrollPosition = getScrollPosition()
    // console.log({
    //     containerWidth,
    //     itemWidth,
    // })
    return null
}

// =============================================================================
// Scratch
// =============================================================================

// const getOptionsWidth = (): number => {
//     const el = getOptionsElement()
//     const rect = el.getBoundingClientRect()
//     return rect.width
//     // console.log({
//     //     clientWidth: el.clientWidth,
//     //     offsetWidth: el.offsetWidth,
//     //     scrollWidth: el.scrollWidth,
//     //     rect: rect,
//     // })
//     // return el.clientWidth
// }

const logWidths = (el: Element): void => {
    const rect: DOMRectReadOnly = el.getBoundingClientRect()
    logJson({
        clientWidth: el.clientWidth,
        // offsetWidth: el.wid,
        scrollWidth: el.scrollWidth,
        // boundingClientRect: rect.toJSON(),
    })
}

// =============================================================================
// Chrome Debugging
// =============================================================================

// let menu = document.getElementById("er__startingClass__menu__options")
let firstOption = document.getElementsByClassName("er__startingClass__menu__option")?.[0]

