import capitalize from "lodash/capitalize"
import Grid from "@mui/material/Unstable_Grid2"

import { Dmg } from "@app/types"
import {
    ErCard,
    EquipmentDetail,
    EquipmentDetailProps,
    StatRow,
    WeaponFpCost,
} from "@app/shared"
import {
    containerProps,
    itemProps,
    cardProps,
} from "./shared"
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
            <Grid {...containerProps}>
                <Grid {...itemProps}>
                    <ErCard title="Attack Power" icon="AttackPower" {...cardProps}>
                        <ul>
                            {attackRows}
                        </ul>
                    </ErCard>

                </Grid>
                <Grid {...itemProps}>
                    <ErCard title="Guarded Damage Negation" icon="GuardedDmgNegation" {...cardProps}>
                        <ul>
                            {defenseRows}
                        </ul>
                    </ErCard>
                </Grid>
                <Grid {...itemProps}>
                    <ErCard title="Attribute Scaling" icon="AttributeScaling" {...cardProps}>
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
                    </ErCard>
                </Grid>
                <Grid {...itemProps}>
                    <ErCard title="Attributes Required" icon="AttributesRequired" {...cardProps}>
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
                    </ErCard>
                </Grid>
            </Grid>
        </EquipmentDetail>
    )
}
