import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"
import { PopperUnstyled, ClickAwayListener } from "@mui/base"

import { WeaponSlotId, weaponSlotIdName, WeaponSlotData } from "@app/types"
import { Actions } from "@app/state"
import { MouseOverPopover } from "@app/shared"
import { WeaponSlot } from "./WeaponSlot"

// export interface ContextMenuState {
//     mouseX: number
//     mouseY: number
// }

export interface WeaponSlotContextMenuProps {
    slotId: WeaponSlotId
    data: WeaponSlotData
}

export const WeaponSlotContextMenu = (props: WeaponSlotContextMenuProps): JSX.Element => {

    const { slotId } = props

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const containerRef = useRef(null)
    const slotRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)
    const elementId = `weapon-slot-${slotId}`
    const id = open ? "er__contextMenu" : undefined
    let titleString: string

    const handleContextMenuFunc = (event: MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
        if (!containerRef?.current) { return }
        if (anchorEl) {
            // @ts-ignore: next-line
            if (event?.target?.id != elementId) {
                setAnchorEl(null)
            }
        }
    }

    useEffect(() => {
        document.addEventListener("contextmenu", handleContextMenuFunc)
        return () => {
            document.removeEventListener("contextMenu", handleContextMenuFunc)
        }
    }, [anchorEl, setAnchorEl])

    const closeContextMenu = () => {
        setAnchorEl(null)
    }

    // =========================================================================
    // Popup Handlers
    // =========================================================================

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault()
        if (anchorEl) {
            setAnchorEl(null)
        } else {
            setAnchorEl(slotRef.current)
        }
    }

    const handleClickAway = () => {
        closeContextMenu()
    }

    // =========================================================================
    // Menu Item Handlers
    // =========================================================================

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

    // =========================================================================
    // Rendering
    // =========================================================================

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
        titleString = props.data.displayName
    } else {
        titleString = weaponSlotIdName(slotId)
    }

    const menuItemElements = menuItems.map(({ name, action }) => (
        <li key={name} onClick={action}>{name}</li>
    ))

    return (
        <Box
            onContextMenu={handleContextMenu}
            style={{ cursor: "context-menu" }}
            ref={containerRef}
        >
            <MouseOverPopover id={elementId} popoverContent={titleString}>
                <WeaponSlot {...props} ref={slotRef} />
            </MouseOverPopover>
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
