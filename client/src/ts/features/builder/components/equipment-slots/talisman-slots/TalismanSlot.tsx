import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { TalismanSlotId } from "@app/constants"
import { Talisman } from "@app/types"
import { MouseOverPopover, ErContextMenu } from "@app/features/common"
import { Actions } from "@app/state"

import { TalismanSlotContent } from "./TalismanSlotContent"

interface TalismanSlotProps {
    id: TalismanSlotId
    talisman: Talisman
}

export const TalismanSlot = (props: TalismanSlotProps): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const titleString = props?.talisman ? props.talisman.name : `Talisman ${props.id}`

    const handleClickChange = () => {
        navigate(`/talismans/${props.id}#grid`)
    }

    const handleClickUnequip = () => {
        dispatch(Actions.Talismans.removeTalismanBySlot({ id: props.id }))
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
        <ErContextMenu id={`${props.id}-slot--context-menu`} options={menuItems}>
            <MouseOverPopover id={`talisman-slot-${props.id}--popover`} popoverContent={titleString}>
                <TalismanSlotContent {...props} />
            </MouseOverPopover>
        </ErContextMenu>
    )
}
