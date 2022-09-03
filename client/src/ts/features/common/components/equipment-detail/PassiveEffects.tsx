import { EquipmentDetailProps } from "./types"
import { EquipmentDetailFullCard } from "./EquipmentDetailCard"

export const PassiveEffects = (props: EquipmentDetailProps): JSX.Element => {

    if (props.includePassiveEffects !== true) {
        return null
    }

    const rows = props.passiveEffects

    while (rows.length < 3) {
        rows.push(<li key={`passive-effect-${rows.length + 1}`}> - </li>)
    }

    return (
        <EquipmentDetailFullCard title="Passive Effects" icon="PassiveEffects">
            <ul>
                {rows}
            </ul>
        </EquipmentDetailFullCard>
    )
}
