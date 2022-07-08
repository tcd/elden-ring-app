import { Armor } from "@app/types"
import { getImageSrc } from "@app/util"

export interface ArmorMenuImageProps {
    armor: Armor
}

export const ArmorMenuImage = ({ armor }: ArmorMenuImageProps) => {
    const src = getImageSrc("Armor", armor.name, "256")
    return (
        <div className="er__equipmentMenu__imageWrapper">
            <img
                className="img-fluid"
                src={src}
                alt={armor.name}
            />
        </div>
    )
}
