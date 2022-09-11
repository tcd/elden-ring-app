import { Box, BoxProps } from "@mui/material"

import { normalList } from "@app/theme"
import { merge } from "@app/util"

export type NormalListProps = BoxProps<"ul">

export const NormalList = (props: NormalListProps): JSX.Element => {
    let {
        children = null,
        sx = {},
        ...otherProps
    } = props

    sx = merge(normalList, sx)

    return (
        <Box sx={sx} {...otherProps}>
            {children && children}
        </Box>
    )
}
