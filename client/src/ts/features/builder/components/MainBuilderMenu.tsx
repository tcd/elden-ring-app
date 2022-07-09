import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { ArmorMenu, TalismanMenu, WeaponMenu } from "@app/features"

import { LevelUpMenu } from "./level-up"
import { CharacterStatus } from "./right-side-panels"
import { ActionMenu } from "./action-menu"

export const MainBuilderMenu = (_props: unknown): JSX.Element => {

    const currentMenu = useSelector(Selectors.Builder.misc.currentMenu)

    let menuElement: JSX.Element = <LevelUpMenu />

    switch (currentMenu) {
        case null:       menuElement = <LevelUpMenu />;  break
        case "armor":    menuElement = <ArmorMenu />;    break
        case "talisman": menuElement = <TalismanMenu />; break
        case "weapon":   menuElement = <WeaponMenu />;   break
        default:         menuElement = <LevelUpMenu />
    }

    return (
        <main id="er__builder__root" className="container-fluid">
            <div id="er__builder__body" className="row">
                {menuElement}
                <div id="er__builder__characterStatus">
                    <CharacterStatus />
                </div>
            </div>
            <ActionMenu />
        </main>
    )
}

