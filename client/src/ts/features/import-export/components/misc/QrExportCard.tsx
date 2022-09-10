import { useSelector, useDispatch } from "react-redux"
import { Box, Typography, Divider, Button } from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { ErCard } from "@app/features/common"

import { ErQrCode } from "./ErQrCode"

export const QrExportCard = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const url = useSelector(Selectors.ImportExport.requests.buildUrl.response)

    const handleClick = () => {
        dispatch(Actions.ImportExport.buildUrl())
    }

    return (
        <ErCard title="Export">
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
        </ErCard>
    )
}
