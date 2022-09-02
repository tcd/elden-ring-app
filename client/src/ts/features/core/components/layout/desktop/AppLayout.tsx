import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

import { LayoutSx } from "@app/theme"
import { AppSideNav } from "@app/features/core/components/layout/shared"

import { AppHeader } from "./AppHeader"
import { AppFooter } from "./footer"

export const AppLayout = (_props: unknown): JSX.Element => {
    return (
        <Box sx={LayoutSx.desktop.root}>
            <AppHeader />
            <Box sx={LayoutSx.desktop.outletWrapper}>
                <AppSideNav />
                <Outlet />
            </Box>
            <AppFooter />
        </Box>
    )
}
