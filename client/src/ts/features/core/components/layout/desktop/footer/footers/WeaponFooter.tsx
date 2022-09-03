import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"

import { AppFooterAction, AppFooterActionProps } from "../AppFooterAction"

export const WeaponFooter = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const lastMainPage = useSelector(Selectors.Routing.lastMainPage)
    const canCustomize = useSelector(Selectors.Weapons.smithing.canWeSmith)
    const activeSlotId = useSelector(Selectors.Weapons.activeSlotId)

    // =========================================================================

    const handleRequestClose = () => {
        dispatch(Actions.Weapons.closeWeaponsMenu())
        navigate(lastMainPage)
    }

    const handleRequestClear = () => {
        dispatch(Actions.Weapons.unequip())
        // dispatch(Actions.Weapons.closeWeaponsMenu())
        // navigate(lastMainPage)
    }

    const handleRequestCustomize = () => {
        // dispatch(Actions.Weapons.startCustomizingWeapon())
        navigate(`/weapons/${activeSlotId}/ashes-of-war#grid`)
    }

    const handleCharacterStatusClick = () => {
        dispatch(Actions.CharacterStatus.cycleCharacterStatus())
    }

    // =========================================================================

    const aowProps: AppFooterActionProps = { shortcut: "c", name: "Ash of War", onClick: handleRequestCustomize }

    // @ts-ignore: next-line
    const props: AppFooterActionProps[] = [
        { shortcut: "backspace", name: "Back",   onClick: handleRequestClose         },
        { shortcut: "a",         name: "Remove", onClick: handleRequestClear         },
        (canCustomize ? aowProps : null),
        { shortcut: "y", name: "Switch view (right)", onClick: handleCharacterStatusClick },
    ].filter(x => x != null)

    const actions = props.map(p => <AppFooterAction key={p.name} {...p} />)

    return (
        <>
            {actions}
        </>
    )
}
