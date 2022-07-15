import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"
import { PopperUnstyled, ClickAwayListener } from "@mui/base"

import { Talisman, TalismanSlotId } from "@app/types"
import { MouseOverPopover } from "@app/shared"
import { Actions } from "@app/state"
import { TalismanSlotContent } from "./TalismanSlotContent"

interface TalismanSlotProps {
    id: TalismanSlotId
    talisman: Talisman
}

export const TalismanSlot = (props: TalismanSlotProps): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const containerRef = useRef(null)
    const slotRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)
    const id = open ? "er__contextMenu" : undefined
    const elementId = `talisman-slot-${props.id}`
    const titleString = props?.talisman ? props.talisman.name : `Talisman ${id}`

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
        navigate(`/talismans/${props.id}`)
    }

    const handleClickUnequip = () => {
        setAnchorEl(null)
        dispatch(Actions.Talismans.removeTalismanBySlot({ id: props.id }))
    }

    // =========================================================================
    // Rendering
    // =========================================================================

    let menuItems = [
        { name: "Choose",     action: handleClickChange },
    ]

    if (props?.talisman) {
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
                <TalismanSlotContent {...props} ref={slotRef} />
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
