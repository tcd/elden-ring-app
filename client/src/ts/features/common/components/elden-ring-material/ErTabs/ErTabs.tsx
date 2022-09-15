import { styled } from "@mui/system"
// import TabPanelUnstyled from "@mui/base/TabPanelUnstyled"
import {
    TabUnstyled,
    TabsUnstyled,
    TabPanelUnstyled,
    TabsListUnstyled,
} from "@mui/base"

import { ComponentSx } from "@app/theme"


const Tab      = styled(TabUnstyled)(ComponentSx.ErTabs.tab)
const TabPanel = styled(TabPanelUnstyled)(ComponentSx.ErTabs.tabPanel)
const TabsList = styled(TabsListUnstyled)(ComponentSx.ErTabs.tabList)

export interface ErTabsProps {

}

export const ErTabs = (_props: ErTabsProps): JSX.Element => {
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>My account</Tab>
                <Tab>Profile</Tab>
                <Tab>Language</Tab>
            </TabsList>
            <TabPanel value={0}>My account page</TabPanel>
            <TabPanel value={1}>Profile page</TabPanel>
            <TabPanel value={2}>Language page</TabPanel>
        </TabsUnstyled>
    )
}
