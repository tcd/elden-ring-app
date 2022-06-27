import { WeaponSkill } from "@app/types"
import { getImageSrc } from "@app/util"

export interface WeaponSkillMenuImageProps {
    weaponSkill: WeaponSkill
}

export const WeaponSkillMenuImage = ({ weaponSkill }: WeaponSkillMenuImageProps): JSX.Element => {
    const src = getImageSrc("Weapon Skill", weaponSkill.name, "256")
    return (
        <div className="equipment-menu-image-wrapper">
            <img
                className="img-fluid"
                src={src}
                alt={weaponSkill.name}
            />
        </div>
    )
}
