import { useDispatch, useSelector } from "react-redux"

import { Selectors } from "@app/state"
import {
    Attributes,
    Overview,
} from "./level-up"
import {
    ArmorMenu,
    TalismanMenu,
    WeaponMenu,
} from "@app/features"
import { CharacterStatus } from "./right-side-panels"
import { ActionMenu } from "./action-menu"
import { Equipment } from "./equipment"

export const BuilderPage = (): JSX.Element => {

    // const dispatch = useDispatch

    const currentMenu = useSelector(Selectors.Builder.misc.currentMenu)

    let menuElement: JSX.Element = <LevelUpMenu />

    switch (currentMenu) {
        case null:
            menuElement = <LevelUpMenu />
            break
        case "armor":
            menuElement = <ArmorMenu />
            break
        case "talisman":
            menuElement = <TalismanMenu />
            break
        case "weapon":
            menuElement = <WeaponMenu />
            break
        default:
            menuElement = <LevelUpMenu />
            break
    }

    return (
        <main id="builder-root" className="container-fluid">
            <div id="builder-body" className="row">
                {menuElement}
                <div id="character-status">
                    <CharacterStatus />
                </div>
            </div>
            {/* <ArmorModal />
            <TalismanModal />
            <WeaponModal /> */}
            <ActionMenu />
        </main>
    )
}

const LevelUpMenu = (_props: unknown): JSX.Element => {
    return (
        <div id="variable-menu">
            <div className="builder-column">
                <Overview />
                <Attributes />
            </div>
            <div className="builder-column">
                <Equipment />
            </div>
        </div>
    )
}
