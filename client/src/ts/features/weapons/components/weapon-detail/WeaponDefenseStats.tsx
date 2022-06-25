import { capitalize } from "lodash"

import { Unarmed } from "@app/data"
import {
    Dmg,
    Weapon,
} from "@app/types"
import {
    isBlank,
    round,
} from "@app/util"
import {
    StatRow,
    StatRowProps,
} from "@app/shared"

export interface WeaponDefenseStatsProps {
    newWeapon: Weapon
    oldWeapon: Weapon
}

export const WeaponDefenseStats = (props: WeaponDefenseStatsProps): JSX.Element => {

    const newWeapon = props?.newWeapon
    const oldWeapon = props?.oldWeapon ?? Unarmed

    const haveNewWeapon = !isBlank(newWeapon)
    const haveOldWeapon = !isBlank(oldWeapon)

    if (!haveNewWeapon) {
        return null
    }

    const data: StatRowProps[] =  Object.values(Dmg).map((dmg) => {
        const oldValue = oldWeapon?.[`defense_${dmg}`]
        const newValue = newWeapon?.[`defense_${dmg}`]

        const dmgProps: StatRowProps = {
            title: capitalize(dmg),
            value: round(newValue, 1),
        }

        if (haveOldWeapon) {
            if      (newValue >  oldValue) { dmgProps.color = "blue"    }
            else if (newValue == oldValue) { dmgProps.color = "default" }
            else if (newValue <  oldValue) { dmgProps.color = "red"     }
        } else {
            dmgProps.color = "blue"
        }

        return dmgProps
    })

    const rows = data.map(({ title, value, color }) => {
        const key = `weapon-attack-${title}`
        return (<StatRow key={key} title={title} value={value} color={color} />)
    })

    return <>{rows}</>
}
