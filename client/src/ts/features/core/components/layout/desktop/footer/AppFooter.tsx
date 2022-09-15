import { Box } from "@mui/material"

import { LayoutSx } from "@app/theme"

import { AppFooterActions } from "."

export const AppFooter = (_props: unknown): JSX.Element => {
    return (
        <Box component="footer" sx={LayoutSx.desktop.footer.root}>
            <AppFooterActions />
        </Box>
    )
}
