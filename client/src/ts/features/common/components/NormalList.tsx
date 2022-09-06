import merge from "lodash/merge"
import { Box, BoxProps } from "@mui/material"

import { normalList } from "@app/theme"

export type NormalListProps = BoxProps<"li">

export const NormalList = (props: NormalListProps): JSX.Element => {
    let {
        children = null,
        sx = {},
        ...otherProps
    } = props

    sx = merge({}, normalList, sx)

    return (
        <Box sx={sx} {...otherProps}>
            {children && children}
        </Box>
    )
}
