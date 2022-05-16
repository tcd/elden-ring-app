import { useSelector } from "react-redux"

import { Stat } from "@app/types"
import { Selectors } from "@app/state"
import { DESCRIPTIONS } from "@app/data"
import { StatRowPlus } from "@app/shared"

export const DefensePlus = (): JSX.Element => {

    const physicalNegation  = useSelector(Selectors.Builder.defense.negation.physical)
    const strikeNegation    = useSelector(Selectors.Builder.defense.negation.strike)
    const slashNegation     = useSelector(Selectors.Builder.defense.negation.slash)
    const pierceNegation    = useSelector(Selectors.Builder.defense.negation.pierce)
    const magicNegation     = useSelector(Selectors.Builder.defense.negation.magic)
    const fireNegation      = useSelector(Selectors.Builder.defense.negation.fire)
    const lightningNegation = useSelector(Selectors.Builder.defense.negation.lightning)
    const holyNegation      = useSelector(Selectors.Builder.defense.negation.holy)

    const physicalDefense  = useSelector(Selectors.Builder.defense.defense.physical)
    const magicDefense     = useSelector(Selectors.Builder.defense.defense.magic)
    const fireDefense      = useSelector(Selectors.Builder.defense.defense.fire)
    const lightningDefense = useSelector(Selectors.Builder.defense.defense.lightning)
    const holyDefense      = useSelector(Selectors.Builder.defense.defense.holy)

    const stats = [
        { title: "Physical",  defense: physicalDefense,  negation: physicalNegation,   stat: Stat.PHYSICAL_DEFENSE  },
        { title: "VS Strike", defense: physicalDefense,  negation: strikeNegation,     stat: Stat.VS_STRIKE_DEFENSE },
        { title: "VS Slash",  defense: physicalDefense,  negation: slashNegation,      stat: Stat.VS_SLASH_DEFENSE  },
        { title: "VS Pierce", defense: physicalDefense,  negation: pierceNegation,     stat: Stat.VS_PIERCE_DEFENSE },
        { title: "Magic",     defense: magicDefense,     negation: magicNegation,      stat: Stat.MAGIC_DEFENSE     },
        { title: "Fire",      defense: fireDefense,      negation: fireNegation,       stat: Stat.FIRE_DEFENSE      },
        { title: "Lightning", defense: lightningDefense, negation: lightningNegation,  stat: Stat.LIGHTNING_DEFENSE },
        { title: "Holy",      defense: holyDefense,      negation: holyNegation,       stat: Stat.HOLY_DEFENSE      },
    ]

    const statRows = stats.map(({ title, defense, negation, stat }) => {
        const key = `stat-row-${title}`
        const description = DESCRIPTIONS.LEVEL_UP_SCREEN[stat]
        return (
            <StatRowPlus
                key={key}
                title={title}
                value_1={Math.floor(defense)}
                value_2={negation}
                description={description}
            />
        )
    })

    return (
        <ul>
            {statRows}
        </ul>
    )
}
