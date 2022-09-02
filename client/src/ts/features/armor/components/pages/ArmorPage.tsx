import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErPage } from "@app/shared"
import { ArmorDetail, ArmorMenu } from "@app/features/armor/components"
import { CharacterStatus } from "@app/features/character-status"

export const ArmorPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="armor">
            <Grid {...ComponentSx.TriPage.container}>
                <Grid {...ComponentSx.TriPage.col1}>
                    <ArmorMenu />
                </Grid>
                <Grid {...ComponentSx.TriPage.col2}>
                    <ArmorDetail />
                </Grid>
                <Grid {...ComponentSx.TriPage.col3}>
                    <CharacterStatus />
                </Grid>
            </Grid>
        </ErPage>
    )
}
