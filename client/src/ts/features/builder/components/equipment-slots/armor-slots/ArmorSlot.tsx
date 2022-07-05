import { lowerCase } from "lodash"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { Armor, ArmorType } from "@app/types"
import { getImageSrc, EquipmentSlotImageUrls, cssUrl } from "@app/util"
import { MouseOverPopover } from "@app/shared"
import { Actions } from "@app/state"

export interface ArmorSlotProps {
    type: ArmorType
    armor?: Armor
}

export const ArmorSlot = ({ type, armor }: ArmorSlotProps) => {

    const dispatch = useDispatch()

    const slotSx: SxProps = {
        backgroundImage: cssUrl(EquipmentSlotImageUrls[type]),
    }

    const elementId = `armor-slot-${type}`
    const classNames = ["equipment-slot", "equipment-slot-armor", `equipment-slot-armor-${lowerCase(type)}`]
    let titleString = type.toString()
    let armorImage = null

    if (armor) {
        classNames.push("equipment-slot-filled")
        titleString = armor.name
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
        <MouseOverPopover id={elementId} popoverContent={titleString}>
            <Box
                component="li"
                sx={slotSx}
                id={elementId}
                className={classNames.join(" ")}
                onClick={handleClick}
            >
                {armorImage}
            </Box>
        </MouseOverPopover>
    )
}
