import Grid from "@mui/material/Unstable_Grid2"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { CharacterStatus } from "@app/features/character-status"

export interface ErGridProps {
    column1: React.ReactNode
    column2: React.ReactNode
}

/**
 * Three column layout.
 */
export const ErGrid = (props: ErGridProps): JSX.Element => {
    return (
        <Grid {...ComponentSx.ErGrid.container}>
            <Grid {...ComponentSx.ErGrid.col1}>
                <Box sx={ComponentSx.ErGrid.col1Content}>
                    {props?.column1 && props.column1}
                </Box>
            </Grid>
            <Grid {...ComponentSx.ErGrid.col2}>
                {props?.column2 && props.column2}
            </Grid>
            <Grid {...ComponentSx.ErGrid.col3}>
                <CharacterStatus />
            </Grid>
        </Grid>
    )
}
