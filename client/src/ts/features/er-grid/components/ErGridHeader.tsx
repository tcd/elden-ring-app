import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export interface ErGridHeaderProps {
    title: string
    subTitle: string
}

export const ErGridHeader = ({ title, subTitle }: ErGridHeaderProps): JSX.Element => {
    return (
        <Box component="header" sx={ComponentSx.ErGridHeader.root}>
            <Box component="span" sx={ComponentSx.ErGridHeader.title}>
                {title}
            </Box>
            <Box component="span" sx={ComponentSx.ErGridHeader.title}>
                {subTitle}
            </Box>
        </Box>
    )
}
