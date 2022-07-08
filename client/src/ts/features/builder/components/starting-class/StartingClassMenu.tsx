import { IconButton } from "@mui/material"
// import KeenSlider, { TrackSlidesConfigOption } from "keen-slider"
import { useKeenSlider } from "keen-slider/react"

import { STARTING_CLASSES } from "@app/data"
import { getImageSrcManual } from "@app/util"
import { StartingClassOption } from "."

const leftArrowSrc  = getImageSrcManual("ui/misc/arrow-left", "128")
const rightArrowSrc = getImageSrcManual("ui/misc/arrow-right", "128")

export const StartingClassMenu = (_props: unknown): JSX.Element => {

    // useEffect(() => {
    //     const ignore = (event: Event) => {
    //         // console.log(event)
    //         event.stopPropagation()
    //         event.preventDefault()
    //     }
    //     document.getElementById("er__startingClass__menu__options").addEventListener("scroll", ignore)
    //     document.getElementById("er__startingClass__menu__options").addEventListener("mousewheel", ignore)
    //     return () => {
    //         document.getElementById("er__startingClass__menu__options")?.removeEventListener("scroll", ignore)
    //         document.getElementById("er__startingClass__menu__options")?.removeEventListener("mousewheel", ignore)
    //     }
    // }, [])

    const [refCallback, slider] = useKeenSlider(
        {
            selector: ".er__startingClass__menu__option",
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

    const options = STARTING_CLASSES.map((sClass) => <StartingClassOption key={sClass.name} sClass={sClass} />)

    const handleScrollLeft = (): void => {
        slider.current.prev()
    }

    const handleScrollRight = (): void => {
        slider.current.next()
    }

    return (
        <div id="er__startingClass__menu">
            <div className="er__startingClass__menu__arrowContainer">
                <IconButton onClick={handleScrollLeft}>
                    <img src={leftArrowSrc} />
                </IconButton>
            </div>
            <ul id="er__startingClass__menu__options" ref={refCallback} className="keen-slider">
                {options}
            </ul>
            <div className="er__startingClass__menu__arrowContainer">
                <IconButton onClick={handleScrollRight}>
                    <img src={rightArrowSrc} />
                </IconButton>
            </div>
        </div>
    )
}
