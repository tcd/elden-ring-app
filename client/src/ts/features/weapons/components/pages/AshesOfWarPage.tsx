import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"

import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { WeaponSlotId } from "@app/types"
import { WeaponMenu } from "@app/features/weapons"

export const AshesOfWarPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const { slotId } = useParams<{ slotId: WeaponSlotId }>()

    const activeSlotId = useSelector(Selectors.Weapons.activeSlotId)

    useEffect(() => {
        // Anything in here is fired on component mount.
        dispatch(Actions.Core.setPageName("weapon"))
        if (isBlank(activeSlotId)) {
            dispatch(Actions.Weapons.setActiveSlotId({ id: slotId }))
            dispatch(Actions.Weapons.startCustomizingWeapon())
        }
        return () => {
            // Anything in here is fired on component unmount.
            dispatch(Actions.Core.clearPageName())
        }
    }, [slotId])

    return (
        <>
            <WeaponMenu />
        </>
    )
}
