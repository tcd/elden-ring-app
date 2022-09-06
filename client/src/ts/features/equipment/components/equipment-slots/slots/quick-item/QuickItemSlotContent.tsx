import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import type { QuickItemSlotId } from "@app/constants"
import type { QuickItem } from "@app/types"
import { getImageSrcManual } from "@app/util"
import { Actions } from "@app/state"

import { EquipmentSlotImage } from "../EquipmentSlotImage"


interface QuickItemSlotProps {
    id: QuickItemSlotId
    item: QuickItem
}

export const QuickItemSlotContent = forwardRef<HTMLLIElement, QuickItemSlotProps>(function QuickItemSlotContent({ id, item }: QuickItemSlotProps, ref) {

    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "QuickItem", id: id }))
        // navigate(`/quick-items/${id}#grid`)
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "QuickItem", id: id }))
        dispatch(Actions.QuickItems.setActiveSlot({ id }))
    }

    const elementId = `quick-item-slot-${id}`
    const imgProps = {
        src: null,
        alt: null,
    }
    // let titleString = `Quick Item ${id}`

    if (item) {
        imgProps.alt = item.name
        imgProps.src = getImageSrcManual("bad/equipment-slots/quick-items", "256")
        // titleString = item.name
    }

    return (
        <EquipmentSlotImage
            ref={ref}
            slotId={id}
            bgType="QuickItem"
            img={imgProps}
            BoxProps={{
                id: elementId,
                onClick: handleClick,
                onMouseEnter: handleMouseEnter,
            }}
        />
    )
})
