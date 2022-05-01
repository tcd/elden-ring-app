import { useSelector, useDispatch } from "react-redux"

import { Weapon } from "@app/types"
import {
    WeaponDamageTypes,
    CustomTable,
    CustomTableColumn,
} from "@app/shared"
import { Selectors } from "@app/state"

const renderImageCell = (weapon: Weapon): JSX.Element => {
    return (
        <div style={{ width: "75px" }}>
            <img
                className="img-fluid"
                src={weapon.image_url}
                alt="weapon"
            />
        </div>
    )
}

const renderDamageTypesCell = (weapon: Weapon) => {
    return (
        <WeaponDamageTypes weapon={weapon} />
    )
}

const weapon_skill = (weapon: Weapon): string => weapon.weapon_skill.display_name

const columns: CustomTableColumn<Weapon>[] = [
    { field: "weapon_type", header: "Type",         sortable: true,  width: 200 },
    { field: "id",          header: "",             sortable: false, width: 200, align: "center", renderFunc: renderImageCell },
    { field: "name",        header: "Name",         sortable: true,  width: 200 },
    { field: weapon_skill,  header: "Weapon Skill", sortable: true },
    { field: "weight",      header: "Weight",       sortable: false, width: 100, align: "right" },
    { field: "id",          header: "Damage Types", sortable: false, renderFunc: renderDamageTypesCell },
]

export const WeaponsTable = (): JSX.Element => {

    // const dispatch = useDispatch()

    const weapons = useSelector(Selectors.Builder.api.weapons)

    return (
        <CustomTable
            rows={weapons}
            columns={columns}
        />
    )
}
