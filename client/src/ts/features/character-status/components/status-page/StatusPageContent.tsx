import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Grid from "@mui/material/Unstable_Grid2"


import { DESCRIPTIONS } from "@app/data"
import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { ErCard, StatRow, StatRowPlus, StatRowProps } from "@app/shared"
import { Attack, DefensePlus, EquipLoad, Resistance } from "@app/features/character-status/components/stats"

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

export const StatusPageContent = (_props: unknown): JSX.Element => {

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
        <Grid container direction="row" columns={3} columnSpacing={20} sx={{ maxWidth: "100vw" }}>

            <Grid xs={3} sm={1}>
                <ErCard title="" smallTitle={true}>
                    <ul>
                        <StatRow title="Level" value={level} description={DESCRIPTIONS.LEVEL_UP_SCREEN.Level} />
                        <br />
                        <StatRow title="Runes Held" value="∞" description={DESCRIPTIONS.LEVEL_UP_SCREEN.RUNES_HELD} />
                        <StatRow title="Runes Needed" value={runes?.toLocaleString()} />
                    </ul>
                </ErCard>
                <ErCard title="Attribute Points" smallTitle={true} icon="AttributePoints">
                    <ul>
                        {attributeRows}
                    </ul>
                </ErCard>
                <ErCard title="Lineage" smallTitle={true} icon="Lineage">
                    <ul>
                        <StatRow title="Body Type" value={bodyType} />
                        <StatRow title="Age" value={age} />
                        <StatRow title="Origin" value={baseClass} />
                        <StatRow title="Keepsake" value={keepsake} />
                    </ul>
                </ErCard>
            </Grid>

            <Grid xs={3} sm={1}>
                <ErCard title="Base Stats" smallTitle={true} icon="BaseStats" sx={{ height: { xs: "unset", sm: "unset", md: "100%", lg: "100%", xl: "100%" } }}>
                    <StatRowPlus title="HP"      value_1={hp?.toLocaleString()}      value_2={hp?.toLocaleString()}       description={DESCRIPTIONS.LEVEL_UP_SCREEN.HP}       />
                    <StatRowPlus title="FP"      value_1={fp?.toLocaleString()}      value_2={fp?.toLocaleString()}       description={DESCRIPTIONS.LEVEL_UP_SCREEN.FP}       />
                    <StatRowPlus title="Stamina" value_1={stamina?.toLocaleString()} value_2={stamina?.toLocaleString()}  description={DESCRIPTIONS.LEVEL_UP_SCREEN.Stamina } />
                    <br />
                    <EquipLoad />
                    <StatRow title="Poise" value={poise} description={DESCRIPTIONS.LEVEL_UP_SCREEN.Poise} />
                    <StatRow title="Discovery" value={discovery} description={DESCRIPTIONS.LEVEL_UP_SCREEN.Discovery} />
                    <StatRow title="Memory Slots" value={10} description={DESCRIPTIONS.LEVEL_UP_SCREEN.MEMORY_SLOTS } />
                </ErCard>
            </Grid>

            <Grid xs={3} sm={1} columns={1}>
                <ErCard title="Attack Power" smallTitle={true} icon="AttackPower">
                    <Attack />
                </ErCard>
                <ErCard title="Defense/Dmg Negation" smallTitle={true} icon="DefenseDmgNegation">
                    <DefensePlus />
                </ErCard>
                <ErCard title="Resistance" smallTitle={true} icon="Resistance">
                    <Resistance />
                </ErCard>
            </Grid>

        </Grid>
    )
}
