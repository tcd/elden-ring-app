import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"


import { QuickItemSlotId } from "@app/constants"
import { QuickItem } from "@app/types"
import { getImageSrcManual, EquipmentSlotImageUrls, cssUrl } from "@app/util"
import { Actions } from "@app/state"

const slotSx: SxProps = {
    backgroundImage: cssUrl(EquipmentSlotImageUrls.Talisman),
}

interface QuickItemSlotProps {
    id: QuickItemSlotId
    item: QuickItem
}

const quickItemSlotContent = forwardRef(({ id, item }: QuickItemSlotProps, ref) => {

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
    const classNames = ["er__equipmentGrid__cell"]
    let titleString = `Quick Item ${id}`
    let itemImage: JSX.Element = null

    if (item) {
        classNames.push("er__equipmentGrid__cell--filled")
        const src = getImageSrcManual("bad/equipment-slots/quick-items", "256")
        itemImage = <img className="img-fluid" src={src} alt={item.name} />
        titleString = item.name
    }

    return (
        <Box
            ref={ref}
            component="li"
            sx={slotSx}
            id={elementId}
            className={classNames.join(" ")}
            title={titleString}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        >
            {itemImage}
        </Box>
    )
})

quickItemSlotContent.displayName = "QuickItemSlotContent"
export const QuickItemSlotContent = quickItemSlotContent
