import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Actions, Selectors } from "@app/state"
import { AppFooterAction, AppFooterActionProps } from "../AppFooterAction"

export const ArmorFooter = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const lastMainPage = useSelector(Selectors.Meta.Router.lastMainPage)

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
        dispatch(Actions.Builder.cycleCharacterStatus())
    }

    // =========================================================================

    const props: AppFooterActionProps[] = [
        { name: "Close",               onClick: handleRequestClose         },
        { name: "Clear",               onClick: handleRequestClear         },
        { name: "Switch view (right)", onClick: handleCharacterStatusClick },
    ]

    const actions = props.map(p => <AppFooterAction key={p.name} {...p} />)

    return (
        <>
            {actions}
        </>
    )
}
