import { useSelector } from "react-redux"

import { DESCRIPTIONS } from "@app/data"
import { Selectors } from "@app/state"
import { ErCard, StatRow } from "@app/shared"

export const Overview = (_props: unknown): JSX.Element => {

    const level = useSelector(Selectors.Meta.Levels.runeLevel)
    const runes = useSelector(Selectors.Meta.Levels.runesForNextLevel)

    return (
        <ErCard title="Overview" icon="BaseStats">
            <ul>
                <StatRow title="Level" value={level} />
                <br/>
                <StatRow title="Runes Held" value="∞" description={DESCRIPTIONS.LEVEL_UP_SCREEN.RUNES_HELD} />
                <StatRow title="Runes Needed" value={runes?.toLocaleString()} color="blue" />
            </ul>
        </ErCard>
    )
}
