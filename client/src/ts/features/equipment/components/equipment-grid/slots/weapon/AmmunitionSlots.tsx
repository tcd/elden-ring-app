import { forwardRef } from "react"
import { useDispatch } from "react-redux"

import { AmmunitionSlotId } from "@app/constants"
import { Actions } from "@app/state"
import { EquipmentSlotImage } from "../EquipmentSlotImage"

export interface AmmunitionSlotProps {
    id: AmmunitionSlotId
}

export const ArrowSlot = forwardRef<HTMLLIElement, AmmunitionSlotProps>(function ArrowSlot({ id }: AmmunitionSlotProps, ref) {

    const dispatch = useDispatch()

    const elementId = `arrow-slot-${id}`

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Ammunition", id: id }))
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Ammunition", id: id }))
    }

    const handleMouseExit = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Ammunition.clearActiveSlotId())
    }

    return (
        <EquipmentSlotImage
            ref={ref}
            bgType="Arrow"
            img={null}
            BoxProps={{
                id: elementId,
                onClick: handleClick,
                onMouseEnter: handleMouseEnter,
                onmouseleave: handleMouseExit,
            }}
        />
    )
})

export const BoltSlot = forwardRef<HTMLLIElement, AmmunitionSlotProps>(function BoltSlot({ id }: AmmunitionSlotProps, ref) {

    const dispatch = useDispatch()

    const elementId = `bolt-slot-${id}`

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Ammunition", id: id }))
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Ammunition", id: id }))
    }

    const handleMouseExit = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Ammunition.clearActiveSlotId())
    }

    return (
        <EquipmentSlotImage
            ref={ref}
            bgType="Bolt"
            img={null}
            BoxProps={{
                id: elementId,
                onClick: handleClick,
                onMouseEnter: handleMouseEnter,
                onmouseleave: handleMouseExit,
            }}
        />
    )

})
