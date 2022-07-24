import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { ArmorType } from "@app/constants"
import { Armor } from "@app/types"
import { Actions } from "@app/state"
import { getImageSrc, EquipmentSlotImageUrls, cssUrl, SpecialCharacters } from "@app/util"
import { EquipmentSlotImage } from "../EquipmentSlotImage"

interface ArmorSlotProps {
    type: ArmorType
    armor?: Armor
}

const armorSlotContent = forwardRef<HTMLLIElement, ArmorSlotProps>(({ type, armor }: ArmorSlotProps, ref) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const slotSx: SxProps = {
        "&::after": {
            // backgroundImage: bgSrc,
            backgroundImage: cssUrl(EquipmentSlotImageUrls[type]),
        },
    }

    const elementId = `armor-slot-${type}`
    const classNames = ["er__equipmentGrid__cell"]
    let filled = false
    let armorImage: JSX.Element = null

    if (armor) {
        filled = true
        classNames.push("er__equipmentGrid__cell--filled")
        // armorImage  = <img
        //     className="img-fluid"
        //     alt={armor.name}
        //     src={getImageSrc("Armor", armor.name, "256")}
        // />
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

    // return (
    //     <Box
    //         ref={ref}
    //         component="li"
    //         sx={slotSx}
    //         id={elementId}
    //         className={classNames.join(" ")}
    //         onClick={handleClick}
    //         onMouseEnter={handleMouseEnter}
    //     >
    //         {armorImage}
    //     </Box>
    // )
    return (
        <EquipmentSlotImage
            ref={ref}
            filled={filled}
            bgType={type}
            BoxProps={{
                id: elementId,
                onClick: handleClick,
                onMouseEnter: handleMouseEnter,
            }}
        >
            {armorImage}
        </EquipmentSlotImage>
    )
})

armorSlotContent.displayName = "ArmorSlotContent"
export const ArmorSlotContent = armorSlotContent
