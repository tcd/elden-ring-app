// import ShareIcon from "@mui/icons-material/Share"
import HubIcon from "@mui/icons-material/Hub"
import InfoIcon from "@mui/icons-material/Info"
import {
    mdiHandClap,
} from "@mdi/js"

import { MdiIcon } from "@app/shared"

import { BottomNav, BottomNavActionProps } from "./BottomNav"

const hubIcon  = <HubIcon />
const infoIcon = <InfoIcon />
const clapIcon = <MdiIcon path = {mdiHandClap}/>

const actionProps: BottomNavActionProps[] = [
    { value: "about",   label: "About",   to: "#about",   icon: infoIcon },
    { value: "credit",  label: "Credit",  to: "#credit",  icon: clapIcon },
    { value: "related", label: "Related", to: "#related", icon: hubIcon  },
]

export const AboutFooter = (_props: unknown): JSX.Element => {
    return (
        <BottomNav
            actions={actionProps}
            default="about"
        />
    )
}
