import * as React from "react"
import { useDispatch } from "react-redux"
import { Box, SxProps, Menu, MenuItem, Typography } from "@mui/material"

import { WeaponSlotId, weaponSlotIdName, WeaponSlotData } from "@app/types"
import { getImageSrc, cssUrl, EquipmentSlotImageUrls } from "@app/util"
import { MouseOverPopover } from "@app/shared"
import { Actions } from "@app/state"
import { WeaponSlotProps, WeaponSlot } from "./WeaponSlot"

export interface ContextMenuState {
    mouseX: number
    mouseY: number
}

export const WeaponSlotContextMenu = (props: WeaponSlotProps): JSX.Element => {

    const dispatch = useDispatch()

    const [contextMenu, setContextMenu] = React.useState<ContextMenuState | null>(null)

    const slotId = props.slotId

    // const elementId = `weapon-slot-${lowerCase(slotId)}-context-menu`
    const elementId = `er__contextMenu__weaponSlot${slotId}`

    const handleClose = () => {
        setContextMenu(null)
    }

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault()
        // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
        // Other native context menus might behave different.
        // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
        if (contextMenu !== null) {
            setContextMenu(null)
        }
        setContextMenu({
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
        })
    }

    return (
        <Box
            id={elementId}
            onContextMenu={handleContextMenu}
            style={{ cursor: "context-menu" }}
        >
            <WeaponSlot {...props} />
            <Menu
                open={contextMenu !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined}
            >
                <MenuItem onClick={handleClose}>Copy</MenuItem>
                <MenuItem onClick={handleClose}>Print</MenuItem>
                <MenuItem onClick={handleClose}>Highlight</MenuItem>
                <MenuItem onClick={handleClose}>Email</MenuItem>
            </Menu>
        </Box>
    )
}
