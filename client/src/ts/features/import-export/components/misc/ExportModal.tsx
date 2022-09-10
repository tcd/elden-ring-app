import { useSelector, useDispatch } from "react-redux"
import { Box, Typography, Divider, Button } from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { ErCard } from "@app/features/common"

import { ErQrCode } from "./ErQrCode"

export const ExportModal = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const url = useSelector(Selectors.ImportExport.requests.buildUrl.response)

    const handleClick = () => {
        dispatch(Actions.ImportExport.buildUrl())
    }

    return (
        <Box sx={{ display: "flex", flexFlow: "column nowrap" }}>
            <Button variant="elden-ring" onClick={handleClick}>
                    Generate Url
            </Button>
            {/* <hr style={{ width: "100%" }}/> */}
            <Divider />
            <Typography variant="body">
                {url ?? "no url yet"}
            </Typography>
            <Divider />
            <ErQrCode url={url}/>
        </Box>
    )
}

export interface ExportModalContentProps {
    url: string
}

const ExportModalContent = ({ url }: ExportModalContentProps): JSX.Element => {

    const handleClick = () => {

    }

    return (
        <Box sx={{ display: "flex", flexFlow: "column nowrap" }}>
            {/* <hr style={{ width: "100%" }}/> */}
            <Divider />
            <Typography variant="body">
                {url ?? "no url yet"}
            </Typography>
            <Divider />
            <ErQrCode url={url}/>
        </Box>
    )
}
