import type { SxProps } from "@mui/material"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { merge } from "@app/util"

export interface ErContainerProps {
    children?: React.ReactNode
    outerSx?: SxProps
    innerSx?: SxProps
}

export const ErContainer = (props: ErContainerProps): JSX.Element => {
    let {
        children = null,
        innerSx = {},
        outerSx = {},
    } = props

    outerSx = merge(ComponentSx.ErContainer.outer, outerSx)
    innerSx = merge(ComponentSx.ErContainer.inner, innerSx)

    return (
        <Box sx={outerSx}>
            <Box sx={innerSx}>
                {children && children}
            </Box>
        </Box>
    )
}
