import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"
import { PopperUnstyled, ClickAwayListener } from "@mui/base"

import { ArmorType } from "@app/constants"
import { Armor } from "@app/types"
import { MouseOverPopover } from "@app/features/common"
import { Actions } from "@app/state"
import { ArmorSlotContent } from "./ArmorSlotContent"

interface ArmorSlotProps {
    type: ArmorType
    armor?: Armor
}

export const ArmorSlot = (props: ArmorSlotProps) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const containerRef = useRef(null)
    const slotRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const elementId = `armor-slot-${props.type}`
    const open = Boolean(anchorEl)
    const id = open ? "er__contextMenu" : undefined
    const titleString = props.armor?.name ? props.armor.name : props.type.toString()

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
    }, [anchorEl, setAnchorEl, dispatch])

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
        setAnchorEl(null)
    }

    // =========================================================================
    // Menu Item Handlers
    // =========================================================================

    const handleClickChange = () => {
        setAnchorEl(null)
        navigate(`/armor/${props.type}#grid`)
        // dispatch(Actions.Armor.openArmorMenu({ type: props.type }))
    }

    const handleClickUnequip = () => {
        setAnchorEl(null)
        dispatch(Actions.Armor.removeArmorByType({ type: props.type }))
    }

    // =========================================================================
    // Rendering
    // =========================================================================

    let menuItems = [
        { name: "Choose",     action: handleClickChange },
    ]

    if (props?.armor) {
        menuItems = [
            { name: "Choose",     action: handleClickChange },
            { name: "Unequip",    action: handleClickUnequip },
        ]
    }

    const menuItemElements = menuItems.map(({ name, action }) => (
        <li key={name} onClick={action}>{name}</li>
    ))

    return (
        <Box
            ref={containerRef}
            onContextMenu={handleContextMenu}
            style={{ cursor: "context-menu" }}
        >
            <MouseOverPopover id={elementId} popoverContent={titleString}>
                <ArmorSlotContent {...props} ref={slotRef} />
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
