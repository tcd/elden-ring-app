import { useSelector, useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { EModal, CustomSelect } from "@app/shared"

export const WeaponActionMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    // const modalOpen = useSelector(Selectors.Builder.weapons.modalOpen)
    // const activeSlotId = useSelector(Selectors.Builder.weapons.activeSlotId)
    // const activeWeapon = useSelector(Selectors.Builder.weapons.active)
    // const weapons = useSelector(Selectors.Builder.api.weapons)

    const handleRequestClose = () => {
        dispatch(Actions.Weapons.closeWeaponsMenu())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Weapons.removeWeapon())
        dispatch(Actions.Weapons.closeWeaponsMenu())
    }

    const handleRequestCustomize = () => {
        // dispatch(Actions.Weapons.closeWeaponsMenu())
    }

    return (
        <div id="action-menu">
            <button type="button" className="elden-ring-button" onClick={handleRequestClose}>Back</button>
            <button type="button" className="elden-ring-button" onClick={handleRequestClear}>Clear</button>
            <button type="button" className="elden-ring-button" onClick={handleRequestCustomize}>Customize</button>
        </div>
    )
}
