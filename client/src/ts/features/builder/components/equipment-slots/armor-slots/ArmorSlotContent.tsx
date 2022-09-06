import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { ArmorType } from "@app/constants"
import { Armor } from "@app/types"
import { cssUrl } from "@app/theme"
import { getImageSrc, EquipmentSlotImageUrls } from "@app/util"
import { Actions } from "@app/state"

interface ArmorSlotProps {
    type: ArmorType
    armor?: Armor
}

export const ArmorSlotContent = forwardRef(function ArmorSlotContent({ type, armor }: ArmorSlotProps, ref) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const slotSx: SxProps = {
        backgroundImage: cssUrl(EquipmentSlotImageUrls[type]),
    }

    const elementId = `armor-slot-${type}`
    const classNames = ["er__equipmentSlot"]
    let armorImage = null

    if (armor) {
        classNames.push("er__equipmentSlot--filled")
        armorImage  = <img
            // className="img-fluid"
            alt={armor.name}
            src={getImageSrc("Armor", armor.name, "256")}
            style={{ width: "90%" }}
        />
    }

    const handleClick = () => {
        // dispatch(Actions.Armor.openArmorMenu({ type: type }))
        navigate(`/armor/${type}#grid`)
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
