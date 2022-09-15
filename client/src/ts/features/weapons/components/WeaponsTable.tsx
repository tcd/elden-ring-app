import { useSelector } from "react-redux"
import { Box } from "@mui/material"

import { Weapon } from "@app/types"
import { ThemeVars } from "@app/theme"
import { getImageSrc } from "@app/util"
import { Selectors } from "@app/state"
import {
    WeaponDamageTypes,
    CustomTable,
    CustomTableColumn,
    MuiImg,
} from "@app/features/common"

const renderImageCell = (weapon: Weapon): JSX.Element => {
    const src = getImageSrc("Weapon", weapon.name, "128")
    return (
        <div style={{ width: "75px" }}>
            <MuiImg
                src={src}
                alt="weapon"
                responsive={true}
            />
        </div>
    )
}

const renderWeaponSkillCell = (weapon: Weapon) => {
    const skill = weapon?.weapon_skill
    if (skill?.ash_of_war) {
        const src = getImageSrc("Weapon Skill", skill.name, "128")
        return (
            // FIXME: bootstrap
            <div className="flex-between">
                <span className="align-self-center">
                    {skill.name}
                </span>
                <div style={{ width: "50px" }}>
                    <MuiImg
                        src={src}
                        alt={skill.name}
                        title={skill.name}
                        responsive={true}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <Box component="span" sx={{ color: ThemeVars.colors.gold.light }}>
                {skill.name}
            </Box>
        )
    }
}

const renderDamageTypesCell = (weapon: Weapon) => {
    return (
        <WeaponDamageTypes weapon={weapon} />
    )
}

const renderNameCell = (weapon: Weapon) => {
    return (
        <Box component="span" sx={{ color: (weapon.is_special ? ThemeVars.colors.gold.light : undefined) }}>
            {weapon.name}
        </Box>
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
