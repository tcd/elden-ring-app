import { forwardRef } from "react"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

import {
    HorizontalBorder,
    InnerBorder,
    LeftBorder,
    RightBorder,
} from "./borders"
import { AffinitySelect } from "./AffinitySelect"

const Content = forwardRef(function Content(_, ref) {
    return (
        <Box ref={ref} sx={ComponentSx.AffinityModal.modal}>
            <HorizontalBorder />

            <Box component="header" sx={ComponentSx.AffinityModal.header.root}>
                <Box component="span" sx={ComponentSx.AffinityModal.header.title}>
                    Affinity Granted
                </Box>
            </Box>

            <InnerBorder />

            <AffinitySelect />

            <HorizontalBorder />

            <LeftBorder />
            <RightBorder />
        </Box>
    )
})

export const contentElement = (contentProps: React.ComponentPropsWithRef<"div">, children: React.ReactNode) => {
    return <Content {...contentProps}>{children}</Content>
}
