import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { StatRow } from "@app/features/common"

export const Attack = (): JSX.Element => {

    const R1 = useSelector(Selectors.Builder.weapons.bySlot.R1)
    const R2 = useSelector(Selectors.Builder.weapons.bySlot.R2)
    const R3 = useSelector(Selectors.Builder.weapons.bySlot.R3)
    const L1 = useSelector(Selectors.Builder.weapons.bySlot.L1)
    const L2 = useSelector(Selectors.Builder.weapons.bySlot.L2)
    const L3 = useSelector(Selectors.Builder.weapons.bySlot.L3)

    const attackPowerValues = [
        { title: "R Armament 1", value: R1?.attack_physical ?? "-" },
        { title: "R Armament 2", value: R2?.attack_physical ?? "-" },
        { title: "R Armament 3", value: R3?.attack_physical ?? "-" },
        { title: "L Armament 1", value: L1?.attack_physical ?? "-" },
        { title: "L Armament 2", value: L2?.attack_physical ?? "-" },
        { title: "L Armament 3", value: L3?.attack_physical ?? "-" },
    ]

    const rows = attackPowerValues.map(({ title, value }) => {
        return (
            <StatRow
                key={title}
                title={title}
                value={value}
                // className="mx-3"
            />
        )
    })

    return (
        <ul>
            {rows}
        </ul>
    )
}
