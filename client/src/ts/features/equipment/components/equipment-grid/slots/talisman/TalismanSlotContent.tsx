import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { TalismanSlotId } from "@app/constants"
import { Talisman } from "@app/types"
import { getImageSrc } from "@app/util"
import { Actions } from "@app/state"
import { EquipmentSlotImage } from "../EquipmentSlotImage"

interface TalismanSlotProps {
    id: TalismanSlotId
    talisman: Talisman
}

export const TalismanSlotContent = forwardRef<HTMLLIElement, TalismanSlotProps>(function TalismanSlotContent({ id, talisman }: TalismanSlotProps, ref) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Talisman", id: id }))
        // dispatch(Actions.Talismans.setActiveSlotId({ id }))
        navigate(`/talismans/${id}#grid`)
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Talisman", id: id }))
        dispatch(Actions.Talismans.setActiveSlotId({ id }))
    }

    const handleMouseExit = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Talismans.clearActiveSlotId())
    }

    const elementId = `talisman-slot-${id}`
    const imgProps = {
        src: null,
        alt: null,
    }
    // let titleString = `Talisman ${id}`

    if (talisman) {
        imgProps.src = getImageSrc("Talisman", talisman.name, "256")
        imgProps.alt = talisman.name
        // titleString = talisman.name
    }

    return (
        <EquipmentSlotImage
            ref={ref}
            bgType="Talisman"
            img={imgProps}
            BoxProps={{
                id: elementId,
                onClick: handleClick,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseExit,
            }}
        />
    )
})
