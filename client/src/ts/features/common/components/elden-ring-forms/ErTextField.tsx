import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export interface ErTextFieldProps {

}

export const ErTextField = (props: ErTextFieldProps): JSX.Element => {
    return (
        <Box sx={ComponentSx.forms.TextField.root}>
            <Box sx={ComponentSx.forms.TextField.border.topLeft} />
            <Box sx={ComponentSx.forms.TextField.border.bottomLeft} />
            <Box sx={ComponentSx.forms.TextField.border.topRight} />
            <Box sx={ComponentSx.forms.TextField.border.bottomRight} />
            <Box>
                <Box component="span">
                    testing
                </Box>
            </Box>
        </Box>
    )
}
