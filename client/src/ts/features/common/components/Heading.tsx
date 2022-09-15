import type { CSSProperties } from "react"
import { Box, Typography, Divider } from "@mui/material"

export interface HeadingProps {
    title: string
    children?: JSX.Element | JSX.Element[] | never[]
    style?: CSSProperties
}

const defaultProps: Partial<HeadingProps> = {
    children: null,
    style: {},
}

export const Heading = (props: HeadingProps): JSX.Element => {
    props = {
        ...defaultProps,
        ...props,
    }

    const {
        title,
        children,
        style,
    } = props

    if (!title) {
        return null
    }

    return (
        <Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }} style={style}>
                <Typography variant="h1" gutterBottom component="div">
                    {props.title}
                </Typography>
                <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                    {children && children}
                </Box>
            </Box>

            <Divider />

        </Box>
    )
}
