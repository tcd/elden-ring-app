import { Outlet } from "react-router-dom"

import { AppHeader } from "./AppHeader"
// import { AppFooter } from "./AppFooter"
// import { AppSideMenu } from "./AppSideMenu"

export const AppLayout = () => {
    return (
        <>
            <AppHeader />
            <div id="outlet-wrapper" className="container-fluid">
                {/* <AppSideMenu /> */}
                <Outlet />
            </div>
            {/* <AppFooter /> */}
        </>
    )
}
