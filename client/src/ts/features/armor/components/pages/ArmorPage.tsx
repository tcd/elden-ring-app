import Grid from "@mui/material/Unstable_Grid2"

import { ErPage } from "@app/shared"
import { ArmorDetail, ArmorMenu } from "@app/features/armor/components"
import { CharacterStatus } from "@app/features/character-status"

export const ArmorPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="armor">
            <Grid container direction="row">
                <Grid xs={6}>
                    <ArmorMenu />
                </Grid>
                <Grid xs>
                    <ArmorDetail />
                </Grid>
                <Grid xs={2.5}>
                    <CharacterStatus />
                </Grid>
            </Grid>
        </ErPage>
    )
}
