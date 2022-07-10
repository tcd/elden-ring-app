import { Outlet } from "react-router-dom"

import { AppHeader } from "./AppHeader"
// import { AppFooter } from "./AppFooter"
import { AppSideNav } from "./app-side-nav"

export const AppLayout = () => {
    return (
        <div id="er__layout">
            <AppHeader />
            <div id="er__layout__outletWrapper" className="container-fluid">
                <AppSideNav />
                <Outlet />
            </div>
            {/* <AppFooter /> */}
        </div>
    )
}
