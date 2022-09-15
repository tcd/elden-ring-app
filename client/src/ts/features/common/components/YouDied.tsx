import type { To } from "react-router-dom"
import {
    Box,
    Link as MuiLink,
} from "@mui/material"

import { ComponentSx } from "@app/theme"

export interface YouDiedProps {
    title: string
    to: To
    onClick?: () => void
}

export const YouDied = (props: YouDiedProps): JSX.Element => {

    const {
        title = "You Died",
        to = "/",
        onClick = null,
    } = props

    if (onClick !== null) {
        return (
            <Box sx={ComponentSx.YouDied.root}>
                <Box sx={ComponentSx.YouDied.banner}>
                    <Box sx={ComponentSx.YouDied.link} onClick={onClick}>
                        {title}
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <Box sx={ComponentSx.YouDied.root}>
            <Box sx={ComponentSx.YouDied.banner}>
                {/* @ts-ignore: next-line */}
                <MuiLink sx={ComponentSx.YouDied.link} href={to}>
                    {title}
                </MuiLink>
            </Box>
        </Box>
    )
}
