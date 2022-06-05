import { useSelector, useDispatch } from "react-redux"
import { Weapon } from "@app/types"
import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"

import {
    ErCard,
    StatRow,
    StatRowProps,
    SelectOption,
    CustomSelect,
} from "@app/shared"

export const SmithingPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    // const handleChange = (value: string): void => {
    //     dispatch(Actions.Weapons.setAffinity({ name: value }))
    //     return null
    // }

    return null
}
