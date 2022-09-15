import { useNavigate } from "react-router-dom"

import { useHash } from "@app/util"
import { ErPage } from "@app/features/common"
import { TalismanDetail, TalismanMenu } from "@app/features/talismans/components"
import { CharacterStatus } from "@app/features/character-status"

export const MobileTalismanPage = (_props: unknown): JSX.Element => {

    const tab = useHash()
    const navigate = useNavigate()

    if (tab === "") {
        navigate("#grid", { replace: true })
    }

    let content: JSX.Element = null

    switch (tab) {
        case "grid":   content = <TalismanMenu />;    break
        case "detail": content = <TalismanDetail />;  break
        case "status": content = <CharacterStatus />; break
        default:                                      break
    }

    return (
        <ErPage pageName="talisman">
            {content}
        </ErPage>
    )
}
