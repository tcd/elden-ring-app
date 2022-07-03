import { useSelector } from "react-redux"
import { mdiAccount } from "@mdi/js"

import { Selectors } from "@app/state"
import { ErCard, StatRow } from "@app/shared"

export const Overview = (): JSX.Element => {

    const level = useSelector(Selectors.Builder.level)
    const runes = useSelector(Selectors.Builder.runesToNextLevel)
    const baseClass = useSelector(Selectors.Builder.startingClass.startingClassName)

    return (
        <ErCard title="Overview" iconPath={mdiAccount} className={"mr-5"}>
            <ul>
                <StatRow title="Starting Class" value={baseClass} />
                {/* <br/> */}
                <StatRow title="Level" value={level} />
                {/* <br/> */}
                <StatRow title="Next Level" value={runes?.toLocaleString()} />
            </ul>
        </ErCard>
    )
}
