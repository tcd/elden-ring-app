import capitalize from "lodash/capitalize"
import { AttrMap } from "elden-ring-calculator"

import { Attr } from "@app/types"
import { isBlank } from "@app/util"
import { StatRow, StatRowProps } from "@app/features/common"
import { ComparableWeaponProps } from "."
import { FlexBox } from "./FlexBox"

export const WeaponScalingStats = (props: ComparableWeaponProps): JSX.Element => {

    const { newStats, oldStats } = props

    const haveNewStats = !isBlank(newStats)

    if (!haveNewStats) {
        return null
    }

    const data: AttrMap<StatRowProps> = {} as AttrMap<StatRowProps>

    for (const attr of Object.values(Attr)) {

        const oldValue  = oldStats?.scaling?.values?.[attr] ?? newStats?.scaling?.values?.[attr]
        const newValue  = newStats?.scaling?.values?.[attr]
        const newString = newStats?.scaling?.tierStrings?.[attr]

        const attrProps: StatRowProps = {
            title: capitalize(attr).slice(0, 3),
            value: newString,
        }

        if      (newValue >  oldValue) { attrProps.color = "blue"    }
        else if (newValue == oldValue) { attrProps.color = "default" }
        else if (newValue <  oldValue) { attrProps.color = "red"     }

        // @ts-ignore: next-line
        data[attr] = attrProps
    }

    return (
        <FlexBox
            left={
                <>
                    <StatRow { ...data.strength     } />
                    <StatRow { ...data.intelligence } />
                    <StatRow { ...data.arcane       } />
                </>
            }
            right={
                <>
                    <StatRow { ...data.dexterity } />
                    <StatRow { ...data.faith } />
                </>
            }
        />
    )
}
