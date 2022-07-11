import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { ArmorType } from "@app/types"
import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { ArmorDetail, ArmorMenu } from "@app/features/armor/components"
import { CharacterStatus } from "@app/features/builder"

export const ArmorPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const { slotId } = useParams<{ slotId: ArmorType }>()

    const activeType = useSelector(Selectors.Armor.activeType)

    useEffect(() => {
        dispatch(Actions.Core.setPageName("armor"))
        if (isBlank(activeType)) {
            dispatch(Actions.Armor.setActiveType({ type: activeType }))
        }
        return () => {
            // dispatch(Actions.Core.clearPageName())
        }
    }, [activeType, slotId])

    return (
        <main id="er__pageRoot">
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
        </main>
    )
}
