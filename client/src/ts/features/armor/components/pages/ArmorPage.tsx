import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { ArmorType } from "@app/constants"
import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { Page } from "@app/shared"
import { ArmorDetail, ArmorMenu } from "@app/features/armor/components"
import { CharacterStatus } from "@app/features/builder"

export const ArmorPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const { slotId } = useParams<{ slotId: ArmorType }>()

    const activeType = useSelector(Selectors.Armor.activeType)

    useEffect(() => {
        if (isBlank(activeType)) {
            dispatch(Actions.Armor.setActiveType({ type: slotId }))
        }
    }, [activeType, slotId, dispatch])

    return (
        <Page pageName="armor">
            <div className="row">
                <div className="col">
                    <ArmorMenu />
                </div>
                <div className="col">
                    <ArmorDetail />
                </div>
                <div className="col">
                    <CharacterStatus />
                </div>
            </div>
        </Page>
    )
}
