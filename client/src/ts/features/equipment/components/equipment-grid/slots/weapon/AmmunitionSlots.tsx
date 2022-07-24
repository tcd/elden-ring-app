import { forwardRef } from "react"
import { useDispatch } from "react-redux"

import { AmmunitionSlotId } from "@app/constants"
import { Actions } from "@app/state"
import { EquipmentSlotImage } from "../EquipmentSlotImage"

export interface AmmunitionSlotProps {
    id: AmmunitionSlotId
}

const arrowSlot = forwardRef<HTMLLIElement, AmmunitionSlotProps>(({ id }: AmmunitionSlotProps, ref) => {

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

arrowSlot.displayName = "ArrowSlot"
export const ArrowSlot = arrowSlot

const boltSlot = forwardRef<HTMLLIElement, AmmunitionSlotProps>(({ id }: AmmunitionSlotProps, ref) => {

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

boltSlot.displayName = "BoltSlot"
export const BoltSlot = boltSlot
