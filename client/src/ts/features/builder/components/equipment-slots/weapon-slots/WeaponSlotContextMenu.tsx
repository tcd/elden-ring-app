import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { Box, SxProps, Menu, MenuItem, Typography } from "@mui/material"
import { PopperUnstyled, ClickAwayListener } from "@mui/base"

import { Actions } from "@app/state"
import { WeaponSlotProps, WeaponSlot } from "./WeaponSlot"

export interface ContextMenuState {
    mouseX: number
    mouseY: number
}

export const WeaponSlotContextMenu = (props: WeaponSlotProps): JSX.Element => {

    const dispatch = useDispatch()
    const slotRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const id = open ? "er__contextMenu" : undefined

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault()
        setAnchorEl(anchorEl ? null : slotRef.current)
    }

    const handleClickAway = () => {
        setAnchorEl(null)
    }

    const handleClickChange = () => {
        setAnchorEl(null)
        dispatch(Actions.Weapons.openWeaponsMenu({ id: props.slotId }))
    }

    const handleClickAshOfWar = () => {
        setAnchorEl(null)
        // dispatch(Actions.Weapons.openWeaponsMenu({ id: props.slotId }))
    }

    const handleClickUnequip = () => {
        setAnchorEl(null)
        dispatch(Actions.Weapons.unequipWeaponBySlotId({ id: props.slotId }))
    }

    const menuItems = [
        { name: "Choose",     action: handleClickChange },
        { name: "Ash of War", action: handleClickAshOfWar },
        { name: "Unequip",    action: handleClickUnequip },
    ]

    const menuItemElements = menuItems.map(({ name, action }) => (
        <li key={name} onClick={action}>{name}</li>
    ))

    return (
        <Box
            onContextMenu={handleContextMenu}
            style={{ cursor: "context-menu" }}
        >
            <WeaponSlot
                {...props}
                onContextMenu={handleContextMenu}
                ref={slotRef}
            />
            {/* <Menu
                // className="er__contextMenu"
                open={contextMenu !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined}
                PopoverClasses={{
                    paper: "testing",
                    root: "testing",
                }}
                PaperProps={{
                    id: "er__contextMenu",
                    elevation: 0,
                }}
                // MenuListProps={{ className: "er__contextMenu" }}
            >
                <MenuItem onClick={handleClickChange}>Choose</MenuItem>
                <MenuItem onClick={handleClickAshOfWar}>Ash of War</MenuItem>
                <MenuItem onClick={handleClickUnequip}>Unequip</MenuItem>
            </Menu> */}
            <ClickAwayListener onClickAway={handleClickAway}>
                <PopperUnstyled id={id} open={open} anchorEl={anchorEl}>
                    <div className="top-border"></div>
                    <ul>
                        {menuItemElements}
                    </ul>
                    <div className="bottom-border"></div>
                </PopperUnstyled>
            </ClickAwayListener>
        </Box>
    )
}
