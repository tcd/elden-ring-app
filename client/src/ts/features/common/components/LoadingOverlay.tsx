import { Backdrop, CircularProgress } from "@mui/material"

import { ThemeVars } from "@app/theme"

export interface LoadingOverlayProps {
    open?: boolean
}

export const LoadingOverlay = (props: LoadingOverlayProps): JSX.Element => {
    const {
        open = true,
    } = props
    return (
        <Backdrop open={open} sx={{ background: ThemeVars.gradients.startingClassBackground }}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
