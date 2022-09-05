import { Backdrop, CircularProgress } from "@mui/material"

import { startingClassGradient } from "@app/theme"

export interface LoadingOverlayProps {
    open?: boolean
}

export const LoadingOverlay = (props: LoadingOverlayProps): JSX.Element => {
    const {
        open = true,
    } = props
    return (
        <Backdrop open={open} sx={startingClassGradient}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
