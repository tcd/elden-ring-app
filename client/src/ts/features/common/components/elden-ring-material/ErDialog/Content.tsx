import { forwardRef } from "react"
import { Box } from "@mui/material"
import type { BoxProps } from "@mui/material"

import { ComponentSx } from "@app/theme"

export const Content = forwardRef<HTMLDivElement, BoxProps>(function Content(props, ref) {
    return (
        <Box
            ref={ref}
            {...props}
            sx={ComponentSx.ErDialog.contentSx}
        />
    )
})
