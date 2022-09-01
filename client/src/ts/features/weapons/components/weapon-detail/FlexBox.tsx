import type { SxProps } from "@mui/material"
import { Box } from "@mui/material"

import { invisibleContent } from "@app/theme"

export interface FlexBoxProps {
    left:  React.ReactNode
    right: React.ReactNode
}

export const FlexBox = ({ left, right }: FlexBoxProps): JSX.Element => {
    return (
        <Box sx={rowSx}>
            <Box sx={colSx}>
                {left}
            </Box>
            <Box sx={dividerSx} />
            <Box sx={colSx}>
                {right}
            </Box>
        </Box>
    )
}

// =============================================================================
// Styles
// =============================================================================

const rowSx: SxProps = {
    display: "flex",
    flexFlow: "row nowrap",
    width: "100%",
    alignItems: "stretch",
}

const dividerSx: SxProps = {
    ...invisibleContent,
    width: "60px",
}

const colSx: SxProps = {
    flexGrow: 1,
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "stretch",
}
