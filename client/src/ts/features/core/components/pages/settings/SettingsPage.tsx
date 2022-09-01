import { Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { ErPage } from "@app/shared"

import {
    ActionsCard,
    PreferencesCard,
} from "."

export const SettingsPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="settings">
            <Container>
                <Grid container direction="column">
                    <Grid>
                        <ActionsCard />
                    </Grid>
                    <Grid>
                        <PreferencesCard />
                    </Grid>
                </Grid>
            </Container>
        </ErPage>
    )
}
