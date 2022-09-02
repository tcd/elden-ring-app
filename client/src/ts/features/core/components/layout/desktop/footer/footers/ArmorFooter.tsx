import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"

import { AppFooterAction, AppFooterActionProps } from "../AppFooterAction"

export const ArmorFooter = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const lastMainPage = useSelector(Selectors.Router.lastMainPage)

    // =========================================================================

    const handleRequestClose = () => {
        dispatch(Actions.Armor.closeArmorMenu())
        navigate(lastMainPage)
    }

    const handleRequestClear = () => {
        dispatch(Actions.Armor.removeArmor())
        dispatch(Actions.Armor.closeArmorMenu())
        navigate(lastMainPage)
    }

    const handleCharacterStatusClick = () => {
        dispatch(Actions.CharacterStatus.cycleCharacterStatus())
    }

    // =========================================================================

    const props: AppFooterActionProps[] = [
        { shortcut: "backspace", name: "Close",               onClick: handleRequestClose         },
        { shortcut: "x",         name: "Remove",              onClick: handleRequestClear         },
        { shortcut: "y",         name: "Switch view (right)", onClick: handleCharacterStatusClick },
    ]

    const actions = props.map(p => <AppFooterAction key={p.name} {...p} />)

    return (
        <>
            {actions}
        </>
    )
}
