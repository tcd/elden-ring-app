import { useSelector } from "react-redux"

import { DESCRIPTIONS } from "@app/data"
import { Encumbrance } from "@app/types"
import { ThemeVars } from "@app/theme"
import { Selectors } from "@app/state"
import { StatRow, StatRowPlus } from "@app/features/common"

const equipmentLoadColor = (load: Encumbrance) => {
    switch (load) {
        case Encumbrance.Overloaded: return ThemeVars.colors.red
        case Encumbrance.Heavy:      return ThemeVars.colors.yellow
        case Encumbrance.Medium:     return ThemeVars.colors.green
        case Encumbrance.Light:      return ThemeVars.colors.blue
        default:                     return ThemeVars.colors.white
    }
}

export const EquipLoad = (_props: unknown): JSX.Element => {

    const currentEquipLoad     = useSelector(Selectors.Meta.EquipLoad.current)
    const maxEquipLoad         = useSelector(Selectors.Meta.EquipLoad.max)
    const equipLoadDescription = useSelector(Selectors.Meta.EquipLoad.description)
    // const equipLoadPercentage  = useSelector(Selectors.Meta.EquipLoad.percentage)

    const color = equipmentLoadColor(equipLoadDescription) + " !important"

    return (
        <div>
            <StatRowPlus
                title="Equip Load"
                value_1={currentEquipLoad.toFixed(1)}
                value_2={maxEquipLoad.toFixed(1)}
                description={DESCRIPTIONS.LEVEL_UP_SCREEN["Max Equip Load"]}
            />
            <StatRow title="" value={equipLoadDescription} sx={{ color }} />
        </div>
    )
}
