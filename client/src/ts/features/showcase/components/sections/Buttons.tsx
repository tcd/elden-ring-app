import { Button, Stack } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { ShowcaseSection } from "../ShowcaseSection"

export const Buttons = (_props: unknown): JSX.Element => {
    return (
        <ShowcaseSection title="Buttons">
            <Grid container direction="row">
                <Grid xs={12} sm={4}>
                    <Stack spacing={2}>
                        <Button variant="text">text</Button>
                        <Button variant="contained">contained</Button>
                        <Button variant="outlined">outlined</Button>
                        <Button variant="elden-ring">elden-ring</Button>
                    </Stack>
                </Grid>
            </Grid>
        </ShowcaseSection>
    )
}
