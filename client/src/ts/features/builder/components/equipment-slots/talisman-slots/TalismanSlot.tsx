import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { Talisman, TalismanSlotId } from "@app/types"
import { getImageSrc, EquipmentSlotImageUrls, cssUrl } from "@app/util"
import { MouseOverPopover } from "@app/shared"
import { Actions } from "@app/state"

const slotSx: SxProps = {
    backgroundImage: cssUrl(EquipmentSlotImageUrls.Talisman),
}

export interface TalismanSlotProps {
    id: TalismanSlotId
    talisman: Talisman
}

export const TalismanSlot = ({ id, talisman }: TalismanSlotProps): JSX.Element => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(Actions.Talismans.openTalismansMenu({ id }))
    }

    const classNames = [
        "equipment-slot",
        "equipment-slot-talisman",
    ]

    const elementId = `talisman-slot-${id}`
    let titleString = `Talisman ${id}`
    let talismanImage: JSX.Element = null

    if (talisman) {
        classNames.push("equipment-slot-filled")
        const src = getImageSrc("Talisman", talisman.name, "256")
        talismanImage = <img className="img-fluid" src={src} alt={talisman.name} />
        titleString = talisman.name
    }

    return (
        <MouseOverPopover id={elementId} popoverContent={titleString}>
            <Box
                component="li"
                sx={slotSx}
                id={elementId}
                className={classNames.join(" ")}
                title={titleString}
                onClick={handleClick}
            >
                {talismanImage}
            </Box>
        </MouseOverPopover>
    )
}
