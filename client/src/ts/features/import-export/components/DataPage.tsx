import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { QRCode, IProps } from "react-qrcode-logo"

import { ThemeVars } from "@app/theme"
import { Actions, Selectors } from "@app/state"
import { ErPage, ErCard, MuiImg } from "@app/features/common"

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

export const DataPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const buildData = useSelector(Selectors.ImportExport.buildData.raw)
    const compact = useSelector(Selectors.ImportExport.buildData.compact)
    const jsurl = useSelector(Selectors.ImportExport.wip.jsurl)
    const json = useSelector(Selectors.ImportExport.wip.json)
    // const uriEncode = useSelector(Selectors.ImportExport.wip.uriEncode)
    const btoa = useSelector(Selectors.ImportExport.wip.btoa)
    const jsonCrush = useSelector(Selectors.ImportExport.wip.jsonCrush)

    const qrRef = useRef()
    const [queryParams, setQueryParams] = useState<any>()
    const [encodedData, setEncodedData] = useState<any>()
    const [qrImage, setQrImage] = useState<string>()

    // console.log(JSON.stringify(buildData))


    // useEffect(() => {
    //     // const params = new Proxy(new URLSearchParams(window.location.search.replace(/^\?/, "")), {
    //     //     // @ts-ignore: next-line
    //     //     get: (searchParams, prop) => searchParams.get(prop),
    //     // })
    //     const urlSearchParams = new URLSearchParams(window.location.search)
    //     const params = Object.fromEntries(urlSearchParams.entries())
    //     setQueryParams(params)
    // }, [])

    // useEffect(() => {
    //     if (qrRef.current) {
    //         // @ts-ignore: next-line
    //         const canvasData = document.getElementById("er-data-qr-canvas").toDataURL("image/png")
    //         setQrImage(canvasData)
    //     }
    // }, [qrRef])
    console.log(compact)

    console.log({
        rawData: {
            stringify: JSON.stringify(buildData).length,
            compact: JSON.stringify(compact).length,
        },
        json:  json.length,
        // uriEncode: uriEncode.length,
        btoa:  btoa.length,
        jsurl: jsurl.length,
        jsonCrush: jsonCrush.length,
    })

    return (
        <ErPage pageName="data">
            {/* <Container> */}
            <Grid container direction="row">

                <Grid xs={12}>
                    <ErCard title="Query Params">
                        {JSON.stringify(queryParams)}
                    </ErCard>
                </Grid>

                {/* <Grid xs={12}>
                    <ErCard title="PNG">
                        <MuiImg
                            src={qrImage}
                            alt="qr code"
                        />
                    </ErCard>
                </Grid> */}

                <Grid xs={4}>
                    <ErCard title="Raw Json">
                        <QRCode value={json} {...qrCodeProps} />
                    </ErCard>
                </Grid>

                {/* <Grid xs={4}>
                    <ErCard title="encodeURIComponent">
                        <QRCode value={uriEncode} {...qrCodeProps} />
                    </ErCard>
                </Grid> */}

                <Grid xs={4}>
                    <ErCard title="Json Crush">
                        <QRCode value={jsonCrush} {...qrCodeProps} />
                    </ErCard>
                </Grid>

            </Grid>
            {/* </Container> */}
        </ErPage>
    )
}
