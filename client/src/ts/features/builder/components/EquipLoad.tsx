import { useSelector } from "react-redux"
import Typography from "@mui/material/Typography"

import { Encumbrance } from "@app/types"
import { Selectors } from "@app/state"
import { COLORS } from "@app/util"
import { StatRow, StatRowPlus } from "@app/shared"

const equipmentLoadColor = (load: Encumbrance) => {
    switch (load) {
        case Encumbrance.Overloaded:
            return COLORS.red
        case Encumbrance.Heavy:
            return COLORS.yellow
        case Encumbrance.Medium:
            return COLORS.green
        case Encumbrance.Light:
            return COLORS.blue
        default:
            return COLORS.white
    }
}

export const EquipLoad = (): JSX.Element => {

    const currentEquipLoad     = useSelector(Selectors.Builder.stat.currentEquipLoad)
    const maxEquipLoad         = useSelector(Selectors.Builder.stat.maxEquipLoad)
    const equipLoadDescription = useSelector(Selectors.Builder.equipLoad.description)
    // const equipLoadPercentage  = useSelector(Selectors.Builder.equipLoad.percentage)

    return (
        <div>
            <StatRowPlus title="Equip Load" value_1={currentEquipLoad.toFixed(1)} value_2={maxEquipLoad.toFixed(1)}/>
            <div style={{ color: equipmentLoadColor(equipLoadDescription) }}>
                <StatRow title="" value={equipLoadDescription} />
            </div>
        </div>
    )
}
