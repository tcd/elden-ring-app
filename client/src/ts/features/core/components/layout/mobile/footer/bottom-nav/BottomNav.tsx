import { useSelector } from "react-redux"
import { BottomNavigation } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

import { Selectors } from "@app/state"
import { useHash } from "@app/shared"

import { BottomNavAction, BottomNavActionProps } from "./BottomNavAction"

export interface BottomNavProps {
    actions: BottomNavActionProps[]
    default?: string
    excludeBack?: boolean
}

export const BottomNav = ({ actions, excludeBack }: BottomNavProps): JSX.Element => {

    const hash = useHash()
    const lastMainPage = useSelector(Selectors.Routing.lastMainPage)

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

    const elements = actions.map((actionProps) => <BottomNavAction key={actionProps.label} {...actionProps}/>)

    return (
        <BottomNavigation
            showLabels={true}
            value={hash}
        >
            {elements}
        </BottomNavigation>
    )
}
