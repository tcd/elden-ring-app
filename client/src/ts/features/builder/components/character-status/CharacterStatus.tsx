import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import {
    CharacterStatusA,
    CharacterStatusB,
} from "."

export const CharacterStatus = (): JSX.Element => {

    const whichStatus = useSelector(Selectors.Builder.whichCharacterStatus)

    if (whichStatus == "A") { return (<CharacterStatusA />) }
    if (whichStatus == "B") { return (<CharacterStatusB />) }

    return null
}
