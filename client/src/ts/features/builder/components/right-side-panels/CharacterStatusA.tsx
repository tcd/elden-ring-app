import { useSelector } from "react-redux"
import { mdiAccount } from "@mdi/js"

import { AttributeNames } from "@app/types"
import { Selectors } from "@app/state"
import { ECard, StatRow, StatRowPlus } from "@app/shared"
import { EquipLoad } from "../EquipLoad"

export const CharacterStatusA = (): JSX.Element => {

    const attributes = useSelector(Selectors.Builder.attributes)
    const level = useSelector(Selectors.Builder.level)
    const hp = useSelector(Selectors.Builder.stat.hp)
    const fp = useSelector(Selectors.Builder.stat.fp)
    const stamina = useSelector(Selectors.Builder.stat.stamina)
    const poise = useSelector(Selectors.Builder.stat.poise)
    const discovery = useSelector(Selectors.Builder.stat.discovery)

    const attributeRows = AttributeNames.map((attributeName) => {
        const name = attributeName.replace(/^\w/, (c) => c.toUpperCase())
        return (
            <StatRow
                title={name}
                value={attributes[attributeName]}
                key={`attribute_${name}`}
            />
        )
    })

    return (
        <ECard title="Character Status (A)" iconPath={mdiAccount}>
            <ul>
                <StatRow title="Level" value={level} />
                <StatRow title="Runes Held" value="∞" />
                <br />
                {attributeRows}
                <br />
                <StatRowPlus title="HP"      value_1={hp?.toLocaleString()}      value_2={hp?.toLocaleString()} />
                <StatRowPlus title="FP"      value_1={fp?.toLocaleString()}      value_2={fp?.toLocaleString()} />
                <StatRowPlus title="Stamina" value_1={stamina?.toLocaleString()} value_2={stamina?.toLocaleString()} />
                <br />
                <EquipLoad />
                {/* <br /> */}
                <StatRow title="Poise" value={poise} />
                <StatRow title="Discovery" value={discovery} />
                <StatRow title="Memory Slots" value={10} />
            </ul>
        </ECard>
    )
}
