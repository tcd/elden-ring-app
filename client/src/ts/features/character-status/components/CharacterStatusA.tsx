import { useSelector } from "react-redux"

import { DESCRIPTIONS } from "@app/data"
import { ErCard, StatRow, StatRowPlus, StatRowProps } from "@app/features/common"
import { Selectors } from "@app/state"
import { EquipLoad } from "@app/features/character-status/components/stats"

export const CharacterStatusA = (_props: unknown): JSX.Element => {

    const level     = useSelector(Selectors.Meta.Levels.runeLevel)
    const hp        = useSelector(Selectors.Meta.Stats.hp)
    const fp        = useSelector(Selectors.Meta.Stats.fp)
    const stamina   = useSelector(Selectors.Meta.Stats.stamina)
    const poise     = useSelector(Selectors.Meta.Stats.poise)
    const discovery = useSelector(Selectors.Meta.Stats.discovery)

    const vigor        = useSelector(Selectors.Meta.Levels.corrected.vigor)
    const mind         = useSelector(Selectors.Meta.Levels.corrected.mind)
    const endurance    = useSelector(Selectors.Meta.Levels.corrected.endurance)
    const strength     = useSelector(Selectors.Meta.Levels.corrected.strength)
    const dexterity    = useSelector(Selectors.Meta.Levels.corrected.dexterity)
    const intelligence = useSelector(Selectors.Meta.Levels.corrected.intelligence)
    const faith        = useSelector(Selectors.Meta.Levels.corrected.faith)
    const arcane       = useSelector(Selectors.Meta.Levels.corrected.arcane)

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
        <ErCard title="Character Status" icon="CharacterStatus">
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
