import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { WeaponSlotId } from "@app/constants"
import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { WeaponDetail, WeaponMenu } from "@app/features/weapons/components"
import { CharacterStatus } from "@app/features/builder"

export const WeaponsPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const { slotId } = useParams<{ slotId: WeaponSlotId }>()

    const activeSlotId = useSelector(Selectors.Weapons.activeSlotId)

    useEffect(() => {
        dispatch(Actions.Core.setPageName("weapon"))
        if (isBlank(activeSlotId)) {
            dispatch(Actions.Weapons.setActiveSlotId({ id: slotId }))
            // dispatch(Actions.Weapons.startCustomizingWeapon())
        }
        return () => {
            // dispatch(Actions.Core.clearPageName())
        }
    }, [activeSlotId, slotId, dispatch])

    return (
        <main id="er__pageRoot">
            <div className="row">
                <div className="col">
                    <WeaponMenu />
                </div>
                <div className="col">
                    <WeaponDetail />
                </div>
                <div className="col">
                    <CharacterStatus />
                </div>
            </div>
        </main>
    )
}
