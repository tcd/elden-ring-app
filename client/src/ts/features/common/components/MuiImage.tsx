import { useState } from "react"
import type { BoxProps } from "@mui/material"
import { Box } from "@mui/material"
// import BrokenImageIcon from "@mui/icons-material/BrokenImage"

import { ErBlank } from "@app/shared"

type Omissions =
    | "component"
    | "onerror"
    | "onload"
    | "onError"
    | "onLoad"

export type MuiImgProps = Omit<BoxProps<"img">, Omissions> & {
    fallbackComponent?: React.ReactNode
}

/**
 * HTML `<img />` component wrapper.
 */
export const MuiImg = (props: MuiImgProps): JSX.Element => {

    const [broken, setBroken] = useState<boolean>()

    const handleError = (_event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setBroken(true)
        debugger
    }
    const handleLoad  = (_event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setBroken(false)
    }

    if (!props?.src || broken == true) {
        if (props?.fallbackComponent != undefined) {
            return <>{props.fallbackComponent}</>
        }
        return <ErBlank />
    }

    return (
        <Box
            component="img"
            onError={handleError}
            onLoad={handleLoad}
            {...props}
        />
    )
}