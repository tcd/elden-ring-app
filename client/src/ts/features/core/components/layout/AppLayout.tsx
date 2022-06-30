import { Outlet } from "react-router-dom"

import { AppHeader } from "./AppHeader"
import { AppHeaderV2 } from "./AppHeaderV2"
// import { AppFooter } from "./AppFooter"
// import { AppSideMenu } from "./AppSideMenu"

export const AppLayout = () => {
    return (
        <>
            <AppHeaderV2 />
            <div id="outlet-wrapper" className="container-fluid">
                {/* <AppSideMenu /> */}
                <Outlet />
            </div>
            {/* <AppFooter /> */}
        </>
    )
}
