import { Box, IconButton } from "@mui/material"

import { getImageSrcManual } from "@app/util"
import {
    StartingClassOptions,
    StartingClassConfirmationDialog,
} from "."
import { StartingMenuScroller } from "./utility"

const leftArrowSrc  = getImageSrcManual("ui/misc/arrow-left", "128")
const rightArrowSrc = getImageSrcManual("ui/misc/arrow-right", "128")

export const StartingClassMenu = (_props: unknown): JSX.Element => {

    const handleScrollLeft = (): void => {
        StartingMenuScroller.scrollLeft()
    }

    const handleScrollRight = (): void => {
        StartingMenuScroller.scrollRight()
    }

    return (
        <Box className="er__startingClass">
            <StartingClassConfirmationDialog />
            <div className="er__startingClass__topBorder"></div>

            <div id="er__startingClass__menu">
                <div className="er__startingClass__menu__arrowContainer">
                    <IconButton onClick={handleScrollLeft}>
                        <img src={leftArrowSrc} />
                    </IconButton>
                </div>
                <ul id="er__startingClass__menu__options" className="no-scroll-bar">
                    {/* {options} */}
                    <StartingClassOptions />
                </ul>
                <div className="er__startingClass__menu__arrowContainer">
                    <IconButton onClick={handleScrollRight}>
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
