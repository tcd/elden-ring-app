import { useSelector } from "react-redux"
import { mdiAccount } from "@mdi/js"

import { Selectors } from "@app/state"
import { ECard, StatRow, StatRowPlus, StatRowProps } from "@app/shared"
import { EquipLoad } from "../EquipLoad"

export const CharacterStatusA = (): JSX.Element => {

    const level     = useSelector(Selectors.Builder.level)
    const hp        = useSelector(Selectors.Builder.stat.hp)
    const fp        = useSelector(Selectors.Builder.stat.fp)
    const stamina   = useSelector(Selectors.Builder.stat.stamina)
    const poise     = useSelector(Selectors.Builder.stat.poise)
    const discovery = useSelector(Selectors.Builder.stat.discovery)

    const vigor        = useSelector(Selectors.Builder.attribute.vigor)
    const mind         = useSelector(Selectors.Builder.attribute.mind)
    const endurance    = useSelector(Selectors.Builder.attribute.endurance)
    const strength     = useSelector(Selectors.Builder.attribute.strength)
    const dexterity    = useSelector(Selectors.Builder.attribute.dexterity)
    const intelligence = useSelector(Selectors.Builder.attribute.intelligence)
    const faith        = useSelector(Selectors.Builder.attribute.faith)
    const arcane       = useSelector(Selectors.Builder.attribute.arcane)

    const attributeData: StatRowProps[] = [
        { title: "Vigor",        value: vigor        },
        { title: "Mind",         value: mind         },
        { title: "Endurance",    value: endurance    },
        { title: "Strength",     value: strength     },
        { title: "Dexterity",    value: dexterity    },
        { title: "Intelligence", value: intelligence },
        { title: "Faith",        value: faith        },
        { title: "Arcane",       value: arcane       },
    ]

    const attributeRows = attributeData.map(({ title, value }) => {
        return (
            <StatRow
                key={`attribute_${title}`}
                title={title}
                value={value}
            />
        )
    })

    return (
        <ECard title="Character Status (A)" iconPath={mdiAccount}>
            <ul>
                <StatRow title="Level" value={level} />
                <StatRow title="Runes Held" value="∞" />
                <br />
                {attributeRows}
                <br />
                <StatRowPlus title="HP"      value_1={hp?.toLocaleString()}      value_2={hp?.toLocaleString()} />
                <StatRowPlus title="FP"      value_1={fp?.toLocaleString()}      value_2={fp?.toLocaleString()} />
                <StatRowPlus title="Stamina" value_1={stamina?.toLocaleString()} value_2={stamina?.toLocaleString()} />
                <br />
                <EquipLoad />
                {/* <br /> */}
                <StatRow title="Poise" value={poise} />
                <StatRow title="Discovery" value={discovery} />
                <StatRow title="Memory Slots" value={10} />
            </ul>
        </ECard>
    )
}
