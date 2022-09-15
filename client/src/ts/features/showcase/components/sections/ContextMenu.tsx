import { Button } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { ErContextMenu } from "@app/features/common"
import type { ErContextMenuOption } from "@app/features/common"

import { ShowcaseSection } from "../ShowcaseSection"

export const ContextMenu = (_props: unknown): JSX.Element => {

    const options: ErContextMenuOption[] = [
        { text: "Option #1", action: () => { alert("you clicked Option #1")  } },
        { text: "Option #2", action: () => { alert("you clicked Option #2")  } },
    ]

    return (
        <ShowcaseSection title="ErContextMenu">
            <Grid container direction="row">
                <Grid xs={12} sm={4}>
                    <ErContextMenu id="showcase-option-menu" options={options}>
                        <Button variant="elden-ring">
                            Right-Click me
                        </Button>
                    </ErContextMenu>
                </Grid>
            </Grid>
        </ShowcaseSection>
    )
}
