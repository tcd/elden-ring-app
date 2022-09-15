import { useEffect, useRef, useState } from "react"
import { QRCode, IProps } from "react-qrcode-logo"
import { Box, CircularProgress } from "@mui/material"

import { ThemeVars } from "@app/theme"
import { isBlank } from "@app/util"
import { MuiImg } from "@app/features/common"

export interface ErQrCodeProps {
    url: string
}

export const ErQrCode = ({ url }: ErQrCodeProps): JSX.Element => {

    const qrRef = useRef()
    const [qrImage, setQrImage] = useState<string>()

    useEffect(() => {
        if (!isBlank(qrImage)) {
            return
        }
        if (isBlank(url)) {
            return
        }
        if (qrRef?.current) {
            // @ts-ignore: next-line
            const canvasData = document.getElementById("er-data-qr-canvas")?.toDataURL("image/png")
            setQrImage(canvasData)
        }
    }, [url, qrRef, qrImage])

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
                responsive={true}
            />
            <Box sx={{ display: "none" }}>
                <QRCode
                    ref={qrRef}
                    value={url}
                    {...qrCodeProps}
                />
            </Box>

        </Box>
    )
}

// =============================================================================

const QR_CODE_SIZE: Integer = 150

const qrCodeProps: Partial<IProps> = {
    id: "er-data-qr-canvas",
    // ecLevel: "M",
    qrStyle: "dots",
    size: QR_CODE_SIZE,
    quietZone: 10, // default
    // fgColor: ThemeVars.colors.blue,
    fgColor: ThemeVars.colors.gold.light,
    bgColor: "#36362d",
    // logoWidth: (QR_CODE_SIZE * 0.2),
    // removeQrCodeBehindLogo: true,
}
