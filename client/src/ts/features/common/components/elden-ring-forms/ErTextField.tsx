import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export interface ErTextFieldProps {
    label: string
}

export const ErTextField = (props: ErTextFieldProps): JSX.Element => {
    return (
        <Box sx={ComponentSx.forms.TextField.wrapper.root}>
            <Box sx={ComponentSx.forms.TextField.wrapper.content}>
                <Box sx={ComponentSx.forms.TextField.wrapper.absolute} />
                <Box sx={ComponentSx.forms.TextField.borders.topLeft} />
                <Box sx={ComponentSx.forms.TextField.borders.bottomLeft} />
                <Box sx={ComponentSx.forms.TextField.borders.topRight} />
                <Box sx={ComponentSx.forms.TextField.borders.bottomRight} />
                <Box sx={ComponentSx.forms.TextField.borders.left} />
                <Box sx={ComponentSx.forms.TextField.borders.right} />
                <Box sx={ComponentSx.forms.TextField.input.root}>
                    testing
                </Box>
            </Box>
        </Box>
    )
}
