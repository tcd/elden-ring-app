import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export interface ErTextFieldProps {

}

export const ErTextField = (props: ErTextFieldProps): JSX.Element => {
    return (
        <Box sx={ComponentSx.forms.TextField.wrapper.root}>
            <Box sx={ComponentSx.forms.TextField.wrapper.content}>
                <Box sx={ComponentSx.forms.TextField.wrapper.absolute} />
                <Box sx={ComponentSx.forms.TextField.border.topLeft} />
                <Box sx={ComponentSx.forms.TextField.border.bottomLeft} />
                <Box sx={ComponentSx.forms.TextField.border.topRight} />
                <Box sx={ComponentSx.forms.TextField.border.bottomRight} />
                <Box sx={ComponentSx.forms.TextField.border.left} />
                <Box sx={ComponentSx.forms.TextField.border.right} />
                <Box sx={ComponentSx.forms.TextField.input.root}>
                    testing
                </Box>
            </Box>
        </Box>
    )
}
