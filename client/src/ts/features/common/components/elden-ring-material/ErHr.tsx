import merge from "lodash/merge"
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

export const ErHr = forwardRef(function ErHr(props: ErHrProps, ref) {

    const {
        variant = "full",
        ...otherProps
    } = props

    switch (variant) {
        case "full":  return <VARIANTS.Full  {...otherProps} />
        case "inner": return <VARIANTS.Inner {...otherProps} />
        case "menu":  return <VARIANTS.Menu  {...otherProps} />
        default: return null
    }
})

// export const ErHr = forwardRef(function ErHr(props: ErHrProps, ref) {
//
//     let {
//         sx        = {},
//         fullWidth = false,
//     } = props
//
//     if (fullWidth !== false) {
//         sx = { ...ComponentSx.ErHr.borderSx, ...sx }
//         return <Box ref={ref} component="hr" sx={sx} />
//     } else {
//         sx = { ...ComponentSx.ErHr.innerBorderWrapperSx, ...sx }
//         return (
//             <Box ref={ref} sx={sx}>
//                 <Box component="hr" sx={ComponentSx.ErHr.innerBorderContentSx} />
//             </Box>
//         )
//     }
// })

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
