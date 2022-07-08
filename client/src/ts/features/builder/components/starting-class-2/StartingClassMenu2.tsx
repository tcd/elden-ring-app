import { Box, IconButton } from "@mui/material"
import "keen-slider/keen-slider.min.css"
import KeenSlider, { TrackSlidesConfigOption } from "keen-slider"
import { useKeenSlider } from "keen-slider/react"

import { STARTING_CLASSES } from "@app/data"
import { getImageSrcManual } from "@app/util"
import {
    StartingClassOption2,
} from "@app/features/builder"


const leftArrowSrc  = getImageSrcManual("ui/misc/arrow-left", "128")
const rightArrowSrc = getImageSrcManual("ui/misc/arrow-right", "128")

export const StartingClassMenu2 = (_props: unknown): JSX.Element => {

    const [refCallback, slider] = useKeenSlider(
        {
            slides: {
                perView: 3,
                spacing: (): number => { return 20 },
            },
            loop: true,
            selector: ".er__startingClass2__menu__option",
            slideChanged() {
                console.log("slide changed")
            },
        },
        [
            // add plugins here
        ],
    )

    const startingClasses = STARTING_CLASSES

    const options = startingClasses.map((sClass) => <StartingClassOption2 key={sClass.name} sClass={sClass} />)

    const handleScrollLeft = (): void => {
        // StartingMenuScroller.scrollLeft()
        slider.current.prev()
    }

    const handleScrollRight = (): void => {
        // StartingMenuScroller.scrollRight()
        slider.current.next()
    }

    return (
        <div id="er__startingClass2__menu">
            <div className="er__startingClass2__menu__arrowContainer">
                <IconButton onClick={handleScrollLeft}>
                    <img src={leftArrowSrc} />
                </IconButton>
            </div>
            <ul id="er__startingClass2__menu__options" ref={refCallback} className="keen-slider">
                {options}
            </ul>
            {/* <div ref={refCallback} className="keen-slider">
                <div className="keen-slider__slide">1</div>
                <div className="keen-slider__slide">2</div>
                <div className="keen-slider__slide">3</div>
                <div className="keen-slider__slide">4</div>
                <div className="keen-slider__slide">5</div>
                <div className="keen-slider__slide">6</div>
            </div> */}
            <div className="er__startingClass2__menu__arrowContainer">
                <IconButton onClick={handleScrollRight}>
                    <img src={rightArrowSrc} />
                </IconButton>
            </div>
        </div>
    )
}
