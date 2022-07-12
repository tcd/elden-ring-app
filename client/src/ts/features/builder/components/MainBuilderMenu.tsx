import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { ArmorBuilderMenu, TalismanBuilderMenu, WeaponBuilderMenu } from "@app/features"

import { LevelUpMenu } from "./level-up"
import { CharacterStatus } from "./right-side-panels"

export const MainBuilderMenu = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.Core.setPageName("equipment"))
        return () => {
            dispatch(Actions.Core.clearPageName())
        }
    }, [dispatch])

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
        <main id="er__builder__root" className="container-fluid">
            <div id="er__builder__body" className="row">
                {menuElement}
                <div id="er__builder__characterStatus">
                    <CharacterStatus />
                </div>
            </div>
        </main>
    )
}

