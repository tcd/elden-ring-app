import capitalize from "lodash/capitalize"
import { AttrMap } from "elden-ring-calculator"

import { Attr, Attributes, Weapon } from "@app/types"
import { isBlank } from "@app/util"
import { StatRow, StatRowProps } from "@app/shared"
import { FlexBox } from "./FlexBox"

export interface WeaponRequirementStatsProps {
    weapon: Weapon
    attributes: Attributes
}

export const WeaponRequirementStats = (props: WeaponRequirementStatsProps): JSX.Element => {

    const { weapon, attributes } = props

    if (isBlank(weapon)) {
        return null
    }

    const data: AttrMap<StatRowProps> = {} as AttrMap<StatRowProps>

    for (const attr of Object.values(Attr)) {

        const requirement = weapon[`required_${attr}`]
        if (isBlank(requirement)) {
            continue
        }
        const attribute = attributes[attr]

        const attrProps: StatRowProps = {
            title: capitalize(attr).slice(0, 3),
            value: requirement,
            color: (attribute >= requirement ? "default" : "red"),
        }

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
