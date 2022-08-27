import { forwardRef } from "react"
import { Box, styled } from "@mui/material"
import type { BoxProps } from "@mui/material"

import { ErButton } from "@app/shared"
import { ErDialogProps } from "./types"
import { Content } from "./Content"
import * as Styles from "./styles"

const StyledDialog = styled(Box)<BoxProps>(({ theme }) => Styles.dialogStyles(theme))

export const Dialog = forwardRef<HTMLDivElement, ErDialogProps>(function Dialog(props, ref) {

    const $options = props.options.map(({ title, handler }) => {
        return (
            <ErButton
                key={title}
                onClick={handler}
                sx={{ marginTop: "15px", marginBottom: "15px" }}
            >
                {title}
            </ErButton>
        )
    })

    return (
        <StyledDialog ref={ref}>

            <Box sx={Styles.borderSx} />

            <Box component="header" sx={Styles.headerSx}>
                {props.title}
            </Box>

            <Content>
                {$options}
            </Content>

            <Box sx={Styles.borderSx} />

        </StyledDialog>
    )
})
