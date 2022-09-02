import { useSelector } from "react-redux"
import {
    Link as RouterLink,
    To,
} from "react-router-dom"
import {
    BottomNavigationAction,
    BottomNavigation,
} from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

import { Selectors } from "@app/state"
import { useHash } from "@app/shared"

// =============================================================================
// BottomNav
// =============================================================================

export interface BottomNavProps {
    actions: BottomNavActionProps[]
    default?: string
    excludeBack?: boolean
}

export const BottomNav = ({ actions, excludeBack }: BottomNavProps): JSX.Element => {

    const hash = useHash()
    const lastMainPage = useSelector(Selectors.Router.lastMainPage)

    if (excludeBack !== true) {
        const backAction: BottomNavActionProps = {
            label: "Back",
            value: "back",
            to: lastMainPage,
            icon: <ArrowBackIcon />,
        }
        actions = [
            backAction,
            ...actions,
        ]
    }

    const elements = actions.map(({ value, label, to, icon }) =>
        <BottomNavigationAction
            key={label}
            component={RouterLink}
            to={to}
            label={label}
            value={value}
            icon={icon}
        />,
    )

    return (
        <BottomNavigation
            showLabels={true}
            value={hash}
        >
            {elements}
        </BottomNavigation>
    )
}

// =============================================================================
// BottomNavAction
// =============================================================================

export interface BottomNavActionProps {
    value: string
    label: string
    to: To
    icon: JSX.Element
}

export const BottomNavAction = ({ value, label, to, icon }: BottomNavActionProps): JSX.Element => {

    return (
        <BottomNavigationAction
            component={RouterLink}
            to={to}
            label={label}
            value={value}
            icon={icon}
        />
    )
}