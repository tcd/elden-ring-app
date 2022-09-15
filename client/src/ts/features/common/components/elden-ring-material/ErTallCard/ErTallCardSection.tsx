import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import type { ErTallCardSectionProps } from "./types"

export const ErTallCardSection = (props: ErTallCardSectionProps): JSX.Element => {
    return (
        <Box component="section" sx={ComponentSx.ErTallCard.section.root}>
            <Box component="span" sx={ComponentSx.ErTallCard.section.title}>
                {props.title}
            </Box>
            <Box className="er__tallCard__section--content">
                {props.content}
            </Box>
        </Box>
    )
}
