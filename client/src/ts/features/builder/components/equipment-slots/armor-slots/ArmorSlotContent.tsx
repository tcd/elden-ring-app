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
    const classNames = ["er__equipmentSlot"]
    let armorImage = null

    if (armor) {
        classNames.push("er__equipmentSlot--filled")
        armorImage  = <img
            className="img-fluid"
            alt={armor.name}
            src={getImageSrc("Armor", armor.name, "256")}
        />
    }

    const handleClick = () => {
        dispatch(Actions.Armor.openArmorMenu({ type: type }))
    }

    return (
        <Box
            ref={ref}
            component="li"
            sx={slotSx}
            id={elementId}
            className={classNames.join(" ")}
            onClick={handleClick}
        >
            {armorImage}
        </Box>
    )
})

armorSlotContent.displayName = "ArmorSlotContent"
export const ArmorSlotContent = armorSlotContent