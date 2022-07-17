import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Actions, Selectors } from "@app/state"
import { AppFooterAction, AppFooterActionProps } from "../AppFooterAction"

export const WeaponFooter = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const lastMainPage = useSelector(Selectors.Meta.Router.lastMainPage)
    const canCustomize = useSelector(Selectors.Weapons.smithing.canWeSmith)

    // =========================================================================

    const handleRequestClose = () => {
        dispatch(Actions.Weapons.closeWeaponsMenu())
        navigate(lastMainPage)
    }

    const handleRequestClear = () => {
        dispatch(Actions.Weapons.removeWeapon())
        dispatch(Actions.Weapons.closeWeaponsMenu())
        navigate(lastMainPage)
    }

    const handleRequestCustomize = () => {
        dispatch(Actions.Weapons.startCustomizingWeapon())
    }

    const handleCharacterStatusClick = () => {
        dispatch(Actions.Builder.cycleCharacterStatus())
    }

    // =========================================================================

    const aowProps: AppFooterActionProps = { name: "Ash of War", onClick: handleRequestCustomize }

    const props: AppFooterActionProps[] = [
        { name: "Close",               onClick: handleRequestClose         },
        { name: "Clear",               onClick: handleRequestClear         },
        (canCustomize ? aowProps : null),
        { name: "Switch view (right)", onClick: handleCharacterStatusClick },
    ].filter(x => x != null)

    const actions = props.map(p => <AppFooterAction key={p.name} {...p} />)

    return (
        <>
            {actions}
        </>
    )
}
