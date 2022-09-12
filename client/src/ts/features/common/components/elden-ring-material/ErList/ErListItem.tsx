import type { BoxProps } from "@mui/material"
import { Box } from "@mui/material"
import { forwardRef } from "react"

import { ComponentSx } from "@app/theme"
// import { merge } from "@app/util"

export interface ErListItemProps {
    active?: boolean
    children?: React.ReactNode
}

export const ErListItem = forwardRef<HTMLLIElement, ErListItemProps>(function ErListItem(props: ErListItemProps, ref) {

    const {
        children = null,
        active = false,
    } = props

    const sx = active ? ComponentSx.ErList.li.active : ComponentSx.ErList.li.base

    return (
        <Box
            ref={ref}
            component="li"
            sx={sx}
        >
            {children && children}
        </Box>
    )
})
