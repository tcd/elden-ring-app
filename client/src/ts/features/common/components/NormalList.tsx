import type { BoxProps } from "@mui/material"
import { Box } from "@mui/material"

import { normalList } from "@app/theme"
import { merge } from "@app/util"

export type NormalListProps = Omit<BoxProps<"ul">, "component">

export const NormalList = (props: NormalListProps): JSX.Element => {
    let {
        children = null,
        sx = {},
        ...otherProps
    } = props

    sx = merge(normalList, sx)

    return (
        <Box
            sx={sx}
            component="ul"
            {...otherProps}>
            {children && children}
        </Box>
    )
}
