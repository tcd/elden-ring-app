import {
    To,
    Link as RouterLink,
} from "react-router-dom"
import {
    Box,
    Link as MuiLink,
} from "@mui/material"

import { ComponentSx } from "@app/theme"

export interface YouDiedProps {
    title: string
    to: To
}

export const YouDied = (props: YouDiedProps): JSX.Element => {

    const {
        title = "You Died",
        to = "/",
    } = props

    return (
        <Box sx={ComponentSx.YouDied.root}>
            <Box sx={ComponentSx.YouDied.banner}>
                <MuiLink component={RouterLink} sx={ComponentSx.YouDied.link} to={to}>
                    {title}
                </MuiLink>
            </Box>
        </Box>
    )
}
