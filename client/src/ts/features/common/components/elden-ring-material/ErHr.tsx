import { forwardRef } from "react"
import { Box, BoxProps } from "@mui/material"

import { ComponentSx } from "@app/theme"

export type ErHrVariant =
    | "full"
    | "inner"
    | "menu"

export type ErHrProps = Omit<BoxProps<"hr">, "component" | "children"> &  {
    // fullWidth?: boolean
    /** @default "full" */
    variant?: ErHrVariant
}

export const ErHr = forwardRef<HTMLHRElement, ErHrProps>(function ErHr(props: ErHrProps, ref) {

    const {
        variant = "full",
        ...otherProps
    } = props

    switch (variant) {
        case "full":  return <VARIANTS.Full  ref={ref} {...otherProps} />
        case "inner": return <VARIANTS.Inner ref={ref} {...otherProps} />
        case "menu":  return <VARIANTS.Menu  ref={ref} {...otherProps} />
        default: return null
    }
})

const VARIANTS = {

    Full: forwardRef(function ErHr(props: ErHrProps, ref) {
        let { sx = {} } = props
        sx = { ...ComponentSx.ErHr.borderSx, ...sx }
        return <Box ref={ref} component="hr" sx={sx} />
    }),

    Inner: forwardRef(function ErHr(props: ErHrProps, ref) {
        let { sx = {} } = props
        sx = { ...ComponentSx.ErHr.innerBorderWrapperSx, ...sx }
        return (
            <Box ref={ref} sx={sx}>
                <Box component="hr" sx={ComponentSx.ErHr.innerBorderContentSx} />
            </Box>
        )
    }),

    Menu: forwardRef(function ErHr(props: ErHrProps, ref) {
        let { sx = {} } = props
        sx = { ...ComponentSx.ErHr.equipmentMenuSx, ...sx }
        return <Box ref={ref} component="hr" sx={sx} />
    }),
}
