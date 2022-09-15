import { useState } from "react"
import { Button } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { ErDialog } from "@app/features/common"
import type { ErDialogProps } from "@app/features/common"

import { ShowcaseSection } from "../ShowcaseSection"

export const Dialog = (_props: unknown): JSX.Element => {

    const [open, setOpen] = useState(false)

    const dialogProps: ErDialogProps = {
        title: "This is a dialog",
        isOpen: open,
        onClose: () => setOpen(false),
        options: [
            { title: "option #1", handler: () => { alert("You chose option #1") } },
            { title: "option #2", handler: () => { alert("You chose option #2") } },
        ],
    }

    return (
        <ShowcaseSection title="ErDialog">
            <ErDialog {...dialogProps} />
            <Grid container direction="row">
                <Grid xs={12} sm={4}>
                    <Button variant="elden-ring" onClick={() => setOpen(true)}>
                        Show Dialog
                    </Button>
                </Grid>
            </Grid>
        </ShowcaseSection>
    )
}
