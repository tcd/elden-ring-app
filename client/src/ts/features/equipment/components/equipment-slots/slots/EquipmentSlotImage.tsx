import type { BoxProps } from "@mui/material"
import { forwardRef } from "react"
import { Box } from "@mui/material"

import type { EquipmentSlotId } from "@app/types"
import { ComponentSx, cssUrl } from "@app/theme"
import {
    EquipmentSlotImageUrls,
    EquipmentSlotBackgroundId,
    Audio,
} from "@app/util"

export interface EquipmentSlotImageProps {
    slotId: EquipmentSlotId
    bgType: EquipmentSlotBackgroundId
    img: {
        src: string
        alt: string
    },
    BoxProps?: Omit<BoxProps<"li">, "children">
}

const defaultProps: Partial<EquipmentSlotImageProps> = {
    img: { src: null, alt: null },
    BoxProps: {},
}

export const EquipmentSlotImage = forwardRef<HTMLLIElement, EquipmentSlotImageProps>(
    function EquipmentSlotImage(props: EquipmentSlotImageProps, ref): JSX.Element {

        const {
            bgType,
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
        const sx = filled ? ComponentSx.EquipmentSlots.grid.filledCell : ComponentSx.EquipmentSlots.grid.cell

        let $img: JSX.Element = null

        if (filled) {
            $img = <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={ComponentSx.EquipmentSlots.grid.cellImage}
            />

        }

        return (
            <Box
                ref={ref}
                component="li"
                sx={sx}
                {...BoxProps}
            >
                <Box sx={ComponentSx.EquipmentSlots.grid.cellBackground(bgSrc)} />
                {$img}
            </Box>
        )
    },
)
