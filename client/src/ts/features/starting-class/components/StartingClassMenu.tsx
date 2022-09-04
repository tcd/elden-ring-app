import { KeenSliderHooks, KeenSliderInstance, useKeenSlider } from "keen-slider/react"
import { Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"

import type { DeviceSize } from "@app/types"
import { STARTING_CLASSES } from "@app/data"
import { getImageSrcManual, ScreenSize } from "@app/util"
import { ComponentSx } from "@app/theme"
import { MuiImg } from "@app/shared"

import { Option } from "./Option"

export const StartingClassMenu = (_props: unknown): JSX.Element => {

    const slidesPerView = slidesByDevice[ScreenSize.deviceSize] ?? 3

    const [refCallback, slider] = useKeenSlider(
        {
            selector: ".er__startingClass__menu__option",
            loop: true,
            slides: {
                perView: slidesPerView,
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

    // QUESTION: can this be rendered outside the component? I don't think it accesses anything.
    const options = STARTING_CLASSES.map((sClass) => <Option key={sClass.name} sClass={sClass} />)

    return (
        <Box sx={ComponentSx.StartingClassPage.menu}>
            <LeftArrow slider={slider} />
            <Box
                ref={refCallback}
                component="ul"
                className="keen-slider"
                sx={ComponentSx.StartingClassPage.options.root}
            >
                {options}
            </Box>
            <RightArrow slider={slider} />
        </Box>
    )
}

// =============================================================================

const slidesByDevice: Record<DeviceSize, number> = {
    mobile:  1,
    tablet:  2,
    laptop:  3,
    desktop: 3,
}

const leftArrowSrc  = getImageSrcManual("ui/misc/arrow-left",  "128")
const rightArrowSrc = getImageSrcManual("ui/misc/arrow-right", "128")

// =============================================================================

interface ArrowProps {
    slider: React.MutableRefObject<KeenSliderInstance<any, any, KeenSliderHooks>>
}

const LeftArrow = ({ slider }: ArrowProps): JSX.Element => {

    const handleClick = (): void => {
        slider?.current?.prev()
    }

    return (
        <Box sx={ComponentSx.StartingClassPage.arrowContainer}>
            <IconButton onClick={handleClick} sx={ComponentSx.StartingClassPage.arrow}>
                <MuiImg
                    src={leftArrowSrc}
                    alt="scroll left"
                />
            </IconButton>
        </Box>
    )
}

const RightArrow = ({ slider }: ArrowProps): JSX.Element => {

    const handleClick = (): void => {
        slider?.current?.next()
    }

    return (
        <Box sx={ComponentSx.StartingClassPage.arrowContainer}>
            <IconButton onClick={handleClick} sx={ComponentSx.StartingClassPage.arrow}>
                <MuiImg
                    src={rightArrowSrc}
                    alt="scroll right"
                />
            </IconButton>
        </Box>
    )
}
