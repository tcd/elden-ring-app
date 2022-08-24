import { Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { Page } from "@app/shared"

import {
    ActionsCard,
    PreferencesCard,
} from "."

export const SettingsPage = (_props: unknown): JSX.Element => {
    return (
        <Page pageName="settings">
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
        </Page>
    )
}
