import { Link, To } from "react-router-dom"
import { BottomNavigationAction } from "@mui/material"

export interface BottomNavActionProps {
    label: string
    to: To
    icon: JSX.Element
}

export const BottomNavAction = ({ label, to, icon }: BottomNavActionProps): JSX.Element => {
    return (
        <BottomNavigationAction
            component={Link}
            to={to}
            label={label}
            value={label}
            icon={icon}
        />
    )
}
