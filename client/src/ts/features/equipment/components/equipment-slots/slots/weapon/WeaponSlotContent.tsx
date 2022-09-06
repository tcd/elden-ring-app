import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import type { WeaponSlotId, WeaponSlotData } from "@app/types"
import { getImageSrc, EquipmentSlotBackgroundId } from "@app/util"
import { Actions } from "@app/state"

import { EquipmentSlot } from "../EquipmentSlotImage"

export interface WeaponSlotProps {
    slotId: WeaponSlotId
    data: WeaponSlotData
}

export const WeaponSlotContent = forwardRef<HTMLLIElement, WeaponSlotProps>(function WeaponSlotContent(props: WeaponSlotProps, ref) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { slotId, data: { name } } = props

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Weapon", id: slotId }))
        // dispatch(Actions.Weapons.setActiveSlotId({ id: slotId }))
        navigate(`/weapons/${slotId}#grid`)
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Weapon", id: slotId }))
        dispatch(Actions.Weapons.setActiveSlotId({ id: slotId }))
    }

    const handleMouseExit = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Weapons.clearActiveSlotId())
    }

    const elementId = `weapon-slot-${slotId}`
    const imgProps = {
        src: null,
        alt: null,
    }

    const type: EquipmentSlotBackgroundId = slotId.startsWith("L") ? "WeaponLeft" : "WeaponRight"

    if (name) {
        imgProps.src = getImageSrc("Weapon", name, "256")
        imgProps.alt = name
    }

    return (
        <EquipmentSlot
            ref={ref}
            slotId={slotId}
            bgType={type}
            img={imgProps}
            BoxProps={{
                id: elementId,
                onClick: handleClick,
                onMouseEnter: handleMouseEnter,
                // onMouseLeave: handleMouseExit,
            }}
        />
    )
})
