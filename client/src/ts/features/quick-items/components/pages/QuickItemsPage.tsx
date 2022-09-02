import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErPage } from "@app/shared"
import { CharacterStatus } from "@app/features/character-status"

import { QuickItemDetail } from "../quick-item-detail"

export const QuickItemsPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="quick-items">
            <Grid {...ComponentSx.TriPage.container}>
                <Grid {...ComponentSx.TriPage.col1}>
                    <span>TODO: quick items page</span>
                </Grid>
                <Grid {...ComponentSx.TriPage.col2}>
                    <QuickItemDetail />
                </Grid>
                <Grid {...ComponentSx.TriPage.col3}>
                    <CharacterStatus />
                </Grid>
            </Grid>
        </ErPage>
    )
}
