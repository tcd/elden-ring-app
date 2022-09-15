import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

const container: SxProps = {
    zIndex: ThemeVars.zIndex.notificationsContainer,
    position: "absolute",
    bottom: 12,
    left: 24,
}

const notification: SxProps = {
    zIndex: ThemeVars.zIndex.notification,
    width: 300,
    mt: 1,
}

export const Notifications = {
    container,
    notification,
}
