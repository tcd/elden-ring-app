import { forwardRef } from "react"
import { Box } from "@mui/material"

import { overlaySx } from "./styles"

export const Overlay = forwardRef(function Overlay(props, ref) {
    return (
        <Box
            {...props}
            ref={ref}
            sx={overlaySx}
        />
    )
})
