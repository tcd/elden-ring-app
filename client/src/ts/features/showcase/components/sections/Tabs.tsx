import Grid from "@mui/material/Unstable_Grid2"

import {
    ErTabs
} from "@app/features/common"

import { ShowcaseSection } from "../ShowcaseSection"

export const Tabs = (_props: unknown): JSX.Element => {
    return (
        <ShowcaseSection title="ErTabs">
            <Grid container direction="row">
                <Grid xs={12} sm={6}>
                    <ErTabs />
                </Grid>
            </Grid>
        </ShowcaseSection>
    )
}
