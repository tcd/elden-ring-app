import { useSelector } from "react-redux"
import { Box, Button } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { Selectors } from "@app/state"
import { ErModal } from "@app/features/common"

import { ErQrCode } from "../ErQrCode"
import { CopyableLink } from "./CopyableLink"

export type ExportModalProps = {
    open: boolean
    onClose: () => void
}

export const ExportModal = (props: ExportModalProps): JSX.Element => {

    const {
        open,
        onClose,
    } = props

    const url = useSelector(Selectors.ImportExport.requests.buildUrl.response)

    const $footer = (
        <Button variant="elden-ring" onClick={onClose}>
            Close
        </Button>
    )

    return (
        <ErModal
            isOpen={open}
            onClose={onClose}
            title="Character Build Data"
            footerContent={$footer}
        >
            <Box sx={ComponentSx.ExportCard.root}>
                <CopyableLink url={url} />
                <ErQrCode url={url} />
            </Box>
        </ErModal>
    )
}
