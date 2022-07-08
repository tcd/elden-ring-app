import { IconButton } from "@mui/material"
// import "keen-slider/keen-slider.min.css"
// import KeenSlider, { TrackSlidesConfigOption } from "keen-slider"
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
            selector: ".er__startingClass2__menu__option",
            loop: true,
            slides: {
                perView: 3,
                spacing: (): number => { return 20 },
            },
            defaultAnimation: {
                // duration: 0,
            },
            // slideChanged() {
            //     console.log("slide changed")
            // },
        },
        [
            // add plugins here
        ],
    )

    const startingClasses = STARTING_CLASSES

    const options = STARTING_CLASSES.map((sClass) => <StartingClassOption2 key={sClass.name} sClass={sClass} />)

    const handleScrollLeft = (): void => {
        slider.current.prev()
    }

    const handleScrollRight = (): void => {
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
            <div className="er__startingClass2__menu__arrowContainer">
                <IconButton onClick={handleScrollRight}>
                    <img src={rightArrowSrc} />
                </IconButton>
            </div>
        </div>
    )
}
