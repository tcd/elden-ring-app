import { Outlet } from "react-router-dom"

import { MobileHeader, MobileFooter } from "."

export const MobileLayout = () => {
    return (
        <>
            <MobileHeader />
            <div id="mobile-outlet-wrapper">
                <Outlet />
            </div>
            <MobileFooter />
        </>
    )
}
