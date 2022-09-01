import { NO_ARMOR } from "@app/data"
import { isBlank } from "@app/util"
import { StatRow, StatRowProps } from "@app/shared"

import { ArmorDetailProps } from "."

export const ARMOR_DEFENSE_STATS = [
    { title: "Physical",  property: "physical"  },
    { title: "VS Strike", property: "vs_strike" },
    { title: "VS Slash",  property: "vs_slash"  },
    { title: "VS Pierce", property: "vs_pierce" },
    { title: "Magic",     property: "magic"     },
    { title: "Fire",      property: "fire"      },
    { title: "Lightning", property: "lightning" },
    { title: "Holy",      property: "holy"      },
]

export const ArmorDefenseStats = (props: ArmorDetailProps): JSX.Element => {

    const armor = props?.armor
    const oldArmor = props?.oldArmor ?? NO_ARMOR

    if (isBlank(armor)) {
        return null
    }

    const placeholder = "?" // "0.0"

    const data: StatRowProps[] = ARMOR_DEFENSE_STATS.map(({ title, property }) => {
        const newValue = armor[property]
        const oldValue = oldArmor[property]
        const rowProps: StatRowProps = {
            title: title,
            value: newValue?.toFixed(1) ?? placeholder,
            color: "default",
        }
        if      (newValue >  oldValue) { rowProps.color = "blue"    }
        else if (newValue == oldValue) { rowProps.color = "default" }
        else if (newValue <  oldValue) { rowProps.color = "red"     }
        return rowProps
    })

    const rows = data.map(({ title, value, color }) => <StatRow key={title} title={title} value={value} color={color}/>)

    return (<>{rows}</>)
}
