import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import {
    ErPage,
    ArmorBuilderMenu,
    TalismanBuilderMenu,
    WeaponBuilderMenu,
    CharacterStatus,
    useHash,
} from "@app/features"

import { LevelUpMenu } from "."

export const MobileBuilderMenu = (_props: unknown): JSX.Element => {

    const tab = useHash()
    const navigate = useNavigate()
    const pageName = useSelector(Selectors.Core.pageName)

    if (tab === "") {
        navigate("#level")
    }

    let $menuElement: JSX.Element = null
    switch (pageName) {
        case null:       $menuElement = <LevelUpMenu />; break
        case "armor":    $menuElement = <ArmorBuilderMenu />; break
        case "talisman": $menuElement = <TalismanBuilderMenu />; break
        case "weapon":   $menuElement = <WeaponBuilderMenu />; break
        default:         $menuElement = <LevelUpMenu />; break
    }

    let $content: JSX.Element = null
    switch (tab) {
        case "level":     $content = <LevelUpMenu />; break
        case "status":    $content = <CharacterStatus />; break
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

