import type { To } from "react-router-dom"
import { Link as RouterLink } from "react-router-dom"
import { BottomNavigationAction } from "@mui/material"

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
