import { capitalize } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { StartingClass, AttributeName } from "@app/types"
import { getImageSrc } from "@app/util"
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
        // backgroundImage: `url("${imageSrc}")`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "fit",
        // backgroundPosition: "center",
    }

    const attributes = Object.values(AttributeName).map((attr) => (
        <StatRow
            key={attr}
            title={capitalize(attr)}
            value={sClass.attributes[attr]}
        />
    ))

    attributes.unshift(
        <StatRow
            key="level"
            title="Level"
            value={sClass.attributes["level"]}
        />,
    )

    return (
        <Box className="er__startingClass__menu__option" sx={sx}>
            <ul className="er__startingClass__menu__option__attributes">
                {attributes}
            </ul>
            <ul className="er__startingClass__menu__option__equipment">
            </ul>
            <div className="er__startingClass__menu__option__title">
                <span>{sClass.name}</span>
            </div>
        </Box>
    )
}

