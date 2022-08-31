import { useSelector } from "react-redux"

import { AttributeName } from "@app/types"
import { Selectors } from "@app/state"
import { ErCard2 } from "@app/shared"
import { AttributeRow } from "./AttributeRow"

export const Attributes = (_props: unknown): JSX.Element => {

    const vigor        = useSelector(Selectors.Meta.Levels.corrected.vigor)
    const mind         = useSelector(Selectors.Meta.Levels.corrected.mind)
    const endurance    = useSelector(Selectors.Meta.Levels.corrected.endurance)
    const strength     = useSelector(Selectors.Meta.Levels.corrected.strength)
    const dexterity    = useSelector(Selectors.Meta.Levels.corrected.dexterity)
    const intelligence = useSelector(Selectors.Meta.Levels.corrected.intelligence)
    const faith        = useSelector(Selectors.Meta.Levels.corrected.faith)
    const arcane       = useSelector(Selectors.Meta.Levels.corrected.arcane)

    const attributes: Record<AttributeName, Integer> = {
        vigor,
        mind,
        endurance,
        strength,
        dexterity,
        intelligence,
        faith,
        arcane,
    }

    const attributeRows = Object.entries(attributes).map(([name, value]) => {
        return (
            <AttributeRow
                name={name as AttributeName}
                value={value}
                key={`attribute-leveling-row-${name}`}
            />
        )
    })

    return (
        <ErCard2 title="Attribute Points" icon="AttributePoints">
            <ul>
                {attributeRows}
            </ul>
        </ErCard2>
    )
}
