import { forwardRef } from "react"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { WeaponSlotId, weaponSlotIdName, WeaponSlotData } from "@app/types"
import { getImageSrc, cssUrl, EquipmentSlotImageUrls } from "@app/util"
import { MouseOverPopover } from "@app/shared"
import { Actions } from "@app/state"

export interface WeaponSlotProps {
    slotId: WeaponSlotId
    data: WeaponSlotData
    // onClick:
    // onContextMenu: (event: React.MouseEvent<any>) => any,
}

// const defaultProps: Partial<WeaponSlotProps> = {
//     onContextMenu: () => { return null },
// }

const weaponSlot = forwardRef((props: WeaponSlotProps, ref) => {

    // props = {
    //     ...defaultProps,
    //     ...props,
    // }

    const dispatch = useDispatch()

    const slotId = props.slotId
    const { name, displayName } = props.data

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Weapons.openWeaponsMenu({ id: slotId }))
    }

    const slotSx: SxProps = {}
    const elementId = `weapon-slot-${slotId}`
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
        // <MouseOverPopover id={elementId} popoverContent={titleString}>
        <Box
            ref={ref}
            component="li"
            id={elementId}
            sx={slotSx}
            className={classNames.join(" ")}
            onClick={handleClick}
            // onContextMenu={props.onContextMenu}
        >
            {weaponImageElement && weaponImageElement}
        </Box>
        // </MouseOverPopover>
    )
})

weaponSlot.displayName = "WeaponSlot"
export const WeaponSlot = weaponSlot
