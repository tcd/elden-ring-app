import { useEffect, useRef, useState } from "react"
import { QRCode, IProps } from "react-qrcode-logo"
import { Box, CircularProgress } from "@mui/material"

import { ThemeVars } from "@app/theme"
import { isBlank } from "@app/util"
import { MuiImg } from "@app/features/common"

const qrCodeProps: Partial<IProps> = {
    ecLevel: "M",
    size: 200,
    qrStyle: "squares",
    quietZone: 10, // default
    // fgColor: ThemeVars.colors.blue,
    // logoWidth: (150 * 0.2),
    // removeQrCodeBehindLogo: true,
    // logoImage: "",
}

export interface ErQrCodeProps {
    url: string
}

export const ErQrCode = ({ url }: ErQrCodeProps): JSX.Element => {

    const qrRef = useRef()
    const [qrImage, setQrImage] = useState<string>()

    useEffect(() => {
        if (qrRef.current) {
            // @ts-ignore: next-line
            const canvasData = document.getElementById("er-data-qr-canvas").toDataURL("image/png")
            setQrImage(canvasData)
        }
    }, [qrRef])

    if (isBlank(url)) {
        return (
            <Box sx={{ display: "flex" }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Box>
            <MuiImg
                src={qrImage}
                alt="qr code"
            />
            {/* <Box sx={{ display: "none" }}> */}
            <Box sx={{}}>
                <QRCode
                    value={url}
                    {...qrCodeProps}
                />
            </Box>

        </Box>
    )
}

