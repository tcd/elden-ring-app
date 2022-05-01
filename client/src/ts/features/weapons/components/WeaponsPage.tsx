import { useSelector, useDispatch } from "react-redux"

import { Weapon } from "@app/types"
import {
    Heading,
    renderNullableNumberCell,
    WeaponDamageTypes,
    CustomTable,
    CustomTableColumn,
} from "@app/shared"
import { Selectors } from "@app/state"

const renderImageCell = (weapon: Weapon): JSX.Element => {
    const folder = weapon.is_shield ? "shields" : "weapons"
    const imagePath = `/public/images/${folder}/${weapon.name}.png`
    return (
        <div style={{ width: "75px" }}>
            <img
                className="img-fluid"
                src={imagePath}
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

const columns: CustomTableColumn<Weapon>[] = [
    { field: "weapon_type", header: "Type",         sortable: true,  width: 200 },
    { field: "id",          header: "",             sortable: false, width: 200, align: "center", renderFunc: renderImageCell },
    { field: "name",        header: "Name",         sortable: true,  width: 200 },
    { field: "weight",      header: "Weight",       sortable: false, width: 100, align: "right" },
    { field: "id",          header: "Damage Types", sortable: false, renderFunc: renderDamageTypesCell },
]

export const WeaponsPage = (): JSX.Element => {

    const weapons = useSelector(Selectors.Builder.api.weapons)

    return (
        <div className="container flex-stretch-column">
            <div style={{ height: "20%" }}>
                <Heading title="Weapons" />
            </div>
            <div>
                <CustomTable
                    rows={weapons}
                    columns={columns}
                />
            </div>
        </div>
    )
}
