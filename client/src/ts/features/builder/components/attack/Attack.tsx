import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { StatRow } from "@app/features/common"
import { DESCRIPTIONS } from "@app/data"

export const Attack = (): JSX.Element => {

    const R1 = useSelector(Selectors.Weapons.bySlot.R1)
    const R2 = useSelector(Selectors.Weapons.bySlot.R2)
    const R3 = useSelector(Selectors.Weapons.bySlot.R3)
    const L1 = useSelector(Selectors.Weapons.bySlot.L1)
    const L2 = useSelector(Selectors.Weapons.bySlot.L2)
    const L3 = useSelector(Selectors.Weapons.bySlot.L3)

    const attackPowerValues = [
        { title: "R Armament 1", value: R1?.attack_physical ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Right Hand Armament 1"] },
        { title: "R Armament 2", value: R2?.attack_physical ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Right Hand Armament 2"] },
        { title: "R Armament 3", value: R3?.attack_physical ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Right Hand Armament 3"] },
        { title: "L Armament 1", value: L1?.attack_physical ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Left Hand Armament 1"]  },
        { title: "L Armament 2", value: L2?.attack_physical ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Left Hand Armament 2"]  },
        { title: "L Armament 3", value: L3?.attack_physical ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Left Hand Armament 3"]  },
    ]

    const rows = attackPowerValues.map(({ title, value, description }) => {
        return (
            <StatRow
                key={title}
                title={title}
                value={value}
                description={description}
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
