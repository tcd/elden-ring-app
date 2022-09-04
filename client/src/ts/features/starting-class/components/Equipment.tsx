import { Box } from "@mui/material"

import type { StartingClass } from "@app/types"
import { getImageSrc } from "@app/util"
import { ComponentSx } from "@app/theme"
import { MuiImg } from "@app/shared"

export interface EquipmentProps {
    sClass: StartingClass
}

const weaponProperties  = [ "R1", "R2", "L1", "L2" ]
// const armorProperties   = [ "Head", "Chest", "Arms", "Legs"]
const spellProperties   = [ "Spell1", "Spell2" ]

export const Equipment = ({ sClass }: EquipmentProps): JSX.Element => {

    const $slots: JSX.Element[] = []

    for (const property of weaponProperties) {
        const propertyValue = sClass[property]
        if (propertyValue) {
            const src = getImageSrc("Weapon", propertyValue, "128")
            $slots.push(
                <Box component="li" key={property} sx={ComponentSx.StartingClassPage.options.equipmentItem}>
                    <MuiImg
                        src={src}
                        alt={propertyValue}
                        responsive={true}
                        sx={ComponentSx.StartingClassPage.options.equipmentImage}
                    />
                </Box>,
            )
        }
    }

    // for (const property of armorProperties) {
    //     const propertyValue = sClass[property]
    //     if (propertyValue) {
    //         const src = getImageSrc("Armor", propertyValue, "128")
    //         slots.push(
    //             <Box component="li" key={property} sx={ComponentSx.StartingClassPage.options.equipmentItem}>
    //                 <MuiImg
    //                     src={src}
    //                     alt={propertyValue}
    //                     responsive={true}
    //                     sx={ComponentSx.StartingClassPage.options.equipmentImage}
    //                 />
    //             </Box>,
    //         )
    //     }
    // }

    for (const property of spellProperties) {
        const propertyValue = sClass[property]
        if (propertyValue) {
            const src = getImageSrc("Spell", propertyValue, "128")
            $slots.push(
                <Box component="li" key={property} sx={ComponentSx.StartingClassPage.options.equipmentItem}>
                    <MuiImg
                        src={src}
                        alt={propertyValue}
                        responsive={true}
                        sx={ComponentSx.StartingClassPage.options.equipmentImage}
                    />
                </Box>,
            )
        }
    }

    return (
        <Box component="ul" sx={ComponentSx.StartingClassPage.options.equipmentRoot}>
            {$slots}
        </Box>
    )
}
