import { rootStyles } from "./root"
import { headerStyles } from "./header"
import { footerStyles } from "./footer"
import { sideNavStyles } from "./side-nav"

export const desktopStyles = {
    ...rootStyles,
    header: headerStyles,
    footer: footerStyles,
    sideNav: sideNavStyles,
}
