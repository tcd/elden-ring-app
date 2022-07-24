import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
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
    const navigate = useNavigate()

    const { slotId, data: { name } } = props

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Weapon", id: slotId }))
        // dispatch(Actions.Weapons.setActiveSlotId({ id: slotId }))
        navigate(`/weapons/${slotId}#grid`)
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Weapon", id: slotId }))
        dispatch(Actions.Weapons.setActiveSlotId({ id: slotId }))
    }

    const elementId = `weapon-slot-${slotId}`
    const classNames = ["er__equipmentGrid__cell"]
    let weaponImageElement: JSX.Element = null
    let bgSrc: string = null

    if (slotId.startsWith("L")) {
        bgSrc = cssUrl(EquipmentSlotImageUrls.WeaponLeft)
    } else {
        bgSrc = cssUrl(EquipmentSlotImageUrls.WeaponRight)
    }

    const slotSx: SxProps = {
        "&::after": {
            backgroundImage: bgSrc,
        },
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
