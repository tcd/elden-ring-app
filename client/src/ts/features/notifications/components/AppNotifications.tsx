import { useSelector } from "react-redux"
import { Box } from "@mui/material"
import {
    CSSTransition,
    TransitionGroup,
} from "react-transition-group"

import { ComponentSx } from "@app/theme"
import { Selectors } from "@app/state"

import { Notification } from "./Notification"

/**
 * Container element that displays all app notifications.
 */
export const AppNotifications = (_props: unknown): JSX.Element => {

    const notifications = useSelector(Selectors.Notifications.notifications)

    let elements
    if ((notifications?.length ?? 0) > 0) {
        elements = notifications.map((x) => {
            return (
                <CSSTransition
                    key={x.id}
                    timeout={500}
                    classNames="er__notification"
                >
                    <Notification {...x} />
                </CSSTransition>
            )
        })
    }

    return (
        <Box sx={ComponentSx.Notifications.container}>
            <TransitionGroup>
                {elements}
            </TransitionGroup>
        </Box>
    )
}
