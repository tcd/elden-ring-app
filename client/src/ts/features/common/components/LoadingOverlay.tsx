import { Backdrop, CircularProgress } from "@mui/material"

export interface LoadingOverlayProps {
    open?: boolean
}

const defaultProps: LoadingOverlayProps = {
    open: true,
}

export const LoadingOverlay = (props: LoadingOverlayProps): JSX.Element => {
    props = {
        ...defaultProps,
        ...props,
    }
    return (
        <Backdrop id="er__loadingBackdrop" open={props.open}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
