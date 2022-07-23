import { EquipmentType } from "@app/types"
import { getImageSrc, EquipmentSlotImageUrls, cssUrl, EquipmentSlotBackgroundId } from "@app/util"

export interface EquipmentSlotImageProps {
    bgType: EquipmentSlotBackgroundId
}

export const EquipmentSlotImage = (props: EquipmentSlotImageProps): JSX.Element => {
    return (
        <div className="er__equipmentGrid__cell">
        </div>
    )
}
