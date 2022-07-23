import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import {
    mdiAccount,
    mdiArmFlex,
    mdiHead,
    mdiShield,
    mdiSword,
    mdiTshirtCrew,
} from "@mdi/js"

import { DESCRIPTIONS } from "@app/data"
import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { ErCard, Page, StatRow, StatRowPlus, StatRowProps } from "@app/shared"

import { Attack, DefensePlus, EquipLoad, Resistance } from "@app/features/builder/components/stats"

const keepsakes = [
    "Crimson Amber Medallion",
    "Lands Between Rune",
    "Golden Seed",
    "Fanged Imp Ashes",
    "Cracked Pot",
    "Stonesword Key",
    "Bewitching Branch",
    "Boiled Prawn",
    "Shabriri's Woe",
]

export const StatusPage = (): JSX.Element => {

    const navigate = useNavigate()

    const level = useSelector(Selectors.Meta.Levels.runeLevel)
    const runes = useSelector(Selectors.Meta.Levels.runesForNextLevel)
    const baseClass = useSelector(Selectors.StartingClass.startingClassName)
    const bodyType  = "Type A" // "Type A", "Type B"
    const age       = "Young" // "Young", "Mature", "Aged"
    const keepsake  = "Boiled Prawn"

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

    useEffect(() => {
        if (isBlank(baseClass)) {
            navigate("/starting-class")
        }
    }, [baseClass, navigate])

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
        <Page pageName="status">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <ErCard title="" smallTitle={true}>
                                <ul>
                                    <StatRow title="Level" value={level} description={DESCRIPTIONS.LEVEL_UP_SCREEN.Level} />
                                    <br />
                                    <StatRow title="Runes Held" value="∞" description={DESCRIPTIONS.LEVEL_UP_SCREEN.RUNES_HELD} />
                                    <StatRow title="Runes Needed" value={runes?.toLocaleString()} />
                                </ul>
                            </ErCard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ErCard title="Attribute Points" smallTitle={true} iconPath={mdiArmFlex}>
                                <ul>
                                    {attributeRows}
                                </ul>
                            </ErCard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ErCard title="Lineage" smallTitle={true} iconPath={mdiHead}>
                                <ul>
                                    <StatRow title="Body Type" value={bodyType} />
                                    <StatRow title="Age" value={age} />
                                    <StatRow title="Origin" value={baseClass} />
                                    <StatRow title="Keepsake" value={keepsake} />
                                </ul>
                            </ErCard>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* <CharacterStatusA /> */}
                    <ErCard title="Base Stats" smallTitle={true} iconPath={mdiAccount} style={{ height: "100%" }}>
                        <StatRowPlus title="HP"      value_1={hp?.toLocaleString()}      value_2={hp?.toLocaleString()}       description={DESCRIPTIONS.LEVEL_UP_SCREEN.HP}       />
                        <StatRowPlus title="FP"      value_1={fp?.toLocaleString()}      value_2={fp?.toLocaleString()}       description={DESCRIPTIONS.LEVEL_UP_SCREEN.FP}       />
                        <StatRowPlus title="Stamina" value_1={stamina?.toLocaleString()} value_2={stamina?.toLocaleString()}  description={DESCRIPTIONS.LEVEL_UP_SCREEN.Stamina } />
                        <br />
                        <EquipLoad />
                        {/* <br /> */}
                        <StatRow title="Poise" value={poise} description={DESCRIPTIONS.LEVEL_UP_SCREEN.Poise} />
                        <StatRow title="Discovery" value={discovery} description={DESCRIPTIONS.LEVEL_UP_SCREEN.Discovery} />
                        <StatRow title="Memory Slots" value={10} description={DESCRIPTIONS.LEVEL_UP_SCREEN.MEMORY_SLOTS } />
                        {/* <hr className="er__hr" /> */}
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Attack Power" smallTitle={true} iconPath={mdiSword}>
                        <Attack />
                    </ErCard>
                    <ErCard title="Defense/Dmg Negation" smallTitle={true} iconPath={mdiShield}>
                        <DefensePlus />
                    </ErCard>
                    <ErCard title="Resistance" smallTitle={true} iconPath={mdiTshirtCrew}>
                        <Resistance />
                    </ErCard>
                </div>
            </div>
        </Page>
    )
}
