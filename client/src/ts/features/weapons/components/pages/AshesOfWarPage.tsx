import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErPage } from "@app/shared"
import { WeaponDetail, WeaponSkillMenu } from "@app/features/weapons/components"
import { CharacterStatus } from "@app/features/character-status"

// FIXME: this doesn't need to be a different page.
export const AshesOfWarPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="ashes-of-war">
            <Grid {...ComponentSx.TriPage.container}>
                <Grid {...ComponentSx.TriPage.col1}>
                    <WeaponSkillMenu />
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
