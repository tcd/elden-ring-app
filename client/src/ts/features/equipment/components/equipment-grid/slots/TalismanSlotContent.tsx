import { forwardRef } from "react"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { Talisman, TalismanSlotId } from "@app/types"
import { getImageSrc, EquipmentSlotImageUrls, cssUrl } from "@app/util"
import { Actions } from "@app/state"

const slotSx: SxProps = {
    backgroundImage: cssUrl(EquipmentSlotImageUrls.Talisman),
}

interface TalismanSlotProps {
    id: TalismanSlotId
    talisman: Talisman
}

const talismanSlotContent = forwardRef(({ id, talisman }: TalismanSlotProps, ref) => {

    const dispatch = useDispatch()

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.clickSlot({ type: "Talisman", id: id }))
    }

    const handleMouseEnter = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(Actions.Equipment.setActiveSlot({ type: "Talisman", id: id }))
    }

    const elementId = `talisman-slot-${id}`
    const classNames = ["er__equipmentGrid__cell"]
    let titleString = `Talisman ${id}`
    let talismanImage: JSX.Element = null

    if (talisman) {
        classNames.push("er__equipmentGrid__cell--filled")
        const src = getImageSrc("Talisman", talisman.name, "256")
        talismanImage = <img className="img-fluid" src={src} alt={talisman.name} />
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
            onMouseEnter={handleMouseEnter}
        >
            {talismanImage}
        </Box>
    )
})

talismanSlotContent.displayName = "TalismanSlotContent"
export const TalismanSlotContent = talismanSlotContent
