import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { Page } from "@app/shared"
import { ArmorDetail, ArmorMenu } from "@app/features/armor/components"
import { CharacterStatus } from "@app/features/builder"

export const MobileArmorPage = (_props: unknown): JSX.Element => {

    const tab = useSelector(Selectors.Armor.mobileTab)

    let content: JSX.Element = null

    switch (tab) {
        case "grid":   content = <ArmorMenu />;       break
        case "detail": content = <ArmorDetail />;     break
        case "status": content = <CharacterStatus />; break
        default:                                      break
    }

    return (
        <Page pageName="armor">
            {content}
        </Page>
    )
}
