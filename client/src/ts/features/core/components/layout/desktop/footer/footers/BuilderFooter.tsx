import { useDispatch } from "react-redux"

import { Actions } from "@app/state"

import { AppFooterAction, AppFooterActionProps } from "../AppFooterAction"

export const BuilderFooter = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    // =========================================================================

    const handleCharacterStatusClick = () => {
        dispatch(Actions.CharacterStatus.cycleCharacterStatus())
    }

    // =========================================================================

    const props: AppFooterActionProps[] = [
        { shortcut: "y", name: "Switch view (right)", onClick: handleCharacterStatusClick },
    ]

    const actions = props.map(p => <AppFooterAction key={p.name} {...p} />)

    return (
        <>
            {actions}
        </>
    )
}
