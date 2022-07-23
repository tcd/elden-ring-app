import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Actions, Selectors } from "@app/state"
import { AppFooterAction, AppFooterActionProps } from "../AppFooterAction"

export const AshesOfWarFooter = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const lastMainPage = useSelector(Selectors.Router.lastMainPage)

    // =========================================================================

    const handleRequestClose = () => {
        dispatch(Actions.Weapons.stopCustomizingWeapon())
        navigate(lastMainPage)
    }

    const handleRequestClear = () => {
        // dispatch(Actions.Weapons.removeWeapon())
        dispatch(Actions.Weapons.stopCustomizingWeapon())
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
