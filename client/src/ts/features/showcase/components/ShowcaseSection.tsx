import { Box, SxProps, Typography } from "@mui/material"

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
        <Box sx={sx}>
            <Typography variant="h4">{title}</Typography>
            <ErHr variant="full" sx={{ mt: 1, mb: 2 }}/>
            {children}
        </Box>
    )
}

const sx: SxProps = {
    display: "flex",
    flexGrow: 1,
    flexFlow: "column nowrap",
    justifyContent: "stretch",
    alignItems: "stretch",
    mx: "50px",
    mt: "25px",
}
