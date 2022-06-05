import { useSelector, useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { EModal, CustomSelect } from "@app/shared"

export const TalismanActionMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    // const talismanOptions = useSelector(Selectors.Builder.talismanOptions)

    const handleRequestClose = () => {
        dispatch(Actions.Builder.closeTalismanModal())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Builder.removeTalisman())
        dispatch(Actions.Builder.closeTalismanModal())
    }

    return (
        <div id="action-menu">
            <button type="button" className="elden-ring-button" onClick={handleRequestClose}>Close</button>
            <button type="button" className="elden-ring-button" onClick={handleRequestClear}>Clear</button>
        </div>
    )
}
