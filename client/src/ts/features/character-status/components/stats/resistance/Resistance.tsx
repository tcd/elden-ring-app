import { useSelector } from "react-redux"

import { Stat } from "@app/types"
import { Selectors } from "@app/state"
import { DESCRIPTIONS } from "@app/data"
import { StatRow, StatRowProps } from "@app/features/common"

export const Resistance = (): JSX.Element => {

    const immunity   = useSelector(Selectors.Meta.Stats.immunity)
    const robustness = useSelector(Selectors.Meta.Stats.robustness)
    const focus      = useSelector(Selectors.Meta.Stats.focus)
    const vitality   = useSelector(Selectors.Meta.Stats.vitality)

    const resistanceData: StatRowProps[] = [
        { title: "Immunity",   value: immunity,   description: DESCRIPTIONS.LEVEL_UP_SCREEN[Stat.IMMUNITY]   },
        { title: "Robustness", value: robustness, description: DESCRIPTIONS.LEVEL_UP_SCREEN[Stat.ROBUSTNESS] },
        { title: "Focus",      value: focus,      description: DESCRIPTIONS.LEVEL_UP_SCREEN[Stat.FOCUS]      },
        { title: "Vitality",   value: vitality,   description: DESCRIPTIONS.LEVEL_UP_SCREEN[Stat.VITALITY]   },
    ]

    const rows = resistanceData.map(({ title, value, description }) => {
        return <StatRow
            title={title}
            value={value}
            description={description}
            key={`resistance_${title}`}
        />
    })

    return <>{rows}</>
}
