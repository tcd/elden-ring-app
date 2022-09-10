import { forwardRef } from "react"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

import type { ErModalProps } from "./types"

export const Content = forwardRef(function Content(props: ErModalProps, ref) {
    return (
        <Box ref={ref} sx={ComponentSx.ErModal.modalSx}>
            <OuterBorder />

            <Box component="header" sx={ComponentSx.ErModal.headerSx}>
                {props.title}
            </Box>

            <InnerBorder />

            <Box sx={ComponentSx.ErModal.contentSx}>
                <>{props?.children}</>
            </Box>

            <InnerBorder />

            <Footer {...props}/>

            <OuterBorder />
        </Box>
    )
})

// =============================================================================

const OuterBorder = (_props: unknown): JSX.Element => <Box sx={ComponentSx.ErModal.borderSx} />

const InnerBorder = (_props: unknown): JSX.Element => {
    return (
        <Box sx={ComponentSx.ErModal.innerBorderWrapperSx}>
            <Box sx={ComponentSx.ErModal.innerBorderContentSx} />
        </Box>
    )
}

const Footer = (props: ErModalProps): JSX.Element => {
    if (props?.footerContent) {
        return (
            <Box component="footer" sx={ComponentSx.ErModal.footerSx}>
                {props?.footerContent}
            </Box>
        )
    }

    return (
        <Box component="footer" sx={ComponentSx.ErModal.footerSx}>
            <></>
        </Box>
    )
}
