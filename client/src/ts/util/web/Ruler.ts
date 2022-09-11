export interface RulerOptions {
    top?: Decimal
    bottom?: Decimal
    left?: Decimal
    right?: Decimal
}

const defaultOptions: Partial<RulerOptions> = {
    top:    0,
    bottom: 0,
    left:   0,
    right:  0,
}

export class Ruler {

    public elementId: string

    // public top: Decimal
    // public bottom: Decimal
    // public left: Decimal
    // public right: Decimal

    public options: RulerOptions

    constructor(options: RulerOptions) {
        this.elementId = window.crypto.randomUUID()
        this.options = {
            ...defaultOptions,
            ...options,
        }
        this.createElement()
    }

    private createElement(): void {
        const el = document.createElement("div")
        el.id = this.elementId

        el.style.width = "1px"
        el.style.margin = "0"
        el.style.padding = "0"
        el.style.boxSizing = "border-box"
        el.style.backgroundColor = "#ff0000"

        el.style.zIndex = "2000"
        el.style.position = "absolute"

        el.style.top    = this.options.top.toString()
        el.style.bottom = this.options.bottom.toString()
        el.style.left   = this.options.left.toString()
        el.style.right  = this.options.right.toString()

        document.body.appendChild(el)
        return null
    }

    public destroyElement(): void {
        document.getElementById(this.elementId).remove()
    }
}
