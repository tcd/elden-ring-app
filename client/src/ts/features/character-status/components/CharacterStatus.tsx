import { useSelector } from "react-redux"

import { Selectors } from "@app/state"

import { CharacterStatusA } from "./CharacterStatusA"
import { CharacterStatusB } from "./CharacterStatusB"

export const CharacterStatus = (_props: unknown): JSX.Element => {

    const whichStatus = useSelector(Selectors.CharacterStatus.which)

    if (whichStatus == "A") { return (<CharacterStatusA />) }
    if (whichStatus == "B") { return (<CharacterStatusB />) }

    return null
}
