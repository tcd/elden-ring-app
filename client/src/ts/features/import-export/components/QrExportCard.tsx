import { useSelector, useDispatch } from "react-redux"
import { QRCode } from "react-qrcode-logo"
import { Box, Typography } from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { ErButton, ErCard, MdiIcon } from "@app/features/common"

export const QrExportCard = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const buildData = useSelector(Selectors.ImportExport.buildData.compact)
    const loading = useSelector(Selectors.ImportExport.requests.buildUrl.pending)
    const url = useSelector(Selectors.ImportExport.requests.buildUrl.response)

    const handleClick = () => {
        dispatch(Actions.ImportExport.buildUrl())
    }

    return (
        <ErCard title="Export">
            <Box sx={{ display: "flex", flexFlow: "column nowrap"}}>
                <ErButton onClick={handleClick}>
                    Generate Url
                </ErButton>
                <hr style={{ width: "100%" }}/>
                <Typography variant="body">
                    {url ?? "no url yet"}
                </Typography>
            </Box>
            {/* <QRCode
                // value="https://c.tenor.com/sD2StBC5bT8AAAAC/animated-rainbow.gif"
                value={encodedBuildData}
                // logoImage={assetPath("images/.square.svg")}
                // removeQrCodeBehindLogo={true}
                qrStyle="dots"
                // size={150}
                // bgColor={"#FFFFFF"}
                // fgColor={"#000000"}
                // fgColor={}
                // logoWidth={150 * 0.2}
            /> */}
        </ErCard>
    )
}
