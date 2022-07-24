import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { AmmunitionSlotId } from "@app/constants"
import { cssUrl, EquipmentSlotImageUrls } from "@app/util"
import { Actions } from "@app/state"
// import { WeaponSlot } from "./WeaponSlot"
// import { WeaponSlotContextMenu as WeaponSlot } from "./WeaponSlotContextMenu"

export interface AmmunitionSlotProps {
    id: AmmunitionSlotId
}

const arrowSlot = forwardRef(({ id }: AmmunitionSlotProps, ref) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const elementId = `arrow-slot-${id}`
    const slotSx: SxProps = {
        backgroundImage: cssUrl(EquipmentSlotImageUrls.Arrow),
    }

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Ammunition", id: id }))
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Ammunition", id: id }))
    }

    return (
        <Box
            ref={ref}
            component="li"
            id={elementId}
            sx={slotSx}
            className="er__equipmentGrid__cell"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        >
            {/* <img className="img-fluid" src={imagePath} alt="arrows" /> */}
        </Box>
    )
})

arrowSlot.displayName = "ArrowSlot"
export const ArrowSlot = arrowSlot

const boltSlot = forwardRef(({ id }: AmmunitionSlotProps, ref) => {

    const dispatch = useDispatch()

    const elementId = `bolt-slot-${id}`
    const slotSx: SxProps = {
        backgroundImage: cssUrl(EquipmentSlotImageUrls.Arrow),
    }

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Ammunition", id: id }))
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Ammunition", id: id }))
    }

    return (
        <Box
            ref={ref}
            component="li"
            id={elementId}
            sx={slotSx}
            className="er__equipmentGrid__cell"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        >
            {/* <img className="img-fluid" src={imagePath} alt="arrows" /> */}
        </Box>
    )
})

boltSlot.displayName = "BoltSlot"
export const BoltSlot = boltSlot
