import { Component, CSSProperties } from "react"
import Typography from "@mui/material/Typography"

import { MdiIcon } from "@app/shared"
import { isBlank } from "@app/util"

export type MarginOption =
    | "none"
    | "all"
    | "vertical"
    | "horizontal"
    // | "left"
    // | "right"
    // | "top"
    // | "bottom"

export interface ErCardProps {
    title: string
    /** SVG path content */
    iconPath?: string
    content?: any
    className?: string
    /**
     * CSS properties to apply to the card.
     * @default {}
     */
    style?: CSSProperties
    /**
     * @default false
     */
    smallTitle?: boolean
    /**
     * If `true`, add margin to all sides of the card.
     * @default true
     */
    margined?: boolean
    /**
     * Sides of the card to which margin should be added.
     * @default "all"
     */
    margin?: MarginOption
}

export class ErCard extends Component<ErCardProps> {

    // Set default props
    static defaultProps: Partial<ErCardProps> = {
        margined: true,
        margin: "all",
        smallTitle: false,
        style: {},
    }

    constructor(props: ErCardProps) {
        super(props)
    }

    private style(): CSSProperties {
        if (this.props?.style) {
            return this.props.style
        }
        return {}
    }

    private className(): string {
        const names = ["er__card"]
        if (this.props?.margined == true) {
            names.push(this.marginClass())
        }
        if (this.props?.className) {
            names.push(this.props.className)
        }
        return names.join(" ")
    }

    private marginClass(): string {
        switch (this.props?.margin) {
            case "all":
                return "m-3"
            case "vertical":
                return "my-3"
            case "horizontal":
                return "mx-3"
            case "none":
                return "m-0"
            default:
                return ""
        }
    }

    private headerClassName(): string {
        if (this.props.smallTitle == true) {
            return "small-title"
        }
        if (isBlank(this.props.iconPath)) {
            return "no-icon"
        } else {
            return "with-icon"
        }
    }

    private iconElement(): JSX.Element {
        if (isBlank(this.props.iconPath)) {
            return null
        }
        return (<MdiIcon path={this.props.iconPath} />)
    }

    public render(): JSX.Element {
        return (
            <article className={this.className()} style={this.style()}>
                <header className={this.headerClassName()}>
                    {this.iconElement()}
                    <Typography className="er__card__title" component="span">
                        {this.props.title}
                    </Typography>
                </header>
                <section>
                    <div className="left-border-wrapper">
                        <div className="left-border-inner vertical-gradient"></div>
                    </div>
                    <div className="er__card__content">
                        {this?.props?.children}
                    </div>
                </section>
            </article>
        )
    }
}
