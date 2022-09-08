import noop from "lodash/noop"
import { forwardRef, SyntheticEvent } from "react"
import { Alert, AlertProps, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import { ComponentSx } from "@app/theme"
import { INotification } from "@app/types"

export interface NotificationContentProps extends INotification {
    onCloseClick: () => void
    onClose?: (event?: SyntheticEvent) => void
    [key: string]: any
}

export const NotificationContent = forwardRef<HTMLDivElement, NotificationContentProps>(function NotificationContent(props: NotificationContentProps, ref) {

    const {
        variant: color,
        message,
        onClose = noop,
        onCloseClick = noop,
        dismissed:        _discard1,
        autoHideDuration: _discard2,
        ...otherProps
    } = props

    const action = (
        <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onCloseClick}
        >
            <CloseIcon fontSize="inherit" />
        </IconButton>
    )

    const alertProps: AlertProps = {
        ref: ref,
        action: action,
        onClose: onClose,
        severity: color,
        sx: ComponentSx.Notifications.notification,
        variant: "filled",
    }

    return (
        <Alert {...alertProps} {...otherProps}>
            {message}
        </Alert>
    )
})
