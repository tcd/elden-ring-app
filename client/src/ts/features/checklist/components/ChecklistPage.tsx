import { Box, Container, Divider, Typography } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { ErPage } from "@app/shared"

import { OldChecklist } from "./Checklist.bootstrap"
import { RdtChecklist } from "./Checklist.rdt"

export const ChecklistPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="checklist" sx={{ ...ComponentSx.AboutPage.root, overflowY: undefined }}>
            <Container>
                <Box component="section">
                    <Typography variant="h2">
                        Finite Resources
                    </Typography>
                    <Divider sx={{ mb: 5 }}/>
                    <>
                        <RdtChecklist />
                        <br />
                        <OldChecklist />
                    </>
                </Box>
            </Container>
        </ErPage>
    )
}
