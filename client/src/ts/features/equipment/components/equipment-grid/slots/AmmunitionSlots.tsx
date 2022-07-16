// import { useSelector } from "react-redux"

// import { Selectors } from "@app/state"
import { EquipmentSlotImageUrls } from "@app/util"
// import { WeaponSlot } from "./WeaponSlot"
// import { WeaponSlotContextMenu as WeaponSlot } from "./WeaponSlotContextMenu"


export interface AmmunitionSlotProps {
    id: string
}

export const ArrowSlot = ({ id }: AmmunitionSlotProps): JSX.Element => {
    const imagePath = EquipmentSlotImageUrls.Arrow
    const key = `arrow-slot-${id}`
    return (
        <li key={key} id={key} className="er__equipmentGrid__cell">
            <img className="img-fluid" src={imagePath} alt="arrows" />
        </li>
    )
}

export const BoltSlot = ({ id }: AmmunitionSlotProps): JSX.Element => {
    const imagePath = EquipmentSlotImageUrls.Bolt
    const key = `bolt-slot-${id}`
    return (
        <li key={key} id={key} className="er__equipmentGrid__cell">
            <img className="img-fluid" src={imagePath} alt="bolts" />
        </li>
    )
}
