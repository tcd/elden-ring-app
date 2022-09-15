import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"

import { AppFooterAction, AppFooterActionProps } from "../AppFooterAction"

export const AshesOfWarFooter = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const lastMainPage = useSelector(Selectors.Routing.lastMainPage)
    const activeSlotId = useSelector(Selectors.Weapons.activeSlotId)

    // =========================================================================

    const handleRequestClose = () => {
        dispatch(Actions.Weapons.stopCustomizingWeapon())
        navigate(`/weapons/${activeSlotId}#detail`)
    }

    const handleRequestClear = () => {
        dispatch(Actions.Weapons.removeWeaponSkill())
    }

    const handleCharacterStatusClick = () => {
        dispatch(Actions.CharacterStatus.cycleCharacterStatus())
    }

    // =========================================================================

    const props: AppFooterActionProps[] = [
        { shortcut: "backspace", name: "Back",                onClick: handleRequestClose         },
        { shortcut: "a",         name: "Remove",              onClick: handleRequestClear         },
        { shortcut: "y",         name: "Switch view (right)", onClick: handleCharacterStatusClick },
    ]

    const actions = props.map(p => <AppFooterAction key={p.name} {...p} />)

    return (
        <>
            {actions}
        </>
    )
}
