import { Box, SxProps } from "@mui/material"

import { ComponentSx } from "@app/theme"
import type { StartingClass } from "@app/types"
import { getImageSrc, getImageSrcManual } from "@app/util"
import { MuiImg } from "@app/shared"

export interface StartingClassEquipmentProps {
    sClass: StartingClass
}

const slotSx: SxProps = {
    backgroundImage: `url("${getImageSrcManual("ui/equipment-menu/empty", "128")}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const weaponProperties  = [ "R1", "R2", "L1", "L2" ]
// const armorProperties   = [ "Head", "Chest", "Arms", "Legs"]
const spellProperties   = [ "Spell1", "Spell2" ]

export const StartingClassEquipment = ({ sClass }: StartingClassEquipmentProps): JSX.Element => {

    const $slots: JSX.Element[] = []

    for (const property of weaponProperties) {
        const propertyValue = sClass[property]
        if (propertyValue) {
            const src = getImageSrc("Weapon", propertyValue, "128")
            $slots.push(
                <Box component="li" key={property} sx={slotSx}>
                    <MuiImg
                        src={src}
                        alt={propertyValue}
                        responsive={true}
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
    //             <Box component="li" key={property} sx={slotSx}>
    //                 <MuiImg
    //                     src={src}
    //                     alt={propertyValue}
    //                     responsive={true}
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
                <Box component="li" key={property} sx={slotSx}>
                    <MuiImg
                        src={src}
                        alt={propertyValue}
                        responsive={true}
                    />
                </Box>,
            )
        }
    }

    // return (
    //     <Box component="ul" sx={ComponentSx.StartingClassPage.options.equipmentRoot}>
    //         {$slots}
    //     </Box>
    // )

    return (
        <ul className="er__startingClass__menu__option__equipment">
            {$slots}
        </ul>
    )
}
