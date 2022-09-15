import { Tabs as MuiTabs, Tab, Box } from "@mui/material"
import { useState } from "react"

import { ErPage, ErContainer } from "@app/features/common"

import {
    Buttons,
    Cards,
    ContextMenu,
    Dialog,
    HorizontalRule,
    Lists,
    Modal,
    Tabs,
    Tooltip,
    YouDied,
} from "./sections"

export const AltShowcasePage = (_props: unknown): JSX.Element => {
    return (
        <ErPage title="Showcase (Alt)" icon="gestures" sx={{ display: "flex", flexFlow: "column nowrap" }}>
            <ErContainer>
                <VerticalTabs />
            </ErContainer>
        </ErPage>
    )
}

// =============================================================================
// Vertical Tabs
// =============================================================================

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    if (value === index ) {
        return (
            <Box
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                sx={{ flexGrow: 1 }}
                {...other}
            >
                {children}
            </Box>
        )
    } else {
        return (
            <Box
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            />
        )
    }
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    }
}

const VerticalTabs = (): JSX.Element => {
    const [value, setValue] = useState(8)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }} >

            <MuiTabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
            >
                <Tab label="List"            {...a11yProps(0)} />
                <Tab label="Button"          {...a11yProps(1)} />
                <Tab label="Card"            {...a11yProps(2)} />
                <Tab label="Horizontal Rule" {...a11yProps(3)} />
                <Tab label="Context Menu"    {...a11yProps(4)} />
                <Tab label="Modal"           {...a11yProps(5)} />
                <Tab label="Tooltip"         {...a11yProps(6)} />
                <Tab label="You Died"        {...a11yProps(7)} />
                <Tab label="Tabs"            {...a11yProps(8)} />
                <Tab label="Dialog"          {...a11yProps(9)} />
            </MuiTabs>

            <TabPanel value={value} index={0}>
                <Lists />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Buttons />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Cards />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <HorizontalRule />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <ContextMenu />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Modal />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Tooltip />
            </TabPanel>
            <TabPanel value={value} index={7}>
                <YouDied />
            </TabPanel>
            <TabPanel value={value} index={8}>
                <Tabs />
            </TabPanel>
            <TabPanel value={value} index={9}>
                <Dialog />
            </TabPanel>
        </Box>
    )
}
