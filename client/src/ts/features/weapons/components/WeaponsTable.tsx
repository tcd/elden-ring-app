import { useSelector } from "react-redux"

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

const renderWeaponSkillCell = (weapon: Weapon) => {
    const skill = weapon?.weapon_skill
    if (skill?.ash_of_war) {
        return (
            <div className="flex-between">
                <span className="align-self-center">
                    {skill.display_name}
                </span>
                <div style={{ width: "50px" }}>
                    <img
                        className="img-fluid"
                        src={skill.image_url}
                        alt={skill.display_name}
                        title={skill.display_name}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <span className="text-special">
                {skill.display_name}
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

const weapon_skill = (weapon: Weapon): string => weapon.weapon_skill.display_name

const columns: CustomTableColumn<Weapon>[] = [
    { field: "weapon_type", header: "Type",         sortable: true,  width: 200 },
    { field: "id",          header: "",             sortable: false, width: 200, align: "center", renderFunc: renderImageCell },
    { field: "name",        header: "Name",         sortable: true,  width: 200,                  renderFunc: renderNameCell },
    { field: weapon_skill,  header: "Weapon Skill", sortable: true,                               renderFunc: renderWeaponSkillCell },
    { field: "weight",      header: "Weight",       sortable: false, width: 100, align: "right" },
    { field: "id",          header: "Damage Types", sortable: false, renderFunc:                  renderDamageTypesCell },
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
