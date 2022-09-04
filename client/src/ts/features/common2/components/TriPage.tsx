import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { CharacterStatus } from "@app/features/character-status"

export interface TriPageProps {
    column1: React.ReactNode
    column2: React.ReactNode
}

/**
 * Three column layout.
 */
export const TriPage = (props: TriPageProps): JSX.Element => {
    return (
        <Grid {...ComponentSx.TriPage.container}>
            <Grid {...ComponentSx.TriPage.col1}>
                {props?.column1 && props.column1}
            </Grid>
            <Grid {...ComponentSx.TriPage.col2}>
                {props?.column2 && props.column2}
            </Grid>
            <Grid {...ComponentSx.TriPage.col3}>
                <CharacterStatus />
            </Grid>
        </Grid>
    )
}
