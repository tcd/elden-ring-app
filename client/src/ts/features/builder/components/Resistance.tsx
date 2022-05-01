import { useSelector } from "react-redux"
import { mdiHeartPulse } from "@mdi/js"

import { Selectors } from "@app/state"
import { ECard } from "@app/shared"

export const Resistance = (): JSX.Element => {

    const resistance = useSelector(Selectors.Builder.resistance)

    const row = (name: string, value: any) => {
        return (
            <li className="resistance-row" key={`resistance_${name}`}>
                <span className="text-capitalize">{name}</span>
                <div>
                    <span className="mx-3">
                        {value}
                    </span>
                </div>
            </li>
        )
    }

    const rows = () => {
        const rows = []
        for (const [key, value] of Object.entries(resistance)) {
            rows.push(row(key, value))
        }
        return rows
    }

    return (
        <ECard title="Resistance" iconPath={mdiHeartPulse} className="m-3">
            <ul>
                {rows()}
            </ul>
        </ECard>
    )
}
