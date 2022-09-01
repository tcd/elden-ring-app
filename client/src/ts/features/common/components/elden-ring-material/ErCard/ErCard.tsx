import type { SxProps } from "@mui/material"
import { Box } from "@mui/material"

import { IconNamesKey } from "@app/constants"
import { ComponentSx } from "@app/theme"
import { isBlank } from "@app/util"
import { ErIcon } from "@app/shared"
import { ErCardBorder } from "./ErCardBorder"

export interface ErCardProps {
    children?: React.ReactNode
    title: string
    icon?: IconNamesKey
    content?: React.ReactNode
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

const defaultProps: Partial<ErCardProps> = {
    icon: null,
    smallTitle: false,
    sx: {
        mx: 3,
        my: 2,
    },
}

export const ErCard = (props: ErCardProps): JSX.Element => {

    props = { ...defaultProps, ...props }

    return (
        <Box component="article" sx={props.sx}>
            <Box component="header" sx={ComponentSx.ErCard.header}>
                {props?.icon &&
                    <ErIcon icon={props.icon} />
                }
                <Box component="span" sx={titleSx(props)}>
                    {props.title}
                </Box>
            </Box>
            <Box component="section" sx={ComponentSx.ErCard.content.root}>
                <ErCardBorder />
                <Box sx={ComponentSx.ErCard.content.content}>
                    {props?.children && props.children}
                </Box>
            </Box>
        </Box>
    )
}

// =============================================================================

const titleSx = (props: ErCardProps): SxProps => {
    if (props.smallTitle === true) {
        return ComponentSx.ErCard.title.small
    }
    if (isBlank(props.icon)) {
        return ComponentSx.ErCard.title.noIcon
    }
    return ComponentSx.ErCard.title.default
}
