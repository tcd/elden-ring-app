import type { SxProps } from "@mui/material"

/**
 * Applies styles for the following states:
 * - `:hover`
 * - `:active`
 * - `:focus`
 */
export const hoverPlus = (sx: SxProps): SxProps => {
    return {
        "&:hover, &:active, &:focus": sx,
    }
}
