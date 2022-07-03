import { Attributes, Spell } from "@app/types"
import { getImageSrc, meetsRequirements } from "@app/util"

export interface SpellMenuImageProps {
    spell: Spell
    attributes: Attributes
}

export const SpellMenuImage = ({ spell, attributes }: SpellMenuImageProps) => {
    const src = getImageSrc("Spell", spell.name, "256")
    let cantUse = null
    if (!meetsRequirements(attributes, spell)) {
        cantUse = <span className="requirements-not-met"></span>
    }
    return (
        <div className="equipment-menu-image-wrapper">
            {cantUse}
            <img
                className="img-fluid"
                src={src}
                alt={spell.name}
            />
        </div>
    )
}
