import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { ArmorBuilderMenu, Page, TalismanBuilderMenu, WeaponBuilderMenu, CharacterStatus } from "@app/features"

import { LevelUpMenu } from "."

export const MainBuilderMenu = (_props: unknown): JSX.Element => {

    const pageName = useSelector(Selectors.Core.pageName)

    let menuElement: JSX.Element = <LevelUpMenu />

    switch (pageName) {
        case null:       menuElement = <LevelUpMenu />; break
        case "armor":    menuElement = <ArmorBuilderMenu />; break
        case "talisman": menuElement = <TalismanBuilderMenu />; break
        case "weapon":   menuElement = <WeaponBuilderMenu />; break
        default:         menuElement = <LevelUpMenu />
    }

    return (
        <Page pageName="builder" id="er__builder__root" className="container-fluid">
            <div id="er__builder__body" className="row">
                {menuElement}
                <div id="er__builder__characterStatus">
                    <CharacterStatus />
                </div>
            </div>
        </Page>
    )
}

