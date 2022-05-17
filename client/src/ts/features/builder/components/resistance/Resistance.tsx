import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { StatRow, StatRowProps } from "@app/shared"

export const Resistance = (): JSX.Element => {

    const immunity = useSelector(Selectors.Builder.resistance.immunity)
    const robustness = useSelector(Selectors.Builder.resistance.robustness)
    const focus = useSelector(Selectors.Builder.resistance.focus)
    const vitality = useSelector(Selectors.Builder.resistance.vitality)

    const resistanceData: StatRowProps[] = [
        { title: "Immunity",   value: immunity   },
        { title: "Robustness", value: robustness },
        { title: "Focus",      value: focus      },
        { title: "Vitality",   value: vitality   },
    ]

    const rows = resistanceData.map(({ title, value }) => {
        return <StatRow
            title={title}
            value={value}
            key={`resistance_${title}`}
        />
    })

    return (
        <ul>
            {rows}
        </ul>
    )
}
