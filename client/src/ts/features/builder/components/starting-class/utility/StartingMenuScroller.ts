import { logJson, DOMHelpers } from "@app/util"

/**
 *
 * ## Reference
 *
 * - [Full height of a html element (div) including border, padding and margin?](https://stackoverflow.com/questions/10787782/full-height-of-a-html-element-div-including-border-padding-and-margin)
 */
export class StartingMenuScroller {

    // -------------------------------------------------------------------------
    // Selectors
    // -------------------------------------------------------------------------

    public static MenuId      = "er__startingClass__menu__options"
    public static OptionClass = "er__startingClass__menu__option"

    // -------------------------------------------------------------------------
    // Elements
    // -------------------------------------------------------------------------

    /** Container */
    public static menu():        HTMLElement { return document.getElementById(this.MenuId) }
    /** First Child */
    public static firstOption(): HTMLElement { return document.getElementsByClassName(this.OptionClass)?.[0] as HTMLElement }
    /** Last Child */
    public static lastOption():  HTMLElement { return document.getElementsByClassName(this.OptionClass)?.[9] as HTMLElement }

    /** Get child */
    public static getOption(index: number):  HTMLElement { return document.getElementsByClassName(this.OptionClass)?.[index] as HTMLElement }

    // -------------------------------------------------------------------------
    // Widths
    // -------------------------------------------------------------------------

    public static menu_viewWidth(): Decimal { return this.menu().getBoundingClientRect().width }
    public static menu_scrollWidth(): number { return this.menu().scrollWidth }

    public static option_width(): Decimal { return this.firstOption().getBoundingClientRect().width }

    // -------------------------------------------------------------------------
    // Leftmost Positions
    // -------------------------------------------------------------------------

    public static menu_leftmostPosition(): Decimal { return this.menu().getBoundingClientRect().x }

    public static firstOption_leftmostPosition(): number {
        const x = this.firstOption().getBoundingClientRect().x
        const margins = DOMHelpers.getMargins(this.firstOption())
        return x - margins.left
    }

    /** How much overflow has been scrolled */
    public static menu_widthScrolled(): number {
        return this.menu_leftmostPosition() - this.firstOption_leftmostPosition()
    }

    // -------------------------------------------------------------------------
    // Get Target Index
    // -------------------------------------------------------------------------

    public static firstVisibleIndex(): Integer {
        const scrolled    = this.menu_widthScrolled()
        const optionWidth = this.option_width()

        let firstVisible: Integer = null

        for (let i = 1; i <= 10; i++) {
            if (scrolled < optionWidth * i) {
                firstVisible = i
                break
            }
        }

        return firstVisible // - 1
    }

    public static scrollLeftIndex(): Integer {
        const firstVisible = this.firstVisibleIndex()

        let nextVisible: Integer = null

        if (firstVisible == 1 ) {
            nextVisible = 10
        } else {
            nextVisible = firstVisible - 1
        }

        // console.log({ firstVisible, nextVisible })
        return nextVisible - 1
    }

    public static scrollRightIndex(): Integer {
        const firstVisible = this.firstVisibleIndex()

        let nextVisible: Integer = null

        if (firstVisible < 8 ) {
            nextVisible = firstVisible + 3
        } else {
            nextVisible = firstVisible - 10 + 3
        }

        // console.log({ firstVisible, nextVisible })
        return nextVisible - 1
    }

    public static scrollRight() {
        const index = this.scrollRightIndex()
        const target = this.getOption(index)
        // const menu = this.menu()
        try {
            target.scrollIntoView()
            // menu.scrollto
        } catch (error) {
            debugger
        }
    }

    public static scrollLeft() {
        const index = this.scrollLeftIndex()
        const target = this.getOption(index)
        // const menu = this.menu()
        try {
            target.scrollIntoView()
            // menu.scrollto
        } catch (error) {
            debugger
        }
    }

    // -------------------------------------------------------------------------
    // Logging
    // -------------------------------------------------------------------------

    public static debug(): void {
        window.menu = this.menu()
        window.firstOption = this.firstOption()
        logJson({
            firstVisible: this.firstVisibleIndex(),
            // nextVisible: this.nextScrollIndex(),
            menu_widthScrolled: this.menu_widthScrolled(),
        })
        // logJson({
        //     menuViewWidth:      this.menu_viewWidth(),
        //     menuScrollWidth:    this.menu_scrollWidth(),
        //     // menuScrollPosition: this.getMenuScrollPosition(),
        //     optionWidth:        this.option_width(),
        //     menuX:              this.menu_leftmostPosition(),
        //     firstOptionX:       this.firstOption_leftmostPosition(),
        // })
        // logJson({
        //     menu:        this.getPositions(this.getMenu()),
        //     firstOption: this.getPositions(this.getFirstOption()),
        // })
        // logJson({
        //     firstOptionMargins: DOMHelpers.getMargins(this.getFirstOption()),
        //     firstOptionPadding: DOMHelpers.getPadding(this.getFirstOption()),
        // })
    }

    public static getPositions(el: HTMLElement) {
        const positions = {
            clientWidth: el.clientWidth,
            offsetWidth: el.offsetWidth,
            scrollWidth: el.scrollWidth,
            ...el.getBoundingClientRect().toJSON(),
        }
        return positions
    }

    public static logPositions(el: HTMLElement): void {
        const positions = this.getPositions(el)
        logJson(positions)
        return null
    }
}

// =============================================================================
// Chrome Debugging
// =============================================================================

// let menu = document.getElementById("er__startingClass__menu__options")
// let firstOption = document.getElementsByClassName("er__startingClass__menu__option")?.[0]

