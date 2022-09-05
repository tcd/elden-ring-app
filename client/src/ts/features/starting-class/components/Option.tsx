import capitalize from "lodash/capitalize"
import { useDispatch } from "react-redux"
import { Box, SxProps } from "@mui/material"

import type { StartingClass } from "@app/types"
import { AttributeNames } from "@app/types"
import { ComponentSx } from "@app/theme"
import { getImageSrc } from "@app/util"
import { StatRow } from "@app/features/common"
import { Actions } from "@app/state"

import { Equipment } from "./Equipment"
import { TitleTopBorder, TitleBottomBorder } from "./borders"

export interface OptionProps {
    sClass: StartingClass
    selected?: boolean
    hovering?: boolean
}

export const Option = (props: OptionProps): JSX.Element => {

    const dispatch = useDispatch()

    const { sClass } = props

    const handleClick = () => {
        dispatch(Actions.StartingClass.setPendingStartingClass({ name: sClass.name }))
    }

    const imageSrc = getImageSrc("Starting Class", sClass.name, "public")

    const sx: SxProps = {
        ...ComponentSx.StartingClassPage.options.item,
        backgroundImage: `url("${imageSrc}")`,
    }

    const attributes = Object.values(AttributeNames).map((attr) => (
        <StatRow
            key={attr}
            title={capitalize(attr)}
            value={sClass[attr]}
            sx={ComponentSx.StartingClassPage.options.attributeStatRow}
        />
    ))

    attributes.unshift(
        <StatRow
            key="level"
            title="Level"
            value={sClass["level"]}
            sx={ComponentSx.StartingClassPage.options.attributeStatRow}
        />,
    )

    return (
        <Box
            component="li"
            className="er__startingClass__menu__option"
            sx={sx}
            onClick={handleClick}
        >
            <Box sx={ComponentSx.StartingClassPage.options.overlay}/>
            <Box sx={ComponentSx.StartingClassPage.options.hover}/>
            <Box sx={ComponentSx.StartingClassPage.options.content}>
                <Box component="ul" sx={ComponentSx.StartingClassPage.options.attributes}>
                    {attributes}
                </Box>
                <Equipment sClass={sClass} />
                <Box sx={ComponentSx.StartingClassPage.options.title}>
                    <TitleTopBorder />
                    <span>{sClass.name}</span>
                    <TitleBottomBorder />
                </Box>
            </Box>
        </Box>
    )
}
