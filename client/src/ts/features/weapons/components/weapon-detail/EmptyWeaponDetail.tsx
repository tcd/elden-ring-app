import capitalize from "lodash/capitalize"

import { Dmg } from "@app/types"
import {
    EquipmentDetail,
    EquipmentDetailProps,
    EquipmentDetailCard,
    StatRow,
    WeaponFpCost,
} from "@app/features/common"

import { FlexBox } from "./FlexBox"

export const EmptyWeaponDetail = (_props: unknown): JSX.Element => {

    const defenseRows = Object.values(Dmg).map((dmg) => {
        const title = capitalize(dmg)
        const key = `weapon-attack-${dmg}`
        return (<StatRow key={key} title={title} value={"-"} />)
    })

    defenseRows.push(<StatRow
        key="Guard Boost"
        title="Guard Boost"
        value="-"
    />)

    const attackRows = Object.values(Dmg).map((dmg) => {
        const title = capitalize(dmg)
        const key = `weapon-attack-${dmg}`
        return (<StatRow key={key} title={title} value={"-"} />)
    })

    attackRows.push(<StatRow
        key="Critical"
        title="Critical"
        value="-"
    />)

    const props: EquipmentDetailProps = {
        primaryImage: { src: null },
        includeSecondaryImage: true,
        includePassiveEffects: true,
        mainSectionRows: {
            row1: { type: "StatRow", props: { title: "-", value: null } },
            row2: { type: "StatRow", props: { title: "-", value: null } },
            // row3: null,
            row4: { type: "StatRow", props: { title: "-",       value: null } },
            row5: { type: "StatRow", props: { title: "FP Cost", value: <WeaponFpCost /> } },
            row6: { type: "StatRow", props: { title: "Weight",  value: "-" } },
        },
    }

    return (
        <EquipmentDetail {...props}>

            <EquipmentDetailCard title="Attack Power" icon="AttackPower">
                <ul>
                    {attackRows}
                </ul>
            </EquipmentDetailCard>

            <EquipmentDetailCard title="Guarded Damage Negation" icon="GuardedDmgNegation">
                <ul>
                    {defenseRows}
                </ul>
            </EquipmentDetailCard>

            <EquipmentDetailCard title="Attribute Scaling" icon="AttributeScaling">
                <FlexBox
                    left={
                        <>
                            <StatRow title="Str" value="-" />
                            <StatRow title="Int" value="-" />
                            <StatRow title="Arc" value="-" />
                        </>
                    }
                    right={
                        <>
                            <StatRow title="Dex" value="-" />
                            <StatRow title="Fai" value="-" />
                        </>
                    }
                />
            </EquipmentDetailCard>

            <EquipmentDetailCard title="Attributes Required" icon="AttributesRequired">
                <FlexBox
                    left={
                        <>
                            <StatRow title="Str" value="-" />
                            <StatRow title="Int" value="-" />
                            <StatRow title="Arc" value="-" />
                        </>
                    }
                    right={
                        <>
                            <StatRow title="Dex" value="-" />
                            <StatRow title="Fai" value="-" />
                        </>
                    }
                />
            </EquipmentDetailCard>

        </EquipmentDetail>
    )
}
