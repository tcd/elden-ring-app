import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { ArmorType } from "@app/constants"
import { Armor } from "@app/types"
import { Actions } from "@app/state"
import { getImageSrc } from "@app/util"
import { EquipmentSlotImage } from "../EquipmentSlotImage"

interface ArmorSlotProps {
    type: ArmorType
    armor?: Armor
}

export const ArmorSlotContent = forwardRef<HTMLLIElement, ArmorSlotProps>(function ArmorSlotContent({ type, armor }: ArmorSlotProps, ref) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const elementId = `armor-slot-${type}`
    const imgProps = {
        src: null,
        alt: null,
    }

    if (armor) {
        imgProps.src = getImageSrc("Armor", armor.name, "256")
        imgProps.alt = armor.name
    }

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Armor", id: type }))
        // dispatch(Actions.Armor.setActiveType({ type: type }))
        navigate(`/armor/${type}#grid`)
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Armor", id: type }))
        dispatch(Actions.Armor.setActiveType({ type: type }))
    }

    const handleMouseExit = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Armor.clearActiveSlotId())
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
