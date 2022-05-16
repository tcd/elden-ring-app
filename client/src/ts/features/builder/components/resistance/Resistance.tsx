import { useSelector } from "react-redux"
import { capitalize } from "lodash"

import { Selectors } from "@app/state"
import { StatRow } from "@app/shared"

export const Resistance = (): JSX.Element => {

    const resistance = useSelector(Selectors.Builder.resistance)

    const rows = () => {
        const rows = []
        for (const [key, value] of Object.entries(resistance)) {
            rows.push(
                <StatRow
                    title={capitalize(key)}
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
