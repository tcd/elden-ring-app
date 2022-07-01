import { capitalize } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { Box, SxProps } from "@mui/material"

import { STARTING_CLASSES } from "@app/data"
import { StartingClass, AttributeName } from "@app/types"
import { getImageSrc } from "@app/util"
import { StatRow } from "@app/shared"
import { Actions, Selectors } from "@app/state"
import { StartingClassOption } from "."

export const StartingClassMenu = (_props: unknown): JSX.Element => {

    const startingClasses = STARTING_CLASSES
    const selectedName = useSelector(Selectors.Builder.startingClassName)

    const options = startingClasses.map((sClass) => <StartingClassOption key={sClass.name} sClass={sClass} />)

    return (
        <Box className="er__startingClass">
            {/* <div className="er__startingClass__topBorder"></div> */}

            <div className="er__startingClass__menu">
                <ul className="er__startingClass__menu__options">
                    {/* {options} */}
                    <div className="example example-1">example 1</div>
                    <div className="example example-2">example 2</div>
                    <div className="example example-3">example 3</div>
                    <div className="example example-4">example 4</div>
                </ul>
            </div>

            {/* <div className="er__startingClass__bottomBorder"></div> */}

            <div className="er__startingClass__footer">
                <span className="er__startingClass__bottomText">
                    Select a base for creating your character
                </span>
            </div>
        </Box>
    )
}
