import { forwardRef } from "react"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { WeaponSlotId, WeaponSlotData } from "@app/types"
import { getImageSrc, cssUrl, EquipmentSlotImageUrls } from "@app/util"
import { Actions } from "@app/state"

export interface WeaponSlotProps {
    slotId: WeaponSlotId
    data: WeaponSlotData
}

const weaponSlotContent = forwardRef((props: WeaponSlotProps, ref) => {

    const dispatch = useDispatch()

    const { slotId, data: { name } } = props

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Weapon", id: slotId }))
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Weapon", id: slotId }))
    }

    const slotSx: SxProps = {}
    const elementId = `weapon-slot-${slotId}`
    const classNames = ["er__equipmentGrid__cell"]
    let weaponImageElement: JSX.Element = null

    if (slotId.startsWith("L")) {
        slotSx["backgroundImage"] = cssUrl(EquipmentSlotImageUrls.WeaponLeft)
    } else {
        slotSx["backgroundImage"] = cssUrl(EquipmentSlotImageUrls.WeaponRight)
    }

    if (name) {
        classNames.push("er__equipmentGrid__cell--filled")
        const src = getImageSrc("Weapon", name, "256")
        weaponImageElement = (
            <img
                className="img-fluid"
                src={src}
                alt={`${name} image`}
            />
        )
    }

    return (
        <Box
            ref={ref}
            component="li"
            id={elementId}
            sx={slotSx}
            className={classNames.join(" ")}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        >
            {weaponImageElement && weaponImageElement}
        </Box>
    )
})

weaponSlotContent.displayName = "WeaponSlotContent"
export const WeaponSlotContent = weaponSlotContent
