import { Backdrop, CircularProgress } from "@mui/material"

/**
 * Covers the entire screen.
 *
 * Use to prevent jumpy initial rendering.
 */
export const PreloadOverlay = (_props: unknown): JSX.Element => {
    return (
        <Backdrop id="er__loadingBackdrop" open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
