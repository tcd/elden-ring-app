import type { ReactNode } from "react"
import type { BoxProps } from "@mui/material"
import { forwardRef } from "react"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import {
    EquipmentSlotImageUrls,
    cssUrl,
    EquipmentSlotBackgroundId,
    Audio,
} from "@app/util"

export interface EquipmentSlotImageProps {
    bgType: EquipmentSlotBackgroundId
    children?: ReactNode
    img: {
        src: string
        alt: string
    },
    BoxProps?: BoxProps<"li">
}

const defaultProps: Partial<EquipmentSlotImageProps> = {
    children: null,
    img: { src: null, alt: null },
    BoxProps: {},
}

export const EquipmentSlotImage = forwardRef<HTMLLIElement, EquipmentSlotImageProps>(
    function EquipmentSlotImage(props: EquipmentSlotImageProps, ref): JSX.Element {

        const {
            bgType,
            children,
            img,
            BoxProps,
        } = { ...defaultProps, ...props }

        if (BoxProps?.onMouseEnter) {
            const _onMouseEnter = BoxProps.onMouseEnter
            BoxProps.onMouseEnter = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                Audio.menuClick()
                _onMouseEnter(event)
            }
        }

        const bgSrc = cssUrl(EquipmentSlotImageUrls[bgType])
        const filled = img?.src != null
        const sx = filled ? ComponentSx.EquipmentGrid.grid.filledCell : ComponentSx.EquipmentGrid.grid.cell

        let $img: JSX.Element = null

        if (filled) {
            $img = <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={ComponentSx.EquipmentGrid.grid.cellImage}
            />

        }

        return (
            <Box
                ref={ref}
                component="li"
                sx={sx}
                {...BoxProps}
            >
                <Box sx={ComponentSx.EquipmentGrid.grid.cellBackground(bgSrc)} />
                {$img}
                {children && children}
            </Box>
        )
    },
)
