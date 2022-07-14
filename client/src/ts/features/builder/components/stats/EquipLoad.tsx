import { useSelector } from "react-redux"

import { DESCRIPTIONS } from "@app/data"
import { Encumbrance } from "@app/types"
import { COLORS } from "@app/util"
import { Selectors } from "@app/state"
import { StatRow, StatRowPlus } from "@app/shared"

const equipmentLoadColor = (load: Encumbrance) => {
    switch (load) {
        case Encumbrance.Overloaded: return COLORS.red
        case Encumbrance.Heavy:      return COLORS.yellow
        case Encumbrance.Medium:     return COLORS.green
        case Encumbrance.Light:      return COLORS.blue
        default:                     return COLORS.white
    }
}

export const EquipLoad = (_props: unknown): JSX.Element => {

    const currentEquipLoad     = useSelector(Selectors.Meta.EquipLoad.current)
    const maxEquipLoad         = useSelector(Selectors.Meta.EquipLoad.max)
    const equipLoadDescription = useSelector(Selectors.Meta.EquipLoad.description)
    // const equipLoadPercentage  = useSelector(Selectors.Meta.EquipLoad.percentage)

    return (
        <div>
            <StatRowPlus
                title="Equip Load"
                value_1={currentEquipLoad.toFixed(1)}
                value_2={maxEquipLoad.toFixed(1)}
                description={DESCRIPTIONS.LEVEL_UP_SCREEN["Max Equip Load"]}
            />
            <div style={{ color: equipmentLoadColor(equipLoadDescription) }}>
                <StatRow title="" value={equipLoadDescription} />
            </div>
        </div>
    )
}
