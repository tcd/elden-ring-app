import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErPage } from "@app/shared"
import { CharacterStatus } from "@app/features/character-status"

import { AmmunitionDetail } from "../ammunition-detail/AmmunitionDetail"

export const AmmunitionPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="ammunition">
            <Grid {...ComponentSx.TriPage.container}>
                <Grid {...ComponentSx.TriPage.col1}>
                    <span>TODO: ammo grid</span>
                </Grid>
                <Grid {...ComponentSx.TriPage.col2}>
                    <AmmunitionDetail />
                </Grid>
                <Grid {...ComponentSx.TriPage.col3}>
                    <CharacterStatus />
                </Grid>
            </Grid>
        </ErPage>
    )
}
