import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import type { Armor, ArmorType } from "@app/types"
import { MouseOverPopover, ErContextMenu, ErContextMenuOption } from "@app/features/common"
import { Actions } from "@app/state"

import { ArmorSlotContent } from "./ArmorSlotContent"

interface ArmorSlotProps {
    type: ArmorType
    armor?: Armor
}

export const ArmorSlot = (props: ArmorSlotProps) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const titleString = props.armor?.name ? props.armor.name : props.type.toString()

    const handleClickChange = () => {
        navigate(`/armor/${props.type}#grid`)
        // dispatch(Actions.Armor.openArmorMenu({ type: props.type }))
    }

    const handleClickUnequip = () => {
        dispatch(Actions.Armor.removeArmorByType({ type: props.type }))
    }

    let menuItems: ErContextMenuOption[] = [
        { text: "Choose", action: handleClickChange },
    ]

    if (props?.armor) {
        menuItems = [
            { text: "Choose",  action: handleClickChange  },
            { text: "Unequip", action: handleClickUnequip },
        ]
    }

    return (
        <ErContextMenu id={`${props.type}-slot-context-menu`} options={menuItems}>
            <MouseOverPopover id={`armor-slot-${props.type}`} popoverContent={titleString}>
                <ArmorSlotContent {...props} />
            </MouseOverPopover>
        </ErContextMenu>
    )
}
