import { capitalize } from "lodash"

import { Dmg } from "@app/types"
import {
    ErCard2,
    ErCard2Props,
    EquipmentDetail,
    EquipmentDetailProps,
    StatRow,
} from "@app/shared"

const cardProps: Partial<ErCard2Props> = {
    smallTitle: true,
    sx: {
        mx: 3,
        my: 2,
    },
}

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

    const props: Partial<EquipmentDetailProps> = {
        // primaryImage: { src: null },
        includeSecondaryImage: true,
        includePassiveEffects: true,
        mainSectionRows: {
            row1: { type: "StatRow", props: { title: "-", value: null } },
            row2: { type: "StatRow", props: { title: "-", value: null } },
            // row3: null,
            row4: { type: "StatRow", props: { title: "-",       value: null } },
            row5: { type: "StatRow", props: { title: "FP Cost", value: "-" } },
            row6: { type: "StatRow", props: { title: "Weight",  value: "-" } },
        },
    }

    return (
        <EquipmentDetail {...props}>
            <section className="er__equipmentDetail__section">
                <ErCard2 title="Attack Power" icon="AttackPower" {...cardProps}>
                    <ul>
                        {attackRows}
                    </ul>
                </ErCard2>
                <ErCard2 title="Guarded Damage Negation" icon="GuardedDmgNegation" {...cardProps}>
                    <ul>
                        {defenseRows}
                    </ul>
                </ErCard2>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard2 title="Attribute Scaling" icon="AttributeScaling" {...cardProps}>
                    <div className="row">
                        <div className="col">
                            <StatRow title="Str" value="-" />
                            <StatRow title="Int" value="-" />
                            <StatRow title="Arc" value="-" />
                        </div>
                        <div className="col-1"></div>
                        <div className="col">
                            <StatRow title="Dex" value="-" />
                            <StatRow title="Fai" value="-" />
                        </div>
                    </div>
                </ErCard2>
                <ErCard2 title="Attributes Required" icon="AttributesRequired" {...cardProps}>
                    <div className="row">
                        <div className="col">
                            <StatRow title="Str" value="-" />
                            <StatRow title="Int" value="-" />
                            <StatRow title="Arc" value="-" />
                        </div>
                        <div className="col-1"></div>
                        <div className="col">
                            <StatRow title="Dex" value="-" />
                            <StatRow title="Fai" value="-" />
                        </div>
                    </div>
                </ErCard2>
            </section>
        </EquipmentDetail>
    )
}
