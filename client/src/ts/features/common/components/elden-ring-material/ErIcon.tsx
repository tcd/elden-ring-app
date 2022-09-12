import { Box } from "@mui/material"

import type { IconNamesKey } from "@app/types"
import { IconUrls } from "@app/util"
import { ComponentSx } from "@app/theme"
import { MuiImg } from "@app/features/common"

export interface ErIconProps {
    icon: IconNamesKey
}

export const ErIcon = ({ icon }: ErIconProps): JSX.Element => {
    const src = IconUrls[icon]
    return (
        <Box sx={ComponentSx.ErIcon.wrapper}>
            <MuiImg
                sx={ComponentSx.ErIcon.image}
                src={src}
                alt={icon}
            />
        </Box>
    )
}
