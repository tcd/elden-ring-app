import { useSelector } from "react-redux"
import type { BoxProps, SxProps } from "@mui/material"
import { forwardRef, useEffect, useState } from "react"
import { Box } from "@mui/material"

import type { EquipmentSlotId } from "@app/types"
import { ComponentSx, cssUrl } from "@app/theme"
import {
    EquipmentSlotImageUrls,
    EquipmentSlotBackgroundId,
    Audio,
} from "@app/util"
import { Selectors } from "@app/state"

export interface EquipmentSlotProps {
    slotId: EquipmentSlotId
    bgType: EquipmentSlotBackgroundId
    img: {
        src: string
        alt: string
    },
    BoxProps?: Omit<BoxProps<"li">, "children">
}

const defaultProps: Partial<EquipmentSlotProps> = {
    img: { src: null, alt: null },
    BoxProps: {},
}

export const EquipmentSlot = forwardRef<HTMLLIElement, EquipmentSlotProps>(
    function EquipmentSlot(props: EquipmentSlotProps, ref): JSX.Element {

        const {
            bgType,
            img,
            slotId,
            BoxProps,
        } = { ...defaultProps, ...props }

        const [extraSx, setExtraSx] = useState<SxProps>()

        const activeSlotId = useSelector(Selectors.Equipment.activeSlotId)

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

        useEffect(() => {
            if (slotId === activeSlotId) {
                // setExtraSx({ backgroundColor: "blue" })
            } else {
                setExtraSx({})
            }
        }, [activeSlotId, slotId, setExtraSx])

        return (
            <Box
                ref={ref}
                component="li"
                // FIXME: what tf is this error
                // @ts-ignore: next-line
                sx={{ ...sx, ...extraSx }}
                {...BoxProps}
            >
                <Box sx={ComponentSx.EquipmentSlots.grid.cellBackground(bgSrc)} />
                {$img}
            </Box>
        )
    },
)
