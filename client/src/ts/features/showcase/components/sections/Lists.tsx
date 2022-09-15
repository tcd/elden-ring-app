import { Button, Stack } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import {
    ErList,
    ErListItem,
    ErListItemProps,
} from "@app/features/common"

import { ShowcaseSection } from "../ShowcaseSection"

export const Lists = (_props: unknown): JSX.Element => {
    return (
        <ShowcaseSection title="ErList & ErListItem">
            <Grid container direction="row">
                <Grid xs={12} sm={4}>
                    <ErList>
                        <ErListItem>
                            List
                        </ErListItem>
                        <ErListItem>
                            Button
                        </ErListItem>
                        <ErListItem>
                            Card
                        </ErListItem>
                        <ErListItem>
                            Horizontal Rule
                        </ErListItem>
                    </ErList>
                </Grid>
            </Grid>
        </ShowcaseSection>
    )
}
