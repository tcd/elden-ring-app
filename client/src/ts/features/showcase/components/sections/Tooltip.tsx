import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { MouseOverPopover } from "@app/features/common"

import { ShowcaseSection } from "../ShowcaseSection"

export const Tooltip = (_props: unknown): JSX.Element => {
    return (
        <ShowcaseSection title="ErTooltip">
            <Grid container direction="row">
                <Grid xs={12} sm={4}>
                    <MouseOverPopover id="showcase-tooltip" popoverContent="{popoverContent}">
                        <Typography variant="body">
                            Hover over me
                        </Typography>
                    </MouseOverPopover>
                </Grid>
            </Grid>
        </ShowcaseSection>
    )
}
