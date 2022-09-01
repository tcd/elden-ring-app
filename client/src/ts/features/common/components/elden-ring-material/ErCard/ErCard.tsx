import { Component, ReactNode } from "react"
import { Box, SxProps } from "@mui/material"

import { IconNamesKey } from "@app/constants"
import { ErIcon } from "@app/shared"
import { isBlank } from "@app/util"
import { ComponentSx } from "@app/theme"
import { ErCardBorder } from "./ErCardBorder"

export interface ErCardProps {
    title: string
    icon?: IconNamesKey
    content?: ReactNode
    /**
     * @default false
     */
    smallTitle?: boolean
    /**
     * CSS properties to apply to the card.
     * @default { mx: 3, my: 2 }
     */
    sx?: SxProps
}

export class ErCard extends Component<ErCardProps> {

    static defaultProps: Partial<ErCardProps> = {
        icon: null,
        smallTitle: false,
        sx: {
            mx: 3,
            my: 2,
        },
    }

    constructor(props: ErCardProps) {
        super(props)
    }

    public render(): JSX.Element {
        return (
            <Box component="article" sx={this.sx()}>
                <Box component="header" sx={ComponentSx.ErCard.header}>
                    {this.iconElement()}
                    <Box component="span" sx={this.titleSx()}>
                        {this.props.title}
                    </Box>
                </Box>
                <Box component="section" sx={ComponentSx.ErCard.content.root}>
                    <ErCardBorder />
                    <Box sx={ComponentSx.ErCard.content.content}>
                        {this?.props?.children && this.props.children}
                    </Box>
                </Box>
            </Box>
        )
    }

    // =========================================================================

    private sx(): SxProps {
        return {
            ...ErCard.defaultProps.sx,
            ...(this.props?.sx ?? {}),
        }
    }

    private iconElement(): JSX.Element {
        if (isBlank(this.props.icon)) {
            return null
        }
        return (
            <ErIcon icon={this.props.icon} />
        )
    }

    private titleSx(): SxProps {
        if (this.props.smallTitle === true) {
            return ComponentSx.ErCard.title.small
        }
        if (isBlank(this.props.icon)) {
            return ComponentSx.ErCard.title.noIcon
        }
        return ComponentSx.ErCard.title.default
    }
}

