import type { BoxProps, SxProps } from "@mui/material"
import { Box } from "@mui/material"
import { forwardRef } from "react"

import { ComponentSx } from "@app/theme"
import { merge } from "@app/util"

export interface ErListProps {
    children?: React.ReactNode
    sx?: SxProps
}

export const ErList = forwardRef<HTMLUListElement, ErListProps>(function ErList(props: ErListProps, ref) {

    let {
        children = null,
        sx = {},
    } = props

    sx = (merge(ComponentSx.ErList.ul, sx))

    return (
        <Box
            ref={ref}
            component="ul"
            sx={sx}
        >
            {children && children}
        </Box>
    )
})
