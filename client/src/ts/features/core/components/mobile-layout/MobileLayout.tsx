import { Outlet } from "react-router-dom"

import { AppSideNav } from "@app/features/core/components/layout/app-side-nav"
import { MobileHeader, MobileFooter } from "."

export const MobileLayout = () => {
    return (
        <div id="er__mobileLayout">
            <MobileHeader />
            <div id="er__mobileLayout__outletWrapper">
                <AppSideNav />
                <Outlet />
            </div>
            <MobileFooter />
        </div>
    )
}
