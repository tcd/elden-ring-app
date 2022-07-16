import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { TalismanSlotId } from "@app/constants"
import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { Page } from "@app/shared"
import { TalismanDetail, TalismanMenu } from "@app/features/talismans/components"
import { CharacterStatus } from "@app/features/builder"

export const TalismanPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const { slotId } = useParams<{ slotId: TalismanSlotId }>()

    const activeSlotId = useSelector(Selectors.Talismans.activeSlotId)

    useEffect(() => {
        if (isBlank(activeSlotId)) {
            dispatch(Actions.Talismans.setActiveSlotId({ id: slotId }))
        }
    }, [activeSlotId, slotId, dispatch])

    return (
        <Page pageName="talisman">
            <div className="row">
                <div className="col">
                    <TalismanMenu />
                </div>
                <div className="col">
                    <TalismanDetail />
                </div>
                <div className="col">
                    <CharacterStatus />
                </div>
            </div>
        </Page>
    )
}
