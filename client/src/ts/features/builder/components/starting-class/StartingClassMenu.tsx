import { useEffect } from "react"
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

    useEffect(() => {
        // Anything in here is fired on component mount.
        document.getElementById("root").classList.add("startingClassPage")
        return () => {
            // Anything in here is fired on component unmount.
            document.getElementById("root").classList.remove("startingClassPage")
        }
    }, [])

    const startingClasses = STARTING_CLASSES
    const selectedName = useSelector(Selectors.Builder.startingClassName)

    const options = startingClasses.map((sClass) => <StartingClassOption key={sClass.name} sClass={sClass} />)

    return (
        <Box className="er__startingClass">
            <div className="er__startingClass__topBorder"></div>

            <div className="er__startingClass__menu">
                <ul className="er__startingClass__menu__options">
                    {options}
                </ul>
            </div>

            <div className="er__startingClass__bottomBorder"></div>

            <div className="er__startingClass__footer">
                <span className="er__startingClass__bottomText">
                    Select a base for creating your character
                </span>
            </div>
        </Box>
    )
}
