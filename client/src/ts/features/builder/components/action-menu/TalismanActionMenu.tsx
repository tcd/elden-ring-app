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
