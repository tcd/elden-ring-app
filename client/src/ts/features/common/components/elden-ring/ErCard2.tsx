import { Component, CSSProperties, ReactNode } from "react"
import { Box, Typography, SxProps } from "@mui/material"

import { IconNamesKey } from "@app/constants"
import { MdiIcon, ErIcon } from "@app/shared"
import { isBlank } from "@app/util"

export interface ErCard2Props {
    title: string
    /** SVG path content */
    iconPath?: string
    icon?: IconNamesKey
    content?: ReactNode
    className?: string
    contentClassName?: string
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
     * CSS properties to apply to the card.
     * @default {}
     */
    sx?: SxProps
}

export class ErCard2 extends Component<ErCard2Props> {

    // Set default props
    static defaultProps: Partial<ErCard2Props> = {
        icon: null,
        smallTitle: false,
        style: {},
        sx: {},
    }

    constructor(props: ErCard2Props) {
        super(props)
    }

    private iconElement(): JSX.Element {
        if (isBlank(this.props.icon)) {
            return null
        }
        return (<ErIcon icon={this.props.icon} />)
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

    private contentClassName(): string {
        const names = ["er__card2__content"]
        if (this.props?.contentClassName) {
            names.push(this.props.contentClassName)
        }
        return names.join(" ")
    }


    public render(): JSX.Element {
        return (
            <Box component="article" sx={this.props.sx} className="er__card2">
                <header className={this.headerClassName()}>
                    {this.iconElement()}
                    <Typography className="er__card2__title" component="span">
                        {this.props.title}
                    </Typography>
                </header>
                <section>
                    <div className="left-border-wrapper">
                        <div className="left-border-inner vertical-gradient"></div>
                    </div>
                    <div className={this.contentClassName()}>
                        {this?.props?.children}
                    </div>
                </section>
            </Box>
        )
    }
}
