import { Box } from "@mui/material"

import { isBlank } from "@app/util"
import { ComponentSx } from "@app/theme"
import { MuiImg } from "@app/shared"

import type { ImageOptions } from "./types"

export interface PrimaryImage extends ImageOptions {
    include: boolean
}

export const PrimaryImage = (props: ImageOptions): JSX.Element => {

    if (isBlank(props?.src)) {
        return <Box sx={ComponentSx.EquipmentDetail.image.primary.wrapper} />
    }

    return (
        <Box sx={ComponentSx.EquipmentDetail.image.primary.wrapper}>
            <MuiImg
                src={props?.src}
                alt={props?.alt ?? "primary image"}
                sx={ComponentSx.EquipmentDetail.image.primary.image}
            />
        </Box>
    )
}
