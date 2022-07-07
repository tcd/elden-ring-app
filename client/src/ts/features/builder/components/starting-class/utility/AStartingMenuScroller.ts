import { logJson } from "@app/util"
import { DOMHelpers } from "./DOMHelpers"

const MenuId      = "er__startingClass__menu__options"
const OptionClass = "er__startingClass__menu__option"

/**
 *
 * ## Reference
 *
 * - [Full height of a html element (div) including border, padding and margin?](https://stackoverflow.com/questions/10787782/full-height-of-a-html-element-div-including-border-padding-and-margin)
 */
export class AStartingMenuScroller {

    public menu: HTMLElement
    public firstOption: HTMLElement
    public lastOption: HTMLElement

    public menuBounding: DOMRectReadOnly
    public firstOptionBounding: DOMRectReadOnly

    public get menuViewWidth(): number { return this.menuBounding.width }
    public get menuScrollWidth(): number { return this.menu.scrollWidth }

    public get menuLeftmostPosition(): number { return this.menuBounding.x }
    public get firstOptionLeftmostPosition(): number { return this._firstOptionLeftmostPosition() }

    constructor() {
        this.menu        = document.getElementById(MenuId)
        this.firstOption = document.getElementsByClassName(OptionClass)?.[0] as HTMLElement
        this.lastOption  = document.getElementsByClassName(OptionClass)?.[9] as HTMLElement
        this.initialize()
    }

    private initialize(): void {
        this.menuBounding = this.menu.getBoundingClientRect()
        this.firstOptionBounding = this.firstOption.getBoundingClientRect()
    }

    private _firstOptionLeftmostPosition(): number {
        const x = this.firstOptionBounding.x
        const margins = DOMHelpers.getMargins(this.firstOption)
        return x - margins.left
    }
}
