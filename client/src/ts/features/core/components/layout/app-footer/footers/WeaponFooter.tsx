import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { AppFooterAction, AppFooterActionProps } from "../AppFooterAction"

export const WeaponFooter = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const canCustomize = useSelector(Selectors.Weapons.smithing.canWeSmith)

    // =========================================================================

    const handleRequestClose = () => {
        dispatch(Actions.Weapons.closeWeaponsMenu())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Weapons.removeWeapon())
        dispatch(Actions.Weapons.closeWeaponsMenu())
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
