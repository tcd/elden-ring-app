import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

import { LayoutSx } from "@app/theme"
import { AppSideNav } from "@app/features/core/components/layout/shared"

import { MobileHeader } from "./MobileHeader"
import { MobileFooter } from "./footer"

export const MobileLayout = (_props: unknown): JSX.Element => {
    return (
        <Box sx={LayoutSx.mobile.root}>
            <MobileHeader />
            <Box sx={LayoutSx.mobile.outletWrapper}>
                <AppSideNav />
                <Outlet />
            </Box>
            <MobileFooter />
        </Box>
    )
}
