import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { ErHr, ErHrProps } from "@app/features/common"

import { ShowcaseSection } from "../ShowcaseSection"

const Variant = ({ v }: { v: ErHrProps["variant"] }): JSX.Element => (
    <Typography variant="code">variant&quot;{v}&quot;</Typography>
)

export const HorizontalRule = (_props: unknown): JSX.Element => {
    return (
        <ShowcaseSection title="ErHr">
            <Grid container direction="column" rowSpacing={3} sx={{ px: 5 }}>
                <Grid xs={12}>
                    <Variant v="menu" />
                    <ErHr variant="menu" />
                </Grid>
                <Grid xs={12} justifyContent="start">
                    <Variant v="full" />
                    <ErHr variant="full" />
                </Grid>
                <Grid xs={12}>
                    <Variant v="inner" />
                    <ErHr variant="inner" />
                </Grid>
            </Grid>
        </ShowcaseSection>
    )
}
