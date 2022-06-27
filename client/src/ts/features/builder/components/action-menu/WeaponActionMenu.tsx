import { useSelector, useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"

export const WeaponActionMenu = (): JSX.Element => {
    const customizing = useSelector(Selectors.Weapons.smithing.areWeSmithing)
    return customizing ? <WeaponSkillActionMenu /> : <WeaponWeaponActionMenu />
}

const WeaponWeaponActionMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    const canCustomize = useSelector(Selectors.Weapons.smithing.canWeSmith)

    const handleRequestClose = () => {
        dispatch(Actions.Weapons.closeWeaponsMenu())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Weapons.removeWeapon())
        dispatch(Actions.Weapons.closeWeaponsMenu())
    }

    const handleRequestCustomize = () => {
        dispatch(Actions.Weapons.startCustomizingWeapon())
    }

    const customizeButton =
        canCustomize
            ? <button type="button" className="elden-ring-button" onClick={handleRequestCustomize}>Customize</button>
            : null

    return (
        <div id="action-menu">
            <button type="button" className="elden-ring-button" onClick={handleRequestClose}>Back</button>
            <button type="button" className="elden-ring-button" onClick={handleRequestClear}>Clear</button>
            {customizeButton}
        </div>
    )
}

const WeaponSkillActionMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    const handleRequestClose = () => {
        dispatch(Actions.Weapons.stopCustomizingWeapon())
    }

    const handleRequestClear = () => {
        // dispatch(Actions.Weapons.removeWeapon())
        dispatch(Actions.Weapons.stopCustomizingWeapon())
    }

    return (
        <div id="action-menu">
            <button type="button" className="elden-ring-button" onClick={handleRequestClose}>Back</button>
            <button type="button" className="elden-ring-button" onClick={handleRequestClear}>Clear</button>
        </div>
    )
}
