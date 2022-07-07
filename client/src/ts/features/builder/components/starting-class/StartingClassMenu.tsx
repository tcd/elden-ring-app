import { useEffect, useRef } from "react"
import { Box, IconButton } from "@mui/material"

import { STARTING_CLASSES } from "@app/data"
import { getImageSrcManual } from "@app/util"
import {
    StartingClassOption,
    StartingClassOptions,
    StartingClassConfirmationDialog,
} from "."
import { scroll, StartingMenuScroller } from "./utility"

const leftArrowSrc  = getImageSrcManual("ui/misc/arrow-left", "128")
const rightArrowSrc = getImageSrcManual("ui/misc/arrow-right", "128")

export const StartingClassMenu = (_props: unknown): JSX.Element => {

    const ref = useRef(null)

    const startingClasses = STARTING_CLASSES
    // const selectedName = useSelector(Selectors.Builder.startingClass.startingClassName)
    // const confirming = useSelector(Selectors.Builder.startingClass.confirmingStartingClass)

    // const options = startingClasses.map((sClass) => <StartingClassOption key={sClass.name} sClass={sClass} />)

    // useEffect(() => {
    //     const ignore = (event: Event) => {
    //         console.log(event)
    //         event.preventDefault()
    //     }
    //     const element = ref.current
    //     element.addEventListener("scroll", ignore)
    //     // return () => { element.removeEventListener("scroll", ignore) }
    // }, [])

    const handleScroll = (): void => {
        StartingMenuScroller.scrollToNext()
        // scroll()
    }

    const handleScrollLeft = (): void => {
        // scroll()
        handleScroll()
    }

    const handleScrollRight = (): void => {
        // scroll()
        handleScroll()
    }

    return (
        <Box className="er__startingClass" ref={ref}>
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
