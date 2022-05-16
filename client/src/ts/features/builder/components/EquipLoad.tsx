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

    const stats = useSelector(Selectors.Builder.stats)
    const equipLoadDescription = useSelector(Selectors.Builder.equipLoad.description)
    // const equipLoadPercentage  = useSelector(Selectors.Builder.equipLoad.percentage)

    const value_1 = stats["Current Equip Load"].toFixed(1)
    const value_2 = stats["Max Equip Load"].toFixed(1)

    return (
        <div>
            <StatRowPlus title="Equip Load" value_1={value_1} value_2={value_2}/>
            <div style={{ color: equipmentLoadColor(equipLoadDescription) }}>
                <StatRow title="" value={equipLoadDescription} />
            </div>
        </div>
    )
}
