import { useState } from "react"
import { Button } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { YouDied as ErYouDied } from "@app/features/common"

import { ShowcaseSection } from "../ShowcaseSection"

export const YouDied = (_props: unknown): JSX.Element => {

    const [showing, setShowing] = useState<boolean>(false)

    if (showing === true) {
        return (
            <ErYouDied title="{title}" to="/showcase" onClick={() => setShowing(false)} />
        )
    } else {
        return (
            <ShowcaseSection title="You Died">
                <Grid container direction="row">
                    <Grid xs={12} sm={4}>
                        <Button variant="elden-ring" onClick={() => setShowing(true)}>Click Me</Button>
                    </Grid>
                </Grid>
            </ShowcaseSection>
        )
    }
}
