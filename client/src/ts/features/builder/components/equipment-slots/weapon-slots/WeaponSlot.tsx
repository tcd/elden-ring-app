import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import type { WeaponSlotId } from "@app/constants"
import type { WeaponSlotData } from "@app/types"
import { weaponSlotDisplayName } from "@app/util"
import { Actions } from "@app/state"
import { MouseOverPopover, ErContextMenu } from "@app/features/common"

import { WeaponSlotContent } from "./WeaponSlotContent"

export interface WeaponSlotContextMenuProps {
    slotId: WeaponSlotId
    data: WeaponSlotData
}

export const WeaponSlot = (props: WeaponSlotContextMenuProps): JSX.Element => {

    const { slotId } = props

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let titleString: string

    // =========================================================================
    // Menu Item Handlers
    // =========================================================================

    const handleClickChange = () => {
        navigate(`/weapons/${slotId}#grid`)
        // dispatch(Actions.Weapons.openWeaponsMenu({ id: slotId }))
    }

    const handleClickAshOfWar = () => {
        navigate(`/weapons/${slotId}/ashes-of-war#grid`)
        // dispatch(Actions.Weapons.openWeaponsMenu({ id: props.slotId }))
    }

    const handleClickUnequip = () => {
        dispatch(Actions.Weapons.unequipWeaponBySlotId({ id: slotId }))
    }

    // =========================================================================
    // Rendering
    // =========================================================================

    let menuItems = [
        { text: "Choose",     action: handleClickChange },
        // { text: "Ash of War", action: handleClickAshOfWar },
        // { text: "Unequip",    action: handleClickUnequip },
    ]

    if (!props.data.empty) {
        menuItems = [
            { text: "Choose",     action: handleClickChange },
            { text: "Ash of War", action: handleClickAshOfWar },
            { text: "Unequip",    action: handleClickUnequip },
        ]
        titleString = props.data.displayName
    } else {
        titleString = weaponSlotDisplayName(slotId)
    }

    return (
        <ErContextMenu id={`${props.slotId}--slot-context-menu`} options={menuItems}>
            <MouseOverPopover id={`weapon-slot-${props.slotId}--popover`} popoverContent={titleString}>
                <WeaponSlotContent {...props} />
            </MouseOverPopover>
        </ErContextMenu>
    )
}
