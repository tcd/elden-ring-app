import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    ThemeBreakpoints,
    rgba,
    boxShadow,
} from "@app/theme"

import {
    invisibleContent,
    imageFluid,
} from "../../mixins"

const boxShadowColor = rgba(ThemeVars.colors.gold.dark, 0.40).hexa()
const equipmentMenuBoxShadow: SxProps = {
    boxShadow: `
        inset ${boxShadow({ x: "0px", y: "0px", blur: "3px", spread: "3px", color: boxShadowColor })},
              ${boxShadow({ x: "0px", y: "0px", blur: "2px", spread: "2px", color: boxShadowColor })}
    `,
}

// =============================================================================
// Wrappers
// =============================================================================

/** `.er__equipmentDetail__primaryImageWrapper` */
const primaryImageWrapper: SxProps = {
    ...equipmentMenuBoxShadow,
    padding: "5px",
    width:  ThemeVars.equipmentDetail.primaryImage.size,
    height: ThemeVars.equipmentDetail.primaryImage.size,
    [ThemeBreakpoints.down("sm")]: {
        width:  ThemeVars.equipmentDetail.primaryImage.mobileSize,
        height: ThemeVars.equipmentDetail.primaryImage.mobileSize,
    },
    "&:empty": {
        ...invisibleContent,
    },
}

/** `.er__equipmentDetail__secondaryImageWrapper` */
const secondaryImageWrapper: SxProps = {
    ...equipmentMenuBoxShadow,
    padding: "5px",
    marginRight: "6px",
    width:  ThemeVars.equipmentDetail.secondaryImage.size,
    height: ThemeVars.equipmentDetail.secondaryImage.size,
    [ThemeBreakpoints.down("sm")]: {
        width:  ThemeVars.equipmentDetail.secondaryImage.mobileSize,
        height: ThemeVars.equipmentDetail.secondaryImage.mobileSize,
    },
    "&:empty": {
        // ...invisibleContent,
        boxShadow: "none !important",
    },
}

// =============================================================================
// Images
// =============================================================================

const primaryImage: SxProps = {
    ...imageFluid,
}

const secondaryImage: SxProps = {
    ...imageFluid,
}

// =============================================================================
// All Together
// =============================================================================

export const image = {
    primary: {
        wrapper: primaryImageWrapper,
        image:   primaryImage,
    },
    secondary: {
        wrapper: secondaryImageWrapper,
        image:   secondaryImage,
    },
}
