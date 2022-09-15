import { Box, Typography } from "@mui/material"

import { ErHr } from "../ErHr"

export interface ErAltCardSectionProps {
    title: string
    children?: React.ReactNode
}

export const ErAltCardSection = ({ title, children = null }: ErAltCardSectionProps): JSX.Element => {
    return (
        <Box sx={{ display: "flex", flexFlow: "column nowrap" }}>
            <Typography variant="h3">
                {title}
            </Typography>
            <ErHr variant="full" />
            {children && children}
        </Box>
    )
}
