import { Outlet } from "react-router-dom"

import { MobileHeader, MobileFooter } from "."
import { AppSideNav } from "@app/features/core/components/layout/app-side-nav"

export const MobileLayout = () => {
    return (
        <div id="er__mobileLayout">
            <MobileHeader />
            <div id="mobile-outlet-wrapper">
                <AppSideNav />
                <Outlet />
            </div>
            <MobileFooter />
        </div>
    )
}
