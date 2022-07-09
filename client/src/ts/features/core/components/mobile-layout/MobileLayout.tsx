import { Outlet } from "react-router-dom"

import { MobileHeader, MobileFooter } from "."

export const MobileLayout = () => {
    return (
        <div id="er__mobileLayout">
            <MobileHeader />
            <div id="mobile-outlet-wrapper">
                <Outlet />
            </div>
            <MobileFooter />
        </div>
    )
}
