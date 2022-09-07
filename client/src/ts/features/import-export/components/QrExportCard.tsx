import { useSelector, useDispatch } from "react-redux"
import { QRCode } from "react-qrcode-logo"

import { Actions, Selectors } from "@app/state"
import { ErCard, MdiIcon } from "@app/features/common"

export const QrExportCard = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const buildData = useSelector(Selectors.Meta.Export.build)

    const encodedBuildData = JSON.stringify(buildData)
    console.log(encodedBuildData.length)

    return (
        <ErCard title="Export">
            <QRCode
                // value="https://c.tenor.com/sD2StBC5bT8AAAAC/animated-rainbow.gif"
                value={encodedBuildData}
                // logoImage={assetPath("images/mlxb.square.svg")}
                // removeQrCodeBehindLogo={true}
                qrStyle="dots"
                // size={150}
                // bgColor={"#FFFFFF"}
                // fgColor={"#000000"}
                // fgColor={}
                // logoWidth={150 * 0.2}
            />
        </ErCard>
    )
}
