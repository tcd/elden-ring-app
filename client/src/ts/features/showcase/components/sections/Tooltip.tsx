import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { ErTooltip } from "@app/features/common"

import { ShowcaseSection } from "../ShowcaseSection"

export const Tooltip = (_props: unknown): JSX.Element => {
    return (
        <ShowcaseSection title="ErTooltip">
            <Grid container direction="row">
                <Grid xs={12} sm={4}>
                    <ErTooltip id="showcase-tooltip" popoverContent="{popoverContent}">
                        <Typography variant="body">
                            Hover over me
                        </Typography>
                    </ErTooltip>
                </Grid>
            </Grid>
        </ShowcaseSection>
    )
}
