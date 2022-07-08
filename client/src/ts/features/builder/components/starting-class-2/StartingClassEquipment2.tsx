import { Box, SxProps } from "@mui/material"

import { StartingClass } from "@app/types"
import { getImageSrc, getImageSrcManual } from "@app/util"


export interface StartingClassEquipment2Props {
    sClass: StartingClass
}

const slotSx: SxProps = {
    backgroundImage: `url("${getImageSrcManual("ui/equipment-menu/empty", "128")}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const weaponProperties  = [ "R1", "R2", "L1", "L2" ]
const armorProperties   = [ "Head", "Chest", "Arms", "Legs"]
const spellProperties   = [ "Spell1", "Spell2" ]

export const StartingClassEquipment2 = ({ sClass }: StartingClassEquipment2Props): JSX.Element => {

    const slots: JSX.Element[] = []

    for (const property of weaponProperties) {
        const propertyValue = sClass[property]
        if (propertyValue) {
            const src = getImageSrc("Weapon", propertyValue, "128")
            slots.push(
                <Box component="li" key={property} sx={slotSx}>
                    <img src={src} alt={propertyValue} className="img-fluid" />
                </Box>,
            )
        }
    }

    // for (const property of armorProperties) {
    //     const propertyValue = sClass[property]
    //     if (propertyValue) {
    //         const src = getImageSrc("Armor", propertyValue, "128")
    //         slots.push(
    //             <Box component="li" key={property} sx={slotSx}>
    //                 <img src={src} alt={propertyValue} className="img-fluid" />
    //             </Box>,
    //         )
    //     }
    // }

    for (const property of spellProperties) {
        const propertyValue = sClass[property]
        if (propertyValue) {
            const src = getImageSrc("Spell", propertyValue, "128")
            slots.push(
                <Box component="li" key={property} sx={slotSx}>
                    <img src={src} alt={propertyValue} className="img-fluid" />
                </Box>,
            )
        }
    }

    return (
        <ul className="er__startingClass2__menu__option__equipment">
            {slots}
        </ul>
    )
}
