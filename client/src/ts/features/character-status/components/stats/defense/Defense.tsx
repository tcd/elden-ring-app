import { useSelector } from "react-redux"

import { Stat } from "@app/types"
import { Selectors } from "@app/state"
import { DESCRIPTIONS } from "@app/data"
import { StatRow } from "@app/features/common"

export const Defense = (): JSX.Element => {

    const physicalNegation  = useSelector(Selectors.Meta.Defense.damageNegation.physical)
    const strikeNegation    = useSelector(Selectors.Meta.Defense.damageNegation.strike)
    const slashNegation     = useSelector(Selectors.Meta.Defense.damageNegation.slash)
    const pierceNegation    = useSelector(Selectors.Meta.Defense.damageNegation.pierce)
    const magicNegation     = useSelector(Selectors.Meta.Defense.damageNegation.magic)
    const fireNegation      = useSelector(Selectors.Meta.Defense.damageNegation.fire)
    const lightningNegation = useSelector(Selectors.Meta.Defense.damageNegation.lightning)
    const holyNegation      = useSelector(Selectors.Meta.Defense.damageNegation.holy)

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
