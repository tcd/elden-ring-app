import capitalize from "lodash/capitalize"

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

    const { newWeapon, oldWeapon } = props

    const haveNewWeapon = !isBlank(newWeapon)

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

        if      (newValue >  oldValue) { dmgProps.color = "blue"    }
        else if (newValue == oldValue) { dmgProps.color = "default" }
        else if (newValue <  oldValue) { dmgProps.color = "red"     }

        return dmgProps
    })

    const rows = data.map(({ title, value, color }) => {
        const key = `weapon-attack-${title}`
        return (<StatRow key={key} title={title} value={value} color={color} />)
    })

    rows.push(<StatRow
        key="Guard Boost"
        title="Guard Boost"
        value="-"
    />)

    return <>{rows}</>
}
