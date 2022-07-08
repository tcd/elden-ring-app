import { capitalize } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { StartingClass, AttributeNames } from "@app/types"
import { getImageSrc, getImageSrcManual } from "@app/util"
import { StatRow } from "@app/shared"
import { Actions, Selectors } from "@app/state"
import { StartingClassEquipment2 } from ".."

export interface StartingClassOption2Props {
    sClass: StartingClass
    selected?: boolean
    hovering?: boolean
}

export const StartingClassOption2 = (props: StartingClassOption2Props): JSX.Element => {

    const dispatch = useDispatch()

    const { sClass } = props

    const handleClick = () => {
        console.log("click")
        dispatch(Actions.Builder.setPendingStartingClass({ name: sClass.name }))
    }

    const imageSrc = getImageSrc("Starting Class", sClass.name, "public")

    const sx: SxProps = {
        backgroundImage: `url("${imageSrc}")`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center center",
    }

    const attributes = Object.values(AttributeNames).map((attr) => (
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
        <Box
            component="li"
            className="er__startingClass2__menu__option"
            sx={sx}
            onClick={handleClick}
        >
            <div className="er__startingClass2__menu__optionOverlay"></div>
            <div className="er__startingClass2__menu__optionHoverOverlay"></div>
            <div className="er__startingClass2__menu__optionContent">
                <ul className="er__startingClass2__menu__option__attributes">
                    {attributes}
                </ul>
                <StartingClassEquipment2 sClass={sClass} />
                <div className="er__startingClass2__menu__option__title">
                    <div className="er__startingClass2__menu__option__title__topBorder"></div>
                    <span>{sClass.name}</span>
                    <div className="er__startingClass2__menu__option__title__bottomBorder"></div>
                </div>
            </div>
        </Box>
    )
}
