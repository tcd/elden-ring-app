import { forwardRef } from "react"
import { Box } from "@mui/material"
import type { BoxProps } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { RedX, MuiImg, MouseOverPopover } from "@app/features/common"

const sx = ComponentSx.EquipmentMenu.grid

export type CellProps = Omit<BoxProps, "title" | "onClick"> & {
    img: string
    title: string
    onClick: (title: string) => void
    /** @default false */
    active?: boolean
    /** @default false */
    redX?: boolean
}

export const Cell = forwardRef(function EquipmentMenuCell(props: CellProps, ref) {

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
