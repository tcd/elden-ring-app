import { forwardRef } from "react"
import type { TypographyProps, BoxProps } from "@mui/material"
import { Box, Typography, styled } from "@mui/material"

import {
    ThemeVars,
    rgba,
    linearGradient,
    boxShadow,
} from "@app/theme"

const offset = ThemeVars.typography.textShadowOffset

export const V1 = styled(Typography)<TypographyProps>(({ theme }) => ({
    textShadow: `${offset} ${offset} black`,
}))

export const V2 = forwardRef<any, BoxProps>(function ErTypography(props, ref) {

    // const {
    //     children,
    //     ...rest
    // } = props

    return (
        <Box {...props} ref={ref} />
    )
})

export const V3 = forwardRef<HTMLSpanElement>(function V3(props, ref) {

    // const {
    //     children,
    //     ...rest
    // } = props

    // const mergedProps = merge({}, defaultProps, rest)

    return (
        <Typography {...props} ref={ref}>

        </Typography>
    )
})

