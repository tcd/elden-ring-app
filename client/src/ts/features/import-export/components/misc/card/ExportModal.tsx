import { useSelector, useDispatch } from "react-redux"
import { Box, Typography, Divider, Button, SxProps } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { Actions, Selectors } from "@app/state"
import { ErCard, ErModal } from "@app/features/common"

import { ErQrCode } from "../ErQrCode"
import { CopyableLink } from "./CopyableLink"

export const ExportModal = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    // const url = useSelector(Selectors.ImportExport.requests.buildUrl.response)
    const url = "https://eldenring.page.link/29hQ"

    const handleClick = () => {
        dispatch(Actions.ImportExport.buildUrl())
    }

    return (
        <ErModal
            isOpen={true}
            title="Character Build Data"
        >
            <ExportModalContent url={url}/>
        </ErModal>
    )
}


interface ExportModalContentProps {
    url: string
}

const ExportModalContent = ({ url }: ExportModalContentProps): JSX.Element => {

    return (
        <Box sx={ComponentSx.ExportCard.root}>
            <CopyableLink url={url} />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <Divider /> */}
            <ErQrCode url={url} />
        </Box>
    )
}
