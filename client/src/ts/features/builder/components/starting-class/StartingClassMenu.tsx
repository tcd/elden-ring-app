import { Box, IconButton } from "@mui/material"

import { STARTING_CLASSES } from "@app/data"
import { getImageSrcManual } from "@app/util"
// import { Actions, Selectors } from "@app/state"
import { StartingClassOption, StartingClassConfirmationDialog } from "."

const leftArrowSrc  = getImageSrcManual("ui/misc/arrow-left", "128")
const rightArrowSrc = getImageSrcManual("ui/misc/arrow-right", "128")

export const StartingClassMenu = (_props: unknown): JSX.Element => {

    const startingClasses = STARTING_CLASSES
    // const selectedName = useSelector(Selectors.Builder.startingClass.startingClassName)
    // const confirming = useSelector(Selectors.Builder.startingClass.confirmingStartingClass)

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
