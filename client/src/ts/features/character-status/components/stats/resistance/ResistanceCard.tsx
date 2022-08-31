import { ErCard2 } from "@app/shared"
import { Resistance } from "."

export const ResistanceCard = (_props: unknown): JSX.Element => {
    return (
        <ErCard2 title="Resistance" icon="Resistance">
            <ul>
                <Resistance />
            </ul>
        </ErCard2>
    )
}
