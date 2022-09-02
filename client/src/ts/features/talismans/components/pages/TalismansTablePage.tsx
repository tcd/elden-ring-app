import { Box, Container } from "@mui/material"

import { Heading } from "@app/shared"
import { TalismansTable } from "@app/features/talismans"

export const TalismansTablePage = (_props: unknown): JSX.Element => {
    return (
        <Container sx={{ display: "flex", flexGrow: 1, flexFlow: "column nowrap", alignItems: "stretch", "& > div": { flexGrow: 1 } }}>
            <Box sx={{ height: "20%" }}>
                <Heading title="Talismans" />
            </Box>
            <Box>
                <TalismansTable />
            </Box>
        </Container>
    )
}
