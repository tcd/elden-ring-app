import capitalize from "lodash/capitalize"

import { Dmg, Ammunition } from "@app/types"
import { SpecialCharacters } from "@app/util"
import {
    ErCard2,
    ErCard2Props,
    StatRow,
    EquipmentDetail,
    EquipmentDetailProps,
} from "@app/shared"

const cardProps: Partial<ErCard2Props> = {
    smallTitle: true,
    sx: {
        mx: 3,
        my: 2,
    },
}

export const AmmunitionDetail = (_props: unknown): JSX.Element => {

    const ammo: Ammunition = {
        id: -1,
        name: "-",
        // @ts-ignore: next-line
        ammunition_type: "-",
        physical_damage_types: ["-"],
    }

    const attackRows = Object.values(Dmg).map((dmg) => {
        const title = capitalize(dmg)
        const key = `ammunition-attack-${dmg}`
        return (<StatRow key={key} title={title} value={"-"} />)
    })

    const props: Partial<EquipmentDetailProps> = {
        title: ammo.name,
        includeSecondaryImage: false,
        includePassiveEffects: true,
        primaryImage: {
            src: null,
            alt: "ammunition",
        },
        mainSectionRows: {
            row1: { type: "StatRow", props: { title: ammo?.ammunition_type, value: null } },
            row2: { type: "StatRow", props: { title: ammo?.physical_damage_types?.join("/"), value: null } },
            row3: { type: "StatRowPlus", props: {
                title: "No. Held",
                value_1: SpecialCharacters.infinity,
                value_2: SpecialCharacters.infinity,
                divider: "/",
            } },
            row4: { type: "StatRowPlus", props: {
                title: "Stored",
                value_1: SpecialCharacters.infinity,
                value_2: SpecialCharacters.infinity,
                divider: "/",
            } },
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
            </section>
        </EquipmentDetail>
    )
}

