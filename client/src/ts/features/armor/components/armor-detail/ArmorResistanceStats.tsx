import { NO_ARMOR } from "@app/data"
import { isBlank } from "@app/util"
import { StatRow, StatRowProps } from "@app/shared"
import { ArmorDetailProps } from "."

export const ARMOR_RESISTANCE_STATS = [
    { title: "Immunity",   property: "immunity"   },
    { title: "Robustness", property: "robustness" },
    { title: "Focus",      property: "focus"      },
    { title: "Vitality",   property: "vitality"   },
    { title: "Poise",      property: "poise"      },
]

export const ArmorResistanceStats = (props: ArmorDetailProps): JSX.Element => {

    const armor    = props?.armor
    const oldArmor = props?.oldArmor ?? NO_ARMOR

    if (isBlank(armor)) {
        return null
    }

    const placeholder = "?" // "0.0"

    const data: StatRowProps[] = ARMOR_RESISTANCE_STATS.map(({ title, property }) => {
        const newValue = armor[property]
        const oldValue = oldArmor[property]
        const rowProps: StatRowProps = {
            title: title,
            value: newValue?.toFixed(0) ?? placeholder,
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
