import { useSelector } from "react-redux"

import { Weapon } from "@app/types"
import { getImageSrc } from "@app/util"
import { Selectors } from "@app/state"
import {
    WeaponDamageTypes,
    CustomTable,
    CustomTableColumn,
} from "@app/shared"

const renderImageCell = (weapon: Weapon): JSX.Element => {
    const src = getImageSrc("Weapon", weapon.name, "128")
    return (
        <div style={{ width: "75px" }}>
            <img
                className="img-fluid"
                src={src}
                alt="weapon"
            />
        </div>
    )
}

const renderWeaponSkillCell = (weapon: Weapon) => {
    const skill = weapon?.weapon_skill
    if (skill?.ash_of_war) {
        const src = getImageSrc("Weapon Skill", skill.name, "128")
        return (
            <div className="flex-between">
                <span className="align-self-center">
                    {skill.name}
                </span>
                <div style={{ width: "50px" }}>
                    <img
                        className="img-fluid"
                        src={src}
                        alt={skill.name}
                        title={skill.name}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <span className="text-special">
                {skill.name}
            </span>
        )
    }
}

const renderDamageTypesCell = (weapon: Weapon) => {
    return (
        <WeaponDamageTypes weapon={weapon} />
    )
}

const renderNameCell = (weapon: Weapon) => {
    const className = weapon.is_special ? "text-special" : ""
    return (
        <span className={className}>
            {weapon.name}
        </span>
    )
}

const weapon_skill = (weapon: Weapon): string => weapon.weapon_skill.name

const columns: CustomTableColumn<Weapon>[] = [
    { field: "weapon_type", headerName: "Type",         sortable: true,  width: 200 },
    { field: "id",          headerName: "",             sortable: false, width: 200, align: "center", renderCell: renderImageCell },
    { field: "name",        headerName: "Name",         sortable: true,  width: 200,                  renderCell: renderNameCell },
    { field: weapon_skill,  headerName: "Weapon Skill", sortable: true,                               renderCell: renderWeaponSkillCell },
    { field: "weight",      headerName: "Weight",       sortable: false, width: 100, align: "right" },
    { field: "id",          headerName: "Damage Types", sortable: false, renderCell:                  renderDamageTypesCell },
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
