import capitalize from "lodash/capitalize"

import { Dmg } from "@app/types"
import { isBlank } from "@app/util"
import {
    StatRowPlusPlus,
    StatRowPlusPlusProps,
} from "@app/shared"
import { ComparableWeaponProps } from "."

export const WeaponAttackStats = (props: ComparableWeaponProps): JSX.Element => {

    if (isBlank(props?.newStats)) {
        return null
    }

    const { newStats, oldStats } = props

    const attackPlaceholder = "0" // "0.0"
    const data: StatRowPlusPlusProps[] = []

    for (const dmg of Object.values(Dmg)) {

        const oldBase   = oldStats?.attack?.base?.[dmg]   ?? 0
        const oldScaled = oldStats?.attack?.scaled?.[dmg] ?? 0
        const oldTotal  = (oldBase + oldScaled)

        const newBase   = newStats?.attack?.base?.[dmg]
        const newScaled = newStats?.attack?.scaled?.[dmg]
        const newTotal  = (newBase + newScaled)

        const row: StatRowPlusPlusProps = {
            title: capitalize(dmg),
            value_1: newBase?.toFixed(0)   ?? attackPlaceholder,
            value_2: newScaled?.toFixed(0) ?? attackPlaceholder,
            value_3: newTotal?.toFixed(0)  ?? attackPlaceholder,
            value_1_color: "default",
            value_2_color: "default",
            value_3_color: "default",
        }

        if      (newBase >  oldBase) { row.value_1_color = "blue"    }
        else if (newBase == oldBase) { row.value_1_color = "default" }
        else if (newBase <  oldBase) { row.value_1_color = "red"     }

        if      (newScaled >  oldScaled) { row.value_2_color = "blue"    }
        else if (newScaled == oldScaled) { row.value_2_color = "default" }
        else if (newScaled <  oldScaled) { row.value_2_color = "red"     }

        if      (newTotal >  oldTotal) { row.value_3_color = "blue"    }
        else if (newTotal == oldTotal) { row.value_3_color = "default" }
        else if (newTotal <  oldTotal) { row.value_3_color = "red"     }

        // if      (newTotal >  oldTotal) { row.divider_color = "blue"    }
        // else if (newTotal == oldTotal) { row.divider_color = "default" }
        // else if (newTotal <  oldTotal) { row.divider_color = "red"     }

        data.push(row)
    }

    const rows = data.map(({
        title,
        divider_color,
        value_1,
        value_2,
        value_3,
        value_1_color,
        value_2_color,
        value_3_color,
    }) => {
        const key = `weapon-attack-${title}`
        return (<StatRowPlusPlus
            key={key}
            title={title}
            divider="+"
            divider_color={divider_color}
            value_1={value_1}
            value_2={value_2}
            value_3={value_3}
            value_1_color={value_1_color}
            value_2_color={value_2_color}
            value_3_color={value_3_color}
        />)
    })

    rows.push(<StatRowPlusPlus
        key={"Critical"}
        title="Critical"
        divider=""
        no_parens={true}
        value_1={"-"}
        value_2=""
        value_3=""
    />)

    return <>{rows}</>
}
