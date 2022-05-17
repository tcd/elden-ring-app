import { useSelector } from "react-redux"

import { Stat } from "@app/types"
import { Selectors } from "@app/state"
import { DESCRIPTIONS } from "@app/data"
import { StatRow, StatRowProps } from "@app/shared"

export const Resistance = (): JSX.Element => {

    const immunity   = useSelector(Selectors.Builder.resistance.immunity)
    const robustness = useSelector(Selectors.Builder.resistance.robustness)
    const focus      = useSelector(Selectors.Builder.resistance.focus)
    const vitality   = useSelector(Selectors.Builder.resistance.vitality)

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

    return (
        <ul>
            {rows}
        </ul>
    )
}
