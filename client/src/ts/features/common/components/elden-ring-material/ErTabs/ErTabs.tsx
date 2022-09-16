import { styled } from "@mui/system"
// import TabPanelUnstyled from "@mui/base/TabPanelUnstyled"
import {
    TabUnstyled,
    TabsUnstyled,
    TabPanelUnstyled,
    TabsListUnstyled,
} from "@mui/base"
import CameraswitchIcon from "@mui/icons-material/Cameraswitch"
import HeadphonesIcon from "@mui/icons-material/Headphones"
import KeyboardIcon from "@mui/icons-material/Keyboard"
import LanguageIcon from "@mui/icons-material/Language"
import LogoutIcon from "@mui/icons-material/Logout"
import MonitorIcon from "@mui/icons-material/Monitor"
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"

import { ComponentSx } from "@app/theme"

import { ErHr } from "../ErHr"

const Tab      = styled(TabUnstyled)(ComponentSx.ErTabs.tab)
const TabPanel = styled(TabPanelUnstyled)(ComponentSx.ErTabs.tabPanel)
const TabsList = styled(TabsListUnstyled)(ComponentSx.ErTabs.tabList)

const data = [
    { Icon: CameraswitchIcon, title: "Game Options" },
    { Icon: SportsEsportsIcon, title: "Camera Options" },
    { Icon: HeadphonesIcon, title: "Sound and Display" },
    { Icon: LanguageIcon, title: "Network" },
    { Icon: KeyboardIcon, title: "Keyboard/Mouse Settings" },
    { Icon: MonitorIcon, title: "Graphics" },
    { Icon: LogoutIcon, title: "Quit Game" },
]

export interface ErTabsProps {

}

export const ErTabs = (_props: ErTabsProps): JSX.Element => {
    return (
        <TabsUnstyled defaultValue={0}>
            <ErHr />
            <TabsList>
                {data.map(({ Icon, title }) => (
                    <Tab key={title}>
                        {Icon && <Icon />}
                    </Tab>
                ))}
            </TabsList>
            <ErHr sx={{ mt: 0, pt: 0 }} />
            <br />
            {data.map(({ title }, index) => (
                <TabPanel key={title} value={index}>
                    {title}
                </TabPanel>
            ))}
        </TabsUnstyled>
    )
}
