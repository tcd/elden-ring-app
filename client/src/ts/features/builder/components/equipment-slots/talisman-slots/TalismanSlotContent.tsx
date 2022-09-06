import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import type { Talisman, TalismanSlotId } from "@app/types"
import { cssUrl } from "@app/theme"
import { getImageSrc, EquipmentSlotImageUrls } from "@app/util"
import { Actions } from "@app/state"

const slotSx: SxProps = {
    backgroundImage: cssUrl(EquipmentSlotImageUrls.Talisman),
}

interface TalismanSlotProps {
    id: TalismanSlotId
    talisman: Talisman
}

export const TalismanSlotContent = forwardRef(function TalismanSlotContent({ id, talisman }: TalismanSlotProps, ref) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        // dispatch(Actions.Talismans.openTalismansMenu({ id }))
        navigate(`/talismans/${id}#grid`)
    }

    const elementId = `talisman-slot-${id}`
    const classNames = ["er__equipmentSlot"]
    let titleString = `Talisman ${id?.[1]}`
    let talismanImage: JSX.Element = null

    if (talisman) {
        classNames.push("er__equipmentSlot--filled")
        const src = getImageSrc("Talisman", talisman.name, "256")
        talismanImage = <img className="img-fluid" src={src} alt={talisman.name} style={{ width: "90%" }} />
        titleString = talisman.name
    }

    return (
        <Box
            ref={ref}
            component="li"
            sx={slotSx}
            id={elementId}
            className={classNames.join(" ")}
            title={titleString}
            onClick={handleClick}
        >
            {talismanImage}
        </Box>
    )
})
