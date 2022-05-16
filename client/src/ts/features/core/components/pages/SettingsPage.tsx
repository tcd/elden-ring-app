import { Box, Typography } from "@mui/material"

import { Heading } from "@app/shared"

export const SettingsPage = (): JSX.Element => {
    return (
        <Box className="container">
            <Heading title="Settings" />
            <section>
                <Typography variant="tcd">
                    Export Data
                </Typography>
            </section>
        </Box>
    )
}
