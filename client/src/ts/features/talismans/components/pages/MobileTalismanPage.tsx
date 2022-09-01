import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { ErPage } from "@app/shared"
import { TalismanDetail, TalismanMenu } from "@app/features/talismans/components"
import { CharacterStatus } from "@app/features/character-status"

export const MobileTalismanPage = (_props: unknown): JSX.Element => {

    const tab = useSelector(Selectors.Talismans.mobileTab)

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
