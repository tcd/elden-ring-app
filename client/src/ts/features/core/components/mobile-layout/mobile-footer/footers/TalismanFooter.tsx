import GridViewIcon from "@mui/icons-material/GridView"
import VisibilityIcon from "@mui/icons-material/Visibility"
import PersonIcon from "@mui/icons-material/Person"

import { Selectors } from "@app/state"
import { BottomNav, BottomNavActionProps } from "./BottomNav"

const gridIcon    = <GridViewIcon />
const detailsIcon = <VisibilityIcon />
const statusIcon  = <PersonIcon />

const actionProps: BottomNavActionProps[] = [
    { value: "grid",   label: "Options", to: "#grid",   icon: gridIcon },
    { value: "detail", label: "Details", to: "#detail", icon: detailsIcon },
    { value: "status", label: "Status",  to: "#status", icon: statusIcon },
]

export const TalismanFooter = (_props: unknown): JSX.Element => {
    return (
        <BottomNav
            actions={actionProps}
            selector={Selectors.Talismans.mobileTab}
        />
    )
}
