import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { MuiImg } from "@app/shared"

import type { ImageOptions } from "./types"

export interface SecondaryImageProps extends ImageOptions {
    include: boolean
}

export const SecondaryImage = (props: SecondaryImageProps): JSX.Element => {

    if (!props?.include) {
        return null
    }

    return (
        <Box sx={ComponentSx.EquipmentDetail.image.secondary.wrapper}>
            <MuiImg
                src={props?.src}
                alt={props?.alt ?? "secondary image"}
                sx={ComponentSx.EquipmentDetail.image.secondary.image}
            />
        </Box>
    )
}
