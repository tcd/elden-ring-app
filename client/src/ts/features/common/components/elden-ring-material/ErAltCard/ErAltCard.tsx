import { Box, Typography } from "@mui/material"

import { ErHr } from "../ErHr"

export interface ErAltCardProps {
    title: string
}

export const ErAltCard = ({ title }: ErAltCardProps): JSX.Element => {
    return (
        <Box sx={{ display: "flex", flexFlow: "column nowrap" }}>
            <Typography variant="h3">
                {title}
            </Typography>
        </Box>
    )
}
