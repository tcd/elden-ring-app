import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Slide } from "@mui/material"

import { INotification } from "@app/types"
import { Actions } from "@app/state"

import { NotificationContent, NotificationContentProps } from "./NotificationContent"

const DELAY = 2_000

export interface NotificationProps extends INotification {}

export const Notification = (props: NotificationProps): JSX.Element => {

    const {
        id,
        autoHideDuration,
    } = props

    const dispatch = useDispatch()
    const [open, setOpen] = useState(true)

    useEffect(() => {
        if (autoHideDuration != null) {
            setTimeout(() => {
                setOpen(false)
            }, autoHideDuration)
            setTimeout(() => {
                dispatch(Actions.Notifications.removeNotification({ id }))
            }, autoHideDuration + DELAY)

        }
    }, [dispatch, id, autoHideDuration, setOpen])

    const handleClose = () => {
        setOpen(false)
        setTimeout(() => {
            dispatch(Actions.Notifications.removeNotification({ id }))
        }, DELAY)
    }

    const handleCloseClick = () => {
        setOpen(false)
        setTimeout(() => {
            dispatch(Actions.Notifications.removeNotification({ id }))
        }, DELAY)
    }

    const contentProps: NotificationContentProps = {
        ...props,
        onClose: handleClose,
        onCloseClick: handleCloseClick,
    }

    return (
        <Slide direction="up" in={open} mountOnEnter unmountOnExit exit={true}>
            <NotificationContent {...contentProps} />
        </Slide>
    )
}
