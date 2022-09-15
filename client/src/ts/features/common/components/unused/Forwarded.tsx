// =============================================================================
// Replace `Forwarded` with the name of your component
// =============================================================================

import { forwardRef } from "react"
import { Box } from "@mui/material"

export interface ForwardedProps {

}

export const Forwarded = forwardRef(function Forwarded(props: ForwardedProps, ref) {
    return (
        <Box ref={ref}>
        </Box>
    )
})
