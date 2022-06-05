import { useSelector, useDispatch } from "react-redux"

import { ArmorType } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { EModal, CustomSelect } from "@app/shared"

export const ArmorActionMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    const modalOpen  = useSelector(Selectors.Builder.armor.modalOpen)
    const activeType = useSelector(Selectors.Builder.armor.activeType)

    const handleRequestClose = () => {
        dispatch(Actions.Builder.closeArmorModal())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Builder.removeArmor())
        dispatch(Actions.Builder.closeArmorModal())
    }

    return (
        <div id="action-menu">
            <button type="button" className="elden-ring-button" onClick={handleRequestClose}>Close</button>
            <button type="button" className="elden-ring-button" onClick={handleRequestClear}>Clear</button>
        </div>
    )
}
