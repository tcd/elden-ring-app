import { useSelector } from "react-redux"
import { mdiAccount } from "@mdi/js"

import { DESCRIPTIONS } from "@app/data"
import { ErCard, StatRow, StatRowPlus, StatRowProps } from "@app/shared"
import { Selectors } from "@app/state"
import { EquipLoad } from "@app/features/builder/components/stats"

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
        const description = DESCRIPTIONS.LEVEL_UP_SCREEN[title]
        return (
            <StatRow
                key={`attribute_${title}`}
                title={title}
                value={value}
                description={description}
            />
        )
    })

    return (
        <ErCard title="Character Status" iconPath={mdiAccount} margin="none">
            <ul>
                <StatRow title="Level" value={level} description={DESCRIPTIONS.LEVEL_UP_SCREEN.Level} />
                <StatRow title="Runes Held" value="∞" description={DESCRIPTIONS.LEVEL_UP_SCREEN.RUNES_HELD} />
                <br />
                {attributeRows}
                <br />
                <StatRowPlus title="HP"      value_1={hp?.toLocaleString()}      value_2={hp?.toLocaleString()}       description={DESCRIPTIONS.LEVEL_UP_SCREEN.HP}       />
                <StatRowPlus title="FP"      value_1={fp?.toLocaleString()}      value_2={fp?.toLocaleString()}       description={DESCRIPTIONS.LEVEL_UP_SCREEN.FP}       />
                <StatRowPlus title="Stamina" value_1={stamina?.toLocaleString()} value_2={stamina?.toLocaleString()}  description={DESCRIPTIONS.LEVEL_UP_SCREEN.Stamina } />
                <br />
                <EquipLoad />
                {/* <br /> */}
                <StatRow title="Poise" value={poise} description={DESCRIPTIONS.LEVEL_UP_SCREEN.Poise} />
                <StatRow title="Discovery" value={discovery} description={DESCRIPTIONS.LEVEL_UP_SCREEN.Discovery} />
                <StatRow title="Memory Slots" value={10} description={DESCRIPTIONS.LEVEL_UP_SCREEN.MEMORY_SLOTS } />
            </ul>
        </ErCard>
    )
}
