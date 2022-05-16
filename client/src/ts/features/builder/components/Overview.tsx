import { useSelector } from "react-redux"
import { mdiAccount } from "@mdi/js"

import { Selectors } from "@app/state"
import { ECard, StatRow } from "@app/shared"

export const Overview = (): JSX.Element => {

    const level = useSelector(Selectors.Builder.level)
    const runes = useSelector(Selectors.Builder.runesToNextLevel)
    const baseClass = useSelector(Selectors.Builder.startingClassName)

    return (
        <ECard title="Overview" iconPath={mdiAccount}>
            <ul className="w-100">
                <StatRow title="Starting Class" value={baseClass} />
                <br/>
                <StatRow title="Level" value={level} />
                <br/>
                <StatRow title="Next Level" value={runes?.toLocaleString()} />
            </ul>
        </ECard>
    )
}
