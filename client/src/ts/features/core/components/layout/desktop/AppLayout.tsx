import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

import { LayoutSx } from "@app/theme"
import {
    AppSideNav,
    AppHeader,
} from "@app/features/core/components/layout/shared"

import { AppFooter } from "./footer"

export const AppLayout = (_props: unknown): JSX.Element => {
    return (
        <>
            <Box sx={LayoutSx.desktop.root}>
                <AppHeader />
                <Box sx={LayoutSx.desktop.outletWrapper}>
                    <Outlet />
                </Box>
                <AppFooter />
            </Box>
            <AppSideNav />
        </>
    )
}
