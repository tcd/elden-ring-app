import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { WeaponSlotId, WeaponSlotData } from "@app/types"
import { getImageSrc, EquipmentSlotBackgroundId } from "@app/util"
import { Actions } from "@app/state"
import { EquipmentSlotImage } from "../EquipmentSlotImage"

export interface WeaponSlotProps {
    slotId: WeaponSlotId
    data: WeaponSlotData
}

const weaponSlotContent = forwardRef<HTMLLIElement, WeaponSlotProps>((props: WeaponSlotProps, ref) => {

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
        <EquipmentSlotImage
            ref={ref}
            bgType={type}
            img={imgProps}
            BoxProps={{
                id: elementId,
                onClick: handleClick,
                onMouseEnter: handleMouseEnter,
                onmouseleave: handleMouseExit,
            }}
        />
    )
})

weaponSlotContent.displayName = "WeaponSlotContent"
export const WeaponSlotContent = weaponSlotContent