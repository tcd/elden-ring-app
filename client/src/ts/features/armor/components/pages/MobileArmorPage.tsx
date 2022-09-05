import { useNavigate } from "react-router-dom"

import { ErPage, useHash } from "@app/features/common"
import { ArmorDetail, ArmorMenu } from "@app/features/armor/components"
import { CharacterStatus } from "@app/features/character-status"

export const MobileArmorPage = (_props: unknown): JSX.Element => {

    const tab = useHash()
    const navigate = useNavigate()

    if (tab === "") {
        navigate("#grid", { replace: true })
    }

    let content: JSX.Element = null

    switch (tab) {
        case "grid":   content = <ArmorMenu />;       break
        case "detail": content = <ArmorDetail />;     break
        case "status": content = <CharacterStatus />; break
        default:                                      break
    }

    return (
        <ErPage pageName="armor">
            {content}
        </ErPage>
    )
}
