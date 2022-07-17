import { useSelector } from "react-redux"
import {
    BottomNavigation,
    Paper,
} from "@mui/material"
import ArchiveIcon from "@mui/icons-material/Archive"
import GridViewIcon from "@mui/icons-material/GridView"
import VisibilityIcon from "@mui/icons-material/Visibility"
import PersonIcon from "@mui/icons-material/Person"

import { Selectors } from "@app/state"
import { BottomNavAction, BottomNavActionProps } from "./BottomNavAction"

const gridIcon = <GridViewIcon />
const detailsIcon = <VisibilityIcon />
const statusIcon = <PersonIcon />


const actionProps: BottomNavActionProps[] = [
    { label: "Options", to: "#grid",   icon: gridIcon },
    { label: "Details", to: "#detail", icon: detailsIcon },
    { label: "Status",  to: "#status", icon: statusIcon },
]

export const WeaponFooter = (_props: unknown): JSX.Element => {

    const tab = useSelector(Selectors.Weapons.mobileTab)
    // console.log(tab)

    const actions = actionProps.map((props) => <BottomNavAction key={props.label} {...props} />)

    return (
        // <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels={true}
                value={tab}
                onChange={(event, newValue) => {
                    console.log(event, newValue)
                }}
            >
                {actions}
            </BottomNavigation>
        // </Paper>
    )
}
