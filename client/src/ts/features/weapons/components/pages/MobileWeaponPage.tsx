import { useNavigate } from "react-router-dom"

import { useHash } from "@app/util"
import { ErPage } from "@app/features/common"
import { WeaponDetail, WeaponMenu } from "@app/features/weapons/components"
import { CharacterStatus } from "@app/features/character-status"

export const MobileWeaponPage = (_props: unknown): JSX.Element => {

    const tab = useHash()
    const navigate = useNavigate()

    if (tab === "") {
        navigate("#grid", { replace: true })
    }

    let content: JSX.Element = null

    switch (tab) {
        case "grid":   content = <WeaponMenu />;      break
        case "detail": content = <WeaponDetail />;    break
        case "status": content = <CharacterStatus />; break
        default:                                      break
    }

    return (
        <ErPage pageName="weapon">
            {content}
        </ErPage>
    )
}
