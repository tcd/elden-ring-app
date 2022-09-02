import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErPage } from "@app/shared"
import { WeaponDetail, WeaponMenu } from "@app/features/weapons/components"
import { CharacterStatus } from "@app/features/character-status"

export const WeaponsPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="weapon">
            <Grid {...ComponentSx.TriPage.container}>
                <Grid {...ComponentSx.TriPage.col1}>
                    <WeaponMenu />
                </Grid>
                <Grid {...ComponentSx.TriPage.col2}>
                    <WeaponDetail />
                </Grid>
                <Grid {...ComponentSx.TriPage.col3}>
                    <CharacterStatus />
                </Grid>
            </Grid>
        </ErPage>
    )
}
