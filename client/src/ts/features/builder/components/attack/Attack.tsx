import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { StatRow } from "@app/features/common"
import { DESCRIPTIONS } from "@app/data"

export const Attack = (): JSX.Element => {

    const R1 = useSelector(Selectors.Weapons.totalDamage.R1)
    const R2 = useSelector(Selectors.Weapons.totalDamage.R2)
    const R3 = useSelector(Selectors.Weapons.totalDamage.R3)
    const L1 = useSelector(Selectors.Weapons.totalDamage.L1)
    const L2 = useSelector(Selectors.Weapons.totalDamage.L2)
    const L3 = useSelector(Selectors.Weapons.totalDamage.L3)

    const actieSlotId     = useSelector(Selectors.Weapons.activeSlotId)
    const calculatedStats = useSelector(Selectors.Weapons.active.calculatedStats)

    const attackPowerValues = [
        { id: "R1", title: "R Armament 1", value: R1?.toFixed(0) ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Right Hand Armament 1"] },
        { id: "R2", title: "R Armament 2", value: R2?.toFixed(0) ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Right Hand Armament 2"] },
        { id: "R3", title: "R Armament 3", value: R3?.toFixed(0) ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Right Hand Armament 3"] },
        { id: "L1", title: "L Armament 1", value: L1?.toFixed(0) ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Left Hand Armament 1"]  },
        { id: "L2", title: "L Armament 2", value: L2?.toFixed(0) ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Left Hand Armament 2"]  },
        { id: "L3", title: "L Armament 3", value: L3?.toFixed(0) ?? "-", description: DESCRIPTIONS.LEVEL_UP_SCREEN["Left Hand Armament 3"]  },
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
