import { Box, IconButton } from "@mui/material"

import { STARTING_CLASSES } from "@app/data"
import { getImageSrcManual } from "@app/util"
import {
    StartingClassOption2,
} from "@app/features/builder"

const leftArrowSrc  = getImageSrcManual("ui/misc/arrow-left", "128")
const rightArrowSrc = getImageSrcManual("ui/misc/arrow-right", "128")

export const StartingClassMenu2 = (_props: unknown): JSX.Element => {

    const startingClasses = STARTING_CLASSES

    const options = startingClasses.map((sClass) => <StartingClassOption2 key={sClass.name} sClass={sClass} />)

    const handleScrollLeft = (): void => {
        // StartingMenuScroller.scrollLeft()
    }

    const handleScrollRight = (): void => {
        // StartingMenuScroller.scrollRight()
    }

    return (
        <div id="er__startingClass2__menu">
            <div className="er__startingClass2__menu__arrowContainer">
                <IconButton onClick={handleScrollLeft}>
                    <img src={leftArrowSrc} />
                </IconButton>
            </div>
            <ul id="er__startingClass2__menu__options">
                {options}
            </ul>
            <div className="er__startingClass2__menu__arrowContainer">
                <IconButton onClick={handleScrollRight}>
                    <img src={rightArrowSrc} />
                </IconButton>
            </div>
        </div>
    )
}
