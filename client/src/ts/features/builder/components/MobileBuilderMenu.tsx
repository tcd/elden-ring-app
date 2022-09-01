import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { ArmorBuilderMenu, ErPage, TalismanBuilderMenu, WeaponBuilderMenu, CharacterStatus } from "@app/features"

import { LevelUpMenu } from "."

export const MobileBuilderMenu = (_props: unknown): JSX.Element => {

    const pageName = useSelector(Selectors.Core.pageName)
    const tab = useSelector(Selectors.Builder.mobileTab)

    let $menuElement: JSX.Element = <LevelUpMenu />
    switch (pageName) {
        case null:       $menuElement = <LevelUpMenu />; break
        case "armor":    $menuElement = <ArmorBuilderMenu />; break
        case "talisman": $menuElement = <TalismanBuilderMenu />; break
        case "weapon":   $menuElement = <WeaponBuilderMenu />; break
        default:         $menuElement = <LevelUpMenu />; break
    }

    let $content: JSX.Element = null
    switch (tab) {
        case "level":  $content = <LevelUpMenu />;     break
        case "status": $content = <CharacterStatus />; break
        case "equipment": $content = $menuElement; break
        default: break
    }

    return (
        <ErPage pageName="builder" id="er__builder__root" className="container-fluid">
            <div id="er__builder__body" className="row">
                {$content}
            </div>
        </ErPage>
    )
}

