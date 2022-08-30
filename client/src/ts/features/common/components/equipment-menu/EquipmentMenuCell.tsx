import { forwardRef } from "react"
import { Box } from "@mui/material"
import type { BoxProps } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { RedX, MuiImg, MouseOverPopover } from "@app/shared"

const sx = ComponentSx.EquipmentMenu.grid

export type EquipmentMenuCellProps = Omit<BoxProps, "title" | "onClick"> & {
    img: string
    title: string
    onClick: (title: string) => void
    /** @default false */
    active?: boolean
    /** @default false */
    redX?: boolean
}

export const EquipmentMenuCell = forwardRef(function EquipmentMenuCell(props: EquipmentMenuCellProps, ref) {

    const {
        active = false,
        redX   = false,
        img,
        title,
        onClick,
    } = props

    const topSx = active ? sx.cell.active : sx.cell.base

    const $redX = redX ? <RedX /> : null

    return (
        <MouseOverPopover id={title} popoverContent={title}>
            <Box sx={topSx} ref={ref} onClick={() => onClick(title)}>
                <Box sx={sx.imageWrapper}>
                    <MuiImg
                        src={img}
                        alt={title}
                    />
                    {$redX}
                </Box>
            </Box>
        </MouseOverPopover>
    )
})
