import { capitalize, forEach } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { StartingClass, AttributeName } from "@app/types"
import { getImageSrc, getImageSrcManual } from "@app/util"
import { StatRow } from "@app/shared"
import { Actions, Selectors } from "@app/state"

export interface StartingClassOptionProps {
    sClass: StartingClass
    selected?: boolean
    hovering?: boolean
}

export const StartingClassOption = (props: StartingClassOptionProps): JSX.Element => {

    const { sClass } = props

    const imageSrc = getImageSrc("Starting Class", sClass.name, "public")

    const sx: SxProps = {
        backgroundImage: `url("${imageSrc}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
    }

    const attributes = Object.values(AttributeName).map((attr) => (
        <StatRow
            key={attr}
            title={capitalize(attr)}
            value={sClass[attr]}
        />
    ))

    attributes.unshift(
        <StatRow
            key="level"
            title="Level"
            value={sClass["level"]}
        />,
    )

    return (
        <Box component="li" className="er__startingClass__menu__option" sx={sx}>
            <div className="er__startingClass__menu__optionContent">
                <ul className="er__startingClass__menu__option__attributes">
                    {attributes}
                </ul>
                <ul className="er__startingClass__menu__option__equipment">
                </ul>
                <StartingClassEquipment sClass={sClass} />
                <div className="er__startingClass__menu__option__title">
                    <span>{sClass.name}</span>
                </div>
            </div>
        </Box>
    )
}

interface StartingClassEquipmentProps {
    sClass: StartingClass
}

const slotSx: SxProps = {
    backgroundImage: `url("${getImageSrcManual('ui/equipment-menu/empty', '128')}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const weaponProperties  = [ "R1", "R2", "L1", "L2" ]
const armorProperties   = [ "Head", "Chest", "Arms", "Legs"]
const spellProperties   = [ "Spell1", "Spell2" ]

const StartingClassEquipment = ({ sClass }: StartingClassEquipmentProps): JSX.Element => {

    const slots: JSX.Element[] = []

    // if (sClass?.R1) {
    //     const src = getImageSrc("Weapon", sClass.R1, "128")
    //     slots.push(
    //         <Box component="li" key="R1" sx={slotSx}></Box>,
    //     )
    // }
    // if (sClass?.R2) {
    //     const src = getImageSrc("Weapon", sClass.R2, "128")
    //     slots.push(
    //         <Box component="li" key="R2" sx={slotSx}></Box>,
    //     )
    // }
    // if (sClass?.L1) {
    //     const src = getImageSrc("Weapon", sClass.L1, "128")
    //     slots.push(
    //         <Box component="li" key="L1" sx={slotSx}></Box>,
    //     )
    // }
    // if (sClass?.L2) {
    //     const src = getImageSrc("Weapon", sClass.L2, "128")
    //     slots.push(
    //         <Box component="li" key="L2" sx={slotSx}></Box>,
    //     )
    // }

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

    for (const property of armorProperties) {
        const propertyValue = sClass[property]
        if (propertyValue) {
            const src = getImageSrc("Armor", propertyValue, "128")
            slots.push(
                <Box component="li" key={property} sx={slotSx}>
                    <img src={src} alt={propertyValue} className="img-fluid" />
                </Box>,
            )
        }
    }

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
        <ul className="er__startingClass__menu__option__equipment">
            {slots}
        </ul>
    )
}
