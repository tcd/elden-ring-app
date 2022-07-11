import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"

import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { WeaponSlotId } from "@app/types"
import { WeaponMenu } from "@app/features/weapons"
import { WeaponDetail, WeaponMenuGrid, WeaponSkillMenu } from "@app/features/weapons/components"

export const AshesOfWarPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const { slotId } = useParams<{ slotId: WeaponSlotId }>()

    const activeSlotId = useSelector(Selectors.Weapons.activeSlotId)

    useEffect(() => {
        dispatch(Actions.Core.setPageName("ashes-of-war"))
        if (isBlank(activeSlotId)) {
            dispatch(Actions.Weapons.setActiveSlotId({ id: slotId }))
            dispatch(Actions.Weapons.startCustomizingWeapon())
        }
        return () => {
            // dispatch(Actions.Core.clearPageName())
        }
    }, [activeSlotId, slotId])

    return (
        <main id="er__pageRoot">
            <div className="row">
                <div className="col">
                    <WeaponSkillMenu />
                </div>
                <div className="col">
                    <WeaponDetail />
                </div>
            </div>
        </main>
    )
}
