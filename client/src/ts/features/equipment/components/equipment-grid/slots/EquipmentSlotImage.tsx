import { forwardRef, ReactNode } from "react"
import { Box, BoxProps, SxProps } from "@mui/material"

// import { EquipmentType } from "@app/types"
import { EquipmentSlotImageUrls, cssUrl, EquipmentSlotBackgroundId } from "@app/util"

export interface EquipmentSlotImageProps {
    bgType: EquipmentSlotBackgroundId
    filled: boolean
    children: ReactNode | JSX.Element
    BoxProps?: BoxProps
}

const defaultProps: Partial<EquipmentSlotImageProps> = {
    children: null,
    filled: false,
    BoxProps: {},
}

export const EquipmentSlotImage = forwardRef<HTMLLIElement, EquipmentSlotImageProps>(
    function EquipmentSlotImage(props: EquipmentSlotImageProps, ref): JSX.Element {

        const {
            bgType,
            filled,
            children,
            BoxProps,
        } = { ...defaultProps, ...props }

        const bgSrc = cssUrl(EquipmentSlotImageUrls[bgType])
        const className = filled ? "er__equipmentGrid__cell--filled" :  "er__equipmentGrid__cell"

        const slotSx: SxProps = {
            position: "relative",
            "&::after": {
                backgroundImage: bgSrc,
            },
        }

        return (
            <Box
                ref={ref}
                component="li"
                className={className}
                sx={slotSx}
                {...BoxProps}
            >
                {children && children}
            </Box>
        )
    },
)
