import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { WeaponSlotId } from "@app/constants"
import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { Page } from "@app/shared"
import { WeaponDetail, WeaponSkillMenu } from "@app/features/weapons/components"
import { CharacterStatus } from "@app/features/character-status"

export const AshesOfWarPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const { slotId } = useParams<{ slotId: WeaponSlotId }>()

    const activeSlotId = useSelector(Selectors.Weapons.activeSlotId)

    useEffect(() => {
        if (isBlank(activeSlotId)) {
            dispatch(Actions.Weapons.setActiveSlotId({ id: slotId }))
        }
    }, [activeSlotId, slotId, dispatch])

    return (
        <Page pageName="ashes-of-war">
            <div className="row">
                <div className="col">
                    <WeaponSkillMenu />
                </div>
                <div className="col">
                    <WeaponDetail />
                </div>
                <div className="col">
                    <CharacterStatus />
                </div>
            </div>
        </Page>
    )
}
