import { Attributes, Weapon } from "@app/types"
import { meetsRequirements, getImageSrc } from "@app/util"

export interface WeaponMenuImageProps {
    weapon: Weapon
    attributes: Attributes
}

export const WeaponMenuImage = ({ weapon, attributes }: WeaponMenuImageProps): JSX.Element => {
    const src = getImageSrc("Weapon", weapon.name, "256")
    let cantUse = null
    if (!meetsRequirements(attributes, weapon)) {
        cantUse = <span className="requirements-not-met"></span>
    }
    return (
        <div className="equipment-menu-image-wrapper">
            {cantUse}
            <img
                className="img-fluid"
                src={src}
                alt="weapon"
            />
        </div>
    )
}
