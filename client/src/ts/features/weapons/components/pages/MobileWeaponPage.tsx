import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { Page } from "@app/shared"
import { WeaponDetail, WeaponMenu } from "@app/features/weapons/components"
import { CharacterStatus } from "@app/features/builder"

export const MobileWeaponPage = (_props: unknown): JSX.Element => {

    const tab = useSelector(Selectors.Weapons.mobileTab)

    let content

    switch (tab) {
        case "grid":   content = <WeaponMenu />;      break
        case "detail": content = <WeaponDetail />;    break
        case "status": content = <CharacterStatus />; break
        default:                                      break
    }

    return (
        <Page pageName="weapon">
            {content}
        </Page>
    )
}
