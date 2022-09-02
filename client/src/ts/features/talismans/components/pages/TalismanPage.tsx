import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErPage } from "@app/shared"
import { TalismanDetail, TalismanMenu } from "@app/features/talismans/components"
import { CharacterStatus } from "@app/features/character-status"

export const TalismanPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="talisman">
            <Grid {...ComponentSx.TriPage.container}>
                <Grid {...ComponentSx.TriPage.col1}>
                    <TalismanMenu />
                </Grid>
                <Grid {...ComponentSx.TriPage.col2}>
                    <TalismanDetail />
                </Grid>
                <Grid {...ComponentSx.TriPage.col3}>
                    <CharacterStatus />
                </Grid>
            </Grid>
        </ErPage>
    )
}
