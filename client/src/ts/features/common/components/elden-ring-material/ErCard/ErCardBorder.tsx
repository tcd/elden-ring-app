import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export const ErCardBorder = (_props: unknown): JSX.Element => {
    return (
        <Box sx={ComponentSx.ErCard.content.leftBorderWrapper}>
            <Box sx={ComponentSx.ErCard.content.leftBorderInner} />
        </Box>
    )
}
