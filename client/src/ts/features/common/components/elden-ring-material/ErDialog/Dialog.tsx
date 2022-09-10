import { forwardRef } from "react"
import { Box, Button } from "@mui/material"

import { ComponentSx } from "@app/theme"

import type { ErDialogProps } from "./types"
import { Content } from "./Content"

export const Dialog = forwardRef<HTMLDivElement, ErDialogProps>(function Dialog(props, ref) {

    const $options = props.options.map(({ title, handler }) => {
        return (
            <Button
                key={title}
                variant="elden-ring"
                onClick={handler}
                sx={{ marginTop: "15px", marginBottom: "15px" }}
            >
                {title}
            </Button>
        )
    })

    return (
        <Box ref={ref} sx={ComponentSx.ErDialog.dialogSx}>

            <Box sx={ComponentSx.ErDialog.borderSx} />

            <Box component="header" sx={ComponentSx.ErDialog.headerSx}>
                {props.title}
            </Box>

            <Content>
                {$options}
            </Content>

            <Box sx={ComponentSx.ErDialog.borderSx} />

        </Box>
    )
})
