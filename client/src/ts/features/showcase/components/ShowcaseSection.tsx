import { Box, Typography } from "@mui/material"

import { ErHr } from "@app/features/common"

export interface ShowcaseSectionProps {
    title: string
    children?: React.ReactNode
}

export const ShowcaseSection = (props: ShowcaseSectionProps): JSX.Element => {

    const {
        title = "NO TITLE",
        children = null,
    } = props

    return (
        <Box sx={{ display: "flex", flexFlow: "column nowrap"}}>
            <Typography>{title}</Typography>
            <ErHr variant="full" sx={{ mb: 1 }}/>
            <>
                {children}
            </>
        </Box>
    )
}
