import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export const Footer = (_props: unknown): JSX.Element => {
    return (
        <Box component="footer" sx={ComponentSx.StartingClassPage.footer}>
            <span>
                Select a base for creating your character
            </span>
        </Box>
    )
}
