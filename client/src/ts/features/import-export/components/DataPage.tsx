import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { QRCode, IProps } from "react-qrcode-logo"

import { ThemeVars } from "@app/theme"
import { Actions, Selectors } from "@app/state"
import { ErPage, ErCard, MuiImg } from "@app/features/common"

import { TestTable } from "./TestTable"
import { QrExportCard } from "./QrExportCard"

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

    const [queryParams, setQueryParams] = useState<any>({})

    useEffect(() => {
        // const params = new Proxy(new URLSearchParams(window.location.search.replace(/^\?/, "")), {
        //     // @ts-ignore: next-line
        //     get: (searchParams, prop) => searchParams.get(prop),
        // })
        const urlSearchParams = new URLSearchParams(window.location.search)
        const params = Object.fromEntries(urlSearchParams.entries())
        setQueryParams(params)
    }, [])

    // useEffect(() => {
    //     if (qrRef.current) {
    //         // @ts-ignore: next-line
    //         const canvasData = document.getElementById("er-data-qr-canvas").toDataURL("image/png")
    //         setQrImage(canvasData)
    //     }
    // }, [qrRef])

    return (
        <ErPage pageName="data">
            <Container>
                <Grid container direction="row">

                    <Grid xs={12}>
                        <ErCard title="Query Params">
                            {JSON.stringify(queryParams)}
                        </ErCard>
                    </Grid>

                    <Grid xs={12}>
                        <QrExportCard />
                    </Grid>

                    <Grid xs={12}>
                        <TestTable />
                    </Grid>

                </Grid>
            </Container>
        </ErPage>
    )

    //     return (
    //         <ErPage pageName="data">
    //             {/* <Container> */}
    //             <Grid container direction="row">
    //
    //                 <Grid xs={12}>
    //                     <ErCard title="Query Params">
    //                         {JSON.stringify(queryParams)}
    //                     </ErCard>
    //                 </Grid>
    //
    //                 {/* <Grid xs={12}>
    //                     <ErCard title="PNG">
    //                         <MuiImg
    //                             src={qrImage}
    //                             alt="qr code"
    //                         />
    //                     </ErCard>
    //                 </Grid> */}
    //
    //                 <Grid xs={4}>
    //                     <ErCard title="Raw Json">
    //                         <QRCode value={json} {...qrCodeProps} />
    //                     </ErCard>
    //                 </Grid>
    //
    //                 {/* <Grid xs={4}>
    //                     <ErCard title="encodeURIComponent">
    //                         <QRCode value={uriEncode} {...qrCodeProps} />
    //                     </ErCard>
    //                 </Grid> */}
    //
    //                 <Grid xs={4}>
    //                     <ErCard title="Json Crush">
    //                         <QRCode value={jsonCrush} {...qrCodeProps} />
    //                     </ErCard>
    //                 </Grid>
    //
    //             </Grid>
    //             {/* </Container> */}
    //         </ErPage>
    //     )
}
