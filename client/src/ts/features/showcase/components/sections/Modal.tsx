import { useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { ErModal } from "@app/features/common"
import type { ErModalProps } from "@app/features/common"

import { ShowcaseSection } from "../ShowcaseSection"

export const Modal = (_props: unknown): JSX.Element => {

    const [open, setOpen] = useState(false)
    const [footerModalOpen, setFooterModalOpen] = useState(false)

    const modalProps: Omit<ErModalProps, "children"> = {
        title: "This is a modal",
        isOpen: open,
        onClose: () => setOpen(false),
        footerContent: undefined,
    }

    const footerModalProps: Omit<ErModalProps, "children"> = {
        title: "This modal has a footer",
        isOpen: footerModalOpen,
        onClose: () => setFooterModalOpen(false),
        footerContent: (
            <Box sx={{ width: "100%", textAlign: "center" }}>
                <Button variant="elden-ring" onClick={() => setFooterModalOpen(true)}>
                    Close Me
                </Button>
            </Box>
        ),
    }

    return (
        <ShowcaseSection title="ErModal">
            <ErModal {...modalProps}>
                <Typography variant="body">
                    It displays whatever child components it&apos;s passed.
                </Typography>
            </ErModal>
            <ErModal {...footerModalProps}>
                <Typography variant="body">
                    You can also pass content to be displayed in the modal&apos;s footer
                </Typography>
            </ErModal>
            <Grid container direction="row">
                <Grid xs={12} sm={4}>
                    <Button variant="elden-ring" onClick={() => setOpen(true)}>
                        Show Modal
                    </Button>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Button variant="elden-ring" onClick={() => setFooterModalOpen(true)}>
                        Modal with Footer
                    </Button>
                </Grid>
            </Grid>
        </ShowcaseSection>
    )
}
