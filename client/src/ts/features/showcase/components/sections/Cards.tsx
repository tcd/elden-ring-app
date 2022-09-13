import Grid from "@mui/material/Unstable_Grid2"

import {
    ErCard,
    StatRow,
    StatRowPlus,
    StatRowPlusPlus,
} from "@app/features/common"

import { ShowcaseSection } from "../ShowcaseSection"

export const Cards = (_props: unknown): JSX.Element => {
    return (
        <ShowcaseSection title="ErCard & StatRow">
            <Grid container direction="row">
                <Grid xs={12} sm={6}>
                    <ErCard title="ErCard" icon="Equipped">
                        <StatRow title="StatRow" value="{value}" />
                        <StatRowPlus title="StatRowPlus" value_1="{value_1}" value_2="{value_2}" />
                        <StatRowPlusPlus title="StatRowPlusPlus" value_1="{value_1}" value_2="{value_2}" value_3="{value_3}" />
                    </ErCard>
                </Grid>
            </Grid>
        </ShowcaseSection>
    )
}
