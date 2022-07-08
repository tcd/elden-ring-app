import { useSelector, useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { EModal, CustomSelect } from "@app/shared"
import { ArmorActionMenu, TalismanActionMenu, WeaponActionMenu } from "."

export const ActionMenu = (): JSX.Element => {

    // const dispatch = useDispatch()

    const currentMenu = useSelector(Selectors.Builder.misc.currentMenu)

    let menuElement: JSX.Element = <DefaultMenu />

    switch (currentMenu) {
        case null:
            menuElement = <DefaultMenu />
            break
        case "armor":
            menuElement = <ArmorActionMenu />
            break
        case "talisman":
            menuElement = <TalismanActionMenu />
            break
        case "weapon":
            menuElement = <WeaponActionMenu />
            break
        default:
            menuElement = <DefaultMenu />
            break
    }

    return menuElement
}

const DefaultMenu = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const handleCharacterStatusClick = () => {
        dispatch(Actions.Builder.cycleCharacterStatus())
    }

    return (
        <div id="action-menu">
            <button
                type="button"
                className="er__button"
                onClick={handleCharacterStatusClick}
            >
                Switch view (right)
            </button>
        </div>
    )
}
