import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { Page } from "@app/shared"
import { TalismanDetail, TalismanMenu } from "@app/features/talismans/components"
import { CharacterStatus } from "@app/features/builder"

export const MobileTalismanPage = (_props: unknown): JSX.Element => {

    const tab = useSelector(Selectors.Talismans.mobileTab)

    let content

    switch (tab) {
        case "grid":   content = <TalismanMenu />;    break
        case "detail": content = <TalismanDetail />;  break
        case "status": content = <CharacterStatus />; break
        default:                                      break
    }

    return (
        <Page pageName="talisman">
            {content}
        </Page>
    )
}
