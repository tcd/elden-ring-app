import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"
import { PopperUnstyled, ClickAwayListener } from "@mui/base"

import { Actions } from "@app/state"
import { WeaponSlotProps, WeaponSlot } from "./WeaponSlot"

export interface ContextMenuState {
    mouseX: number
    mouseY: number
}

export const WeaponSlotContextMenu = (props: WeaponSlotProps): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const slotRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const id = open ? "er__contextMenu" : undefined

    const { slotId } = props

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault()
        setAnchorEl(anchorEl ? null : slotRef.current)
    }

    const handleClickAway = () => {
        setAnchorEl(null)
    }

    const handleClickChange = () => {
        setAnchorEl(null)
        dispatch(Actions.Weapons.openWeaponsMenu({ id: slotId }))
    }

    const handleClickAshOfWar = () => {
        setAnchorEl(null)
        navigate(`/weapons/${slotId}/ashes-of-war`)
        // dispatch(Actions.Weapons.openWeaponsMenu({ id: props.slotId }))
    }

    const handleClickUnequip = () => {
        setAnchorEl(null)
        dispatch(Actions.Weapons.unequipWeaponBySlotId({ id: slotId }))
    }

    let menuItems = [
        { name: "Choose",     action: handleClickChange },
        // { name: "Ash of War", action: handleClickAshOfWar },
        // { name: "Unequip",    action: handleClickUnequip },
    ]

    if (!props.data.empty) {
        menuItems = [
            { name: "Choose",     action: handleClickChange },
            { name: "Ash of War", action: handleClickAshOfWar },
            { name: "Unequip",    action: handleClickUnequip },
        ]
    }

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
