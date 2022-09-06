import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { WeaponSlotId } from "@app/constants"
import { WeaponSlotData } from "@app/types"
import { cssUrl } from "@app/theme"
import { getImageSrc, EquipmentSlotImageUrls } from "@app/util"
import { Actions } from "@app/state"

export interface WeaponSlotProps {
    slotId: WeaponSlotId
    data: WeaponSlotData
}

export const WeaponSlotContent = forwardRef(function WeaponSlotContent(props: WeaponSlotProps, ref) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { slotId, data: { name } } = props

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        // dispatch(Actions.Weapons.openWeaponsMenu({ id: slotId }))
        navigate(`/weapons/${slotId}#grid`)
    }

    const slotSx: SxProps = {}
    const elementId = `weapon-slot-${slotId}`
    const classNames = ["er__equipmentSlot"]
    let weaponImageElement: JSX.Element = null

    if (slotId.startsWith("L")) {
        slotSx["backgroundImage"] = cssUrl(EquipmentSlotImageUrls.WeaponLeft)
    } else {
        slotSx["backgroundImage"] = cssUrl(EquipmentSlotImageUrls.WeaponRight)
    }

    if (name) {
        classNames.push("er__equipmentSlot--filled")
        const src = getImageSrc("Weapon", name, "256")
        weaponImageElement = (
            <img
                className="img-fluid"
                src={src}
                alt={`${name} image`}
                style={{ width: "90%" }}
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
        >
            {weaponImageElement && weaponImageElement}
        </Box>
    )
})
