import { Box, Container, Divider, Typography } from "@mui/material"

import { ErPage } from "@app/features/common"

import { RdtChecklist } from "./Checklist.rdt"

export const ChecklistPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="checklist" sx={{ overflowY: "hidden", height: "85vh" }}>
            <Container>
                <Box component="section">
                    <Typography variant="h2">
                        Finite Resources
                    </Typography>
                    <Divider sx={{ mb: 5 }}/>
                    <>
                        <RdtChecklist />
                    </>
                </Box>
            </Container>
        </ErPage>
    )
}
