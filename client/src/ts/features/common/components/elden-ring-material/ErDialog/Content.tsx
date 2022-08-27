import { forwardRef } from "react"
import { Box, styled } from "@mui/material"
import type { BoxProps } from "@mui/material"

import { contentStyles } from "./styles"

const StyledContent = styled(Box)<BoxProps>(({ theme }) => contentStyles(theme))

export const Content = forwardRef<HTMLDivElement, BoxProps>(function Content(props, ref) {
    return <StyledContent ref={ref} {...props} />
})
