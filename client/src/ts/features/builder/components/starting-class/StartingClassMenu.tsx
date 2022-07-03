import { useEffect } from "react"
import { capitalize } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { Box, Button, IconButton, SxProps } from "@mui/material"

import { STARTING_CLASSES } from "@app/data"
import { getImageSrc, getImageSrcManual } from "@app/util"
import { ErDialog } from "@app/shared"
import { Actions, Selectors } from "@app/state"
import { StartingClassOption, StartingClassConfirmationDialog } from "."

const leftArrowSrc  = getImageSrcManual("ui/misc/arrow-left", "128")
const rightArrowSrc = getImageSrcManual("ui/misc/arrow-right", "128")

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
    const selectedName = useSelector(Selectors.Builder.startingClass.startingClassName)
    const confirming = useSelector(Selectors.Builder.startingClass.confirmingStartingClass)

    const options = startingClasses.map((sClass) => <StartingClassOption key={sClass.name} sClass={sClass} />)

    return (
        <Box className="er__startingClass">
            <StartingClassConfirmationDialog />
            <div className="er__startingClass__topBorder"></div>

            <div className="er__startingClass__menu">
                <div className="er__startingClass__menu__arrowContainer">
                    <IconButton>
                        <img src={leftArrowSrc} />
                    </IconButton>
                </div>
                <ul className="er__startingClass__menu__options">
                    {options}
                </ul>
                <div className="er__startingClass__menu__arrowContainer">
                    <IconButton>
                        <img src={rightArrowSrc} />
                    </IconButton>
                </div>
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
