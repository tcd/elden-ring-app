import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export interface ErFormProps {
    label?: string
    children?: React.ReactNode
}

export const ErForm = (props: ErFormProps): JSX.Element => {
    const {
        label = "no label",
        children = null,
    } = props

    return (
        <Box sx={ComponentSx.forms.FormRow.root}>
            <Box sx={ComponentSx.forms.FormRow.label}>
                {label}
            </Box>
            {children && children}
        </Box>
    )
}
