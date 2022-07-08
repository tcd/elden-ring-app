import { useSelector, useDispatch } from "react-redux"

import { ArmorType } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { EModal, CustomSelect } from "@app/shared"

export const ArmorActionMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    // const modalOpen  = useSelector(Selectors.Builder.armor.modalOpen)
    // const activeType = useSelector(Selectors.Armor.activeType)

    const handleRequestClose = () => {
        dispatch(Actions.Armor.closeArmorMenu())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Armor.removeArmor())
        dispatch(Actions.Armor.closeArmorMenu())
    }

    const handleCharacterStatusClick = () => {
        dispatch(Actions.Builder.cycleCharacterStatus())
    }

    return (
        <div id="action-menu">
            <button type="button" className="er__button" onClick={handleRequestClose}>Close</button>
            <button type="button" className="er__button" onClick={handleRequestClear}>Clear</button>
            <button type="button" className="er__button" onClick={handleCharacterStatusClick}>Switch view (right)</button>
        </div>
    )
}
