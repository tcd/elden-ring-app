import { forwardRef } from "react"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { Armor, ArmorType } from "@app/types"
import { getImageSrc, EquipmentSlotImageUrls, cssUrl } from "@app/util"
import { Actions } from "@app/state"

interface ArmorSlotProps {
    type: ArmorType
    armor?: Armor
}

const armorSlotContent = forwardRef(({ type, armor }: ArmorSlotProps, ref) => {
    const dispatch = useDispatch()

    const slotSx: SxProps = {
        backgroundImage: cssUrl(EquipmentSlotImageUrls[type]),
    }

    const elementId = `armor-slot-${type}`
    const classNames = ["er__equipmentGrid__cell"]
    let armorImage = null

    if (armor) {
        classNames.push("er__equipmentGrid__cell--filled")
        armorImage  = <img
            className="img-fluid"
            alt={armor.name}
            src={getImageSrc("Armor", armor.name, "256")}
        />
    }

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Armor", id: type }))
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Armor", id: type }))
    }

    return (
        <Box
            ref={ref}
            component="li"
            sx={slotSx}
            id={elementId}
            className={classNames.join(" ")}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        >
            {armorImage}
        </Box>
    )
})

armorSlotContent.displayName = "ArmorSlotContent"
export const ArmorSlotContent = armorSlotContent
