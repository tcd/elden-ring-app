import GridViewIcon from "@mui/icons-material/GridView"
import PersonIcon from "@mui/icons-material/Person"
import PlusOneIcon from "@mui/icons-material/PlusOne"

import { BottomNav, BottomNavActionProps } from "../bottom-nav"

const plusOneIcon = <PlusOneIcon />
const gridIcon    = <GridViewIcon />
const statusIcon  = <PersonIcon />

const actionProps: BottomNavActionProps[] = [
    { value: "level",     label: "Levels",    to: "#level",     icon: plusOneIcon },
    { value: "equipment", label: "Equipment", to: "#equipment", icon: gridIcon    },
    { value: "status",    label: "Status",    to: "#status",    icon: statusIcon  },
]

export const BuilderFooter = (_props: unknown): JSX.Element => {
    return (
        <BottomNav
            actions={actionProps}
            excludeBack={true}
            default="level"
        />
    )
}
