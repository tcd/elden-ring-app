import { ReactNode } from "react"
import { Box, Divider, Typography } from "@mui/material"

export interface AboutPageSectionProps {
    title: string
    children?: ReactNode
}

export const AboutPageSection = (props: AboutPageSectionProps): JSX.Element => {

    const { title, children } = props

    return (
        <Box component="section" mb={5}>
            <Typography variant="h2">
                {title}
            </Typography>
            <Divider />
            <>
                {children && children}
            </>
        </Box>
    )
}
