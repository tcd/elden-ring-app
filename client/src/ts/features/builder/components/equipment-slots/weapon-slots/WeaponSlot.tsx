import { lowerCase } from "lodash"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { WeaponSlotId, weaponSlotIdName, WeaponSlotData } from "@app/types"
import { getImageSrc, cssUrl, EquipmentSlotImageUrls } from "@app/util"
import { MouseOverPopover } from "@app/shared"
import { Actions } from "@app/state"

export interface WeaponSlotProps {
    slotId: WeaponSlotId
    data: WeaponSlotData
}

export const WeaponSlot = (props: WeaponSlotProps): JSX.Element => {

    const dispatch = useDispatch()

    const slotId = props.slotId
    const { name, displayName } = props.data

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Weapons.openWeaponsMenu({ id: slotId }))
    }

    const slotSx: SxProps = {}
    const elementId = `weapon-slot-${lowerCase(slotId)}`
    const classNames = ["er__equipmentSlot"]
    let weaponImageElement: JSX.Element = null
    let titleString: string

    if (slotId.startsWith("L")) {
        slotSx["backgroundImage"] = cssUrl(EquipmentSlotImageUrls.WeaponLeft)
    } else {
        slotSx["backgroundImage"] = cssUrl(EquipmentSlotImageUrls.WeaponRight)
    }

    if (name) {
        classNames.push("er__equipmentSlot--filled")
        titleString = displayName
        const src = getImageSrc("Weapon", name, "256")
        weaponImageElement = (
            <img
                className="img-fluid"
                src={src}
                alt={`${name} image`}
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
