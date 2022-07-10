import { Outlet } from "react-router-dom"

import { AppHeader } from "./AppHeader"
import { AppHeaderV2 } from "./AppHeaderV2"
// import { AppFooter } from "./AppFooter"
// import { AppSideMenu } from "./AppSideMenu"
import { SideNav2 } from "./side-nav-2"

export const AppLayout = () => {
    return (
        <div id="er__layout">
            <AppHeaderV2 />
            <div id="er__layout__outletWrapper" className="container-fluid">
                <SideNav2 />
                <Outlet />
            </div>
            {/* <AppFooter /> */}
        </div>
    )
}
