import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { StatRow } from "../StatRow"

export const Resistance = (): JSX.Element => {

    const resistance = useSelector(Selectors.Builder.resistance)

    const rows = () => {
        const rows = []
        for (const [key, value] of Object.entries(resistance)) {
            rows.push(
                <StatRow
                    title={key}
                    value={value}
                    key={`resistance_${key}`}
                />,
            )
        }
        return rows
    }

    return (
        <ul>
            {rows()}
        </ul>
    )
}
