import { Talisman } from "@app/types"
import { getImageSrc } from "@app/util"

export interface TalismanMenuImageProps {
    talisman: Talisman
}

export const TalismanMenuImage = ({ talisman }: TalismanMenuImageProps) => {
    const src = getImageSrc("Talisman", talisman.name, "256")
    return (
        <div className="equipment-menu-image-wrapper">
            <img
                className="img-fluid"
                src={src}
                alt={talisman.name}
            />
        </div>
    )
}
