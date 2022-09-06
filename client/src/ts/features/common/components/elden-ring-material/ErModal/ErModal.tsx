import { Box } from "@mui/material"
import ReactModal from "react-modal"

import { ComponentSx } from "@app/theme"

export interface ErModalProps {
    title: string
    isOpen: boolean
    onClose?: () => any
    children?: React.ReactNode
    footerContent?: React.ReactNode
}

// FIXME: still need to apply styles to modal & overlay components
export const ErModal = (props: ErModalProps): JSX.Element => {

    const footerContent = () => {
        if (props?.footerContent) {
            return props?.footerContent
        } else {
            return (
                <>
                </>
            )
        }
    }

    return (
        <ReactModal
            className="er__modal"
            overlayClassName="er__modal__overlay"
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
            ariaHideApp={false}
        >
            <OuterBorder />

            <Box component="header" sx={ComponentSx.ErModal.headerSx}>
                {props.title}
            </Box>

            <InnerBorder />

            <Box sx={ComponentSx.ErModal.contentSx}>
                <>{props?.children}</>
            </Box>

            <InnerBorder />

            <Box component="header" sx={ComponentSx.ErModal.footerSx}>
                {footerContent()}
            </Box>

            <OuterBorder />
        </ReactModal>
    )
}

// =============================================================================

const OuterBorder = (_props: unknown): JSX.Element => <Box sx={ComponentSx.ErModal.borderSx} />

const InnerBorder = (_props: unknown): JSX.Element => {
    return (
        <Box sx={ComponentSx.ErModal.innerBorderWrapperSx}>
            <Box sx={ComponentSx.ErModal.innerBorderContentSx} />
        </Box>
    )
}
