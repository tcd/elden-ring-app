import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import type { Talisman, TalismanSlotId } from "@app/types"
import { MouseOverPopover, ErContextMenu } from "@app/features/common"
import { Actions } from "@app/state"

import { TalismanSlotContent } from "./TalismanSlotContent"

interface TalismanSlotProps {
    id: TalismanSlotId
    talisman: Talisman
}

export const TalismanSlot = (props: TalismanSlotProps): JSX.Element => {

    const {
        id,
        talisman = null,
    } = props

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const titleString = talisman ? talisman.name : `Talisman ${id?.[1]}`

    const handleClickChange = () => {
        navigate(`/talismans/${id}#grid`)
    }

    const handleClickUnequip = () => {
        dispatch(Actions.Talismans.removeTalismanBySlot({ id }))
    }

    let menuItems = [
        { text: "Choose", action: handleClickChange },
    ]

    if (props?.talisman) {
        menuItems = [
            { text: "Choose",  action: handleClickChange  },
            { text: "Unequip", action: handleClickUnequip },
        ]
    }

    return (
        <ErContextMenu id={`${id}-slot--context-menu`} options={menuItems}>
            <MouseOverPopover id={`talisman-slot-${id}--popover`} popoverContent={titleString}>
                <TalismanSlotContent {...props} />
            </MouseOverPopover>
        </ErContextMenu>
    )
}
