import { useSelector } from "react-redux"

import { Stat } from "@app/types"
import { Selectors } from "@app/state"
import { DESCRIPTIONS } from "@app/data"
import { StatRow } from "../StatRow"

export const Defense = (): JSX.Element => {

    const physicalNegation  = useSelector(Selectors.Builder.defense.negation.physical)
    const strikeNegation    = useSelector(Selectors.Builder.defense.negation.strike)
    const slashNegation     = useSelector(Selectors.Builder.defense.negation.slash)
    const pierceNegation    = useSelector(Selectors.Builder.defense.negation.pierce)
    const magicNegation     = useSelector(Selectors.Builder.defense.negation.magic)
    const fireNegation      = useSelector(Selectors.Builder.defense.negation.fire)
    const lightningNegation = useSelector(Selectors.Builder.defense.negation.lightning)
    const holyNegation      = useSelector(Selectors.Builder.defense.negation.holy)

    const stats = [
        { title: "Physical",  value: physicalNegation,   stat: Stat.PHYSICAL_DEFENSE  },
        { title: "VS Strike", value: strikeNegation,     stat: Stat.VS_STRIKE_DEFENSE },
        { title: "VS Slash",  value: slashNegation,      stat: Stat.VS_SLASH_DEFENSE  },
        { title: "VS Pierce", value: pierceNegation,     stat: Stat.VS_PIERCE_DEFENSE },
        { title: "Magic",     value: magicNegation,      stat: Stat.MAGIC_DEFENSE     },
        { title: "Fire",      value: fireNegation,       stat: Stat.FIRE_DEFENSE      },
        { title: "Lightning", value: lightningNegation,  stat: Stat.LIGHTNING_DEFENSE },
        { title: "Holy",      value: holyNegation,       stat: Stat.HOLY_DEFENSE      },
    ]

    const statRows = stats.map(({ title, value, stat }) => {
        const key = `stat-row-${title}`
        const description = DESCRIPTIONS.LEVEL_UP_SCREEN[stat]
        return (
            <StatRow
                key={key}
                title={title}
                value={value}
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
