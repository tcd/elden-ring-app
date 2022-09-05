import { Attributes, Spell } from "@app/types"
import { getImageSrc, meetsRequirements } from "@app/util"
import { MuiImg } from "@app/features/common"

export interface SpellMenuImageProps {
    spell: Spell
    attributes: Attributes
}

export const SpellMenuImage = ({ spell, attributes }: SpellMenuImageProps) => {
    const src = getImageSrc("Spell", spell.name, "256")
    let cantUse = null
    if (!meetsRequirements(attributes, spell)) {
        cantUse = <span className="er__equipmentMenu__requirementsNotMet"></span>
    }
    return (
        <div className="er__equipmentMenu__imageWrapper">
            {cantUse}
            <MuiImg
                src={src}
                alt={spell.name}
                responsive={true}
            />
        </div>
    )
}
