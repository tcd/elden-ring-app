import { useDispatch } from "react-redux"

import { Actions } from "@app/state"
import { AppFooterAction, AppFooterActionProps } from "../AppFooterAction"

export const ArmorFooter = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    // =========================================================================

    const handleRequestClose = () => {
        dispatch(Actions.Armor.closeArmorMenu())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Armor.removeArmor())
        dispatch(Actions.Armor.closeArmorMenu())
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
