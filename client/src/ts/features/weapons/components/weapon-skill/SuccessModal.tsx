import { Modal, Alert, AlertTitle, SxProps, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

export interface SuccessModalProps {
    /** If `true`, the modal is shown */
    open: boolean
    /** Message to display on the body of the modal */
    message: string
    /** Called when the modal is closed */
    onClose: () => any
}

export const SuccessModal = (props: SuccessModalProps): JSX.Element => {

    const { open, message, onClose } = props

    const modalAction = (
        <IconButton color="inherit" size="small" onClick={onClose} aria-label="close">
            <CloseIcon fontSize="inherit" />
        </IconButton>
    )

    return (
        <Modal open={open} onClose={onClose} style={modalStyles}>
            <Alert
                variant="filled"
                severity="success"
                onClose={onClose}
                action={modalAction}
                sx={modalAlertStyles}
            >
                <AlertTitle>Success</AlertTitle>
                {message}
            </Alert>
        </Modal>
    )
}

// =============================================================================
// Styles
// =============================================================================

const modalStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const modalAlertStyles: SxProps = {
    "&:focus-visible": {
        border:  "none",
        outline: "none",
    },
}
