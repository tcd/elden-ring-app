import { useSelector, useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { Weapon, WeaponSlotId, weaponSlotIdName } from "@app/types"
import { getImageSrc, cssUrl, EquipmentSlotImageUrls } from "@app/util"
import { MouseOverPopover } from "@app/shared"
import { Actions, Selectors } from "@app/state"

export interface WeaponSlotProps {
    slotId: WeaponSlotId
    weapon?: Weapon
}

export const WeaponSlot = (props: WeaponSlotProps): JSX.Element => {

    const dispatch = useDispatch()

    const slotId = props.slotId
    const weapon = props?.weapon

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Weapons.openWeaponsMenu({ id: slotId }))
    }

    const slotSx: SxProps = {}
    const elementId = `weapon-slot-${slotId}`
    const classNames = ["equipment-slot"]
    let weaponImageElement: JSX.Element = null
    let titleString: string

    if (slotId.startsWith("L")) {
        classNames.push("equipment-slot-weapon-left")
        slotSx["backgroundImage"] = cssUrl(EquipmentSlotImageUrls.WeaponLeft)
    } else {
        classNames.push("equipment-slot-weapon-right")
        slotSx["backgroundImage"] = cssUrl(EquipmentSlotImageUrls.WeaponRight)
    }

    if (weapon) {
        classNames.push("equipment-slot-filled")
        titleString = weapon.name
        const src = getImageSrc("Weapon", weapon.name, "256")
        weaponImageElement = (
            <img
                className="img-fluid"
                src={src}
                alt={`${weapon.name} image`}
            />
        )
    } else {
        titleString = weaponSlotIdName(slotId)
    }

    return (
        <MouseOverPopover id={elementId} popoverContent={titleString}>
            <Box
                component="li"
                id={elementId}
                sx={slotSx}
                className={classNames.join(" ")}
                onClick={handleClick}
            >
                {weaponImageElement && weaponImageElement}
            </Box>
        </MouseOverPopover>
    )
}
