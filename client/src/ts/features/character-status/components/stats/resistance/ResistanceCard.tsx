import { ErCard } from "@app/features/common"
import { Resistance } from "."

export const ResistanceCard = (_props: unknown): JSX.Element => {
    return (
        <ErCard title="Resistance" icon="Resistance">
            <ul>
                <Resistance />
            </ul>
        </ErCard>
    )
}
