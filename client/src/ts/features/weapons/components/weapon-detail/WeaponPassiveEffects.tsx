import { CalculatedWeaponStats, PassiveMap } from "elden-ring-calculator"

import { Weapon } from "@app/types"
import { round } from "@app/util"

export interface WeaponPassiveEffectsProps {
    weapon: Weapon
    stats: CalculatedWeaponStats
}

const PASSIVE_DAMAGE_TYPES = [
    "scarlet_rot",
    "madness",
    "sleep",
    "frost",
    "poison",
    "blood_loss",
]

const PASSIVE_DAMAGE_NAMES: PassiveMap<string> = {
    scarlet_rot: "scarlet rot",
    madness:     "madness",
    sleep:       "sleep",
    frost:       "frost",
    poison:      "poison",
    blood_loss:  "blood loss",
}

export const WeaponPassiveEffects = (props: WeaponPassiveEffectsProps): JSX.Element => {

    // const weapon = props?.weapon
    const calculatedPassive = props?.stats?.passive

    const data: string[] = []

    for (const type of PASSIVE_DAMAGE_TYPES) {
        const existing = calculatedPassive[type]
        if (!(existing > 0)) {
            continue
        }
        data.push(`Causes ${PASSIVE_DAMAGE_NAMES[type]} buildup (${round(existing, 0)})`)
    }

    const rows = data.map((x, i) => <li key={`passive-effect-${i + 1}`}>{x}</li>)
    while (rows.length < 3) {
        rows.push(<li key={`passive-effect-${rows.length + 1}`}> - </li>)
    }

    return (
        <ul>
            {rows}
        </ul>
    )
}
