import { Box, Container } from "@mui/material"

import { Heading } from "@app/shared"
import { WeaponsTable } from "@app/features/weapons"

export const WeaponsTablePage = (): JSX.Element => {
    return (
        <Container sx={{ display: "flex", flexGrow: 1, flexFlow: "column nowrap", alignItems: "stretch", "& > div": { flexGrow: 1 } }}>
            <Box sx={{ height: "20%" }}>
                <Heading title="Weapons" />
            </Box>
            <Box>
                <WeaponsTable />
            </Box>
        </Container>
    )
}
