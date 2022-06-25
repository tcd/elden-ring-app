import { useDispatch } from "react-redux"

import { Actions } from "@app/state"

export const TalismanActionMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    const handleRequestClose = () => {
        dispatch(Actions.Talismans.closeTalismansMenu())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Talismans.removeTalisman())
        dispatch(Actions.Talismans.closeTalismansMenu())
    }

    return (
        <div id="action-menu">
            <button type="button" className="elden-ring-button" onClick={handleRequestClose}>Close</button>
            <button type="button" className="elden-ring-button" onClick={handleRequestClear}>Clear</button>
        </div>
    )
}
