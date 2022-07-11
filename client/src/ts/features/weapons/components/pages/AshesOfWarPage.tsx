import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { WeaponSlotId } from "@app/types"
import { WeaponDetail, WeaponSkillMenu } from "@app/features/weapons/components"
import { CharacterStatus } from "@app/features/builder"

export const AshesOfWarPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const { slotId } = useParams<{ slotId: WeaponSlotId }>()

    const activeSlotId = useSelector(Selectors.Weapons.activeSlotId)

    useEffect(() => {
        dispatch(Actions.Core.setPageName("ashes-of-war"))
        if (isBlank(activeSlotId)) {
            dispatch(Actions.Weapons.setActiveSlotId({ id: slotId }))
            // dispatch(Actions.Weapons.startCustomizingWeapon())
        }
        return () => {
            // dispatch(Actions.Core.clearPageName())
        }
    }, [activeSlotId, slotId])

    return (
        <main id="er__pageRoot">
            <div className="row">
                <div className="col">
                    <div className="er__equipmentMenu">
                        <WeaponSkillMenu />
                    </div>
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
