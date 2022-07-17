import { useSelector } from "react-redux"
import { BottomNavigation } from "@mui/material"
import GridViewIcon from "@mui/icons-material/GridView"
import PersonIcon from "@mui/icons-material/Person"
import PlusOneIcon from "@mui/icons-material/PlusOne"

import { Selectors } from "@app/state"
import { BottomNavAction, BottomNavActionProps } from "./BottomNavAction"

const plusOneIcon = <PlusOneIcon />
const gridIcon    = <GridViewIcon />
const statusIcon  = <PersonIcon />

const actionProps: BottomNavActionProps[] = [
    { label: "Levels",    to: "#level",     icon: plusOneIcon },
    { label: "Equipment", to: "#equipment", icon: gridIcon    },
    { label: "Status",    to: "#status",    icon: statusIcon  },
]

export const BuilderFooter = (_props: unknown): JSX.Element => {

    const tab = useSelector(Selectors.Builder.mobileTab)

    const actions = actionProps.map((props) => <BottomNavAction key={props.label} {...props} />)

    return (
        <BottomNavigation
            showLabels={true}
            value={tab}
            onChange={(event, newValue) => {
                console.log(event, newValue)
            }}
        >
            {actions}
        </BottomNavigation>
    )
}
