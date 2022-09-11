import { Box } from "@mui/material"
import type { SxProps } from "@mui/material"
import { AliasesCSSProperties } from "@mui/system"

import { invisibleContent } from "@app/theme"
import { merge } from "@app/util"

// export type BrProps = Omit<BoxProps, "component"> & {
export type BrProps = {
    my?: AliasesCSSProperties["my"]
    sx?: SxProps
}

/**
 * Reference:
 *
 * - [`<br/>`: The Line Break element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
 */
export const Br = (props: BrProps): JSX.Element => {

    const defaultSx: SxProps = {
        ...invisibleContent,
        // my: 2,
    }

    const sx = merge(defaultSx, props?.sx ?? {})
    return (
        <Box sx={sx}>
            <br/>
        </Box>
    )
}
