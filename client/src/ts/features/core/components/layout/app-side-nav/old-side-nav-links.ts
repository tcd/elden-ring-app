import {
    mdiBeaker,
    mdiHome,
    mdiMagicStaff,
    mdiOneUp,
    mdiSword,
    mdiTshirtCrew,
    mdiWrench,
    mdiTable,
    mdiFormatListChecks,
    mdiInformationOutline,
    mdiCog,
    mdiDesktopMacDashboard,
} from "@mdi/js"

import { ILinkData } from "@app/types"

const tableLinks: ILinkData[] = [
    { title: "Weapons", url: "/weapons/table", icon: mdiSword },
    { title: "Spells", url: "/spells/table", icon: mdiMagicStaff },
    { title: "Armor", url: "/armor/table", icon: mdiTshirtCrew },
    { title: "Talismans", url: "/talismans/table", icon: mdiOneUp },
]

const menuLinks: ILinkData[] = [
    { title: "Weapons", url: "/weapons/menu", icon: mdiSword },
    { title: "Spells", url: "/spells/menu", icon: mdiMagicStaff },
    { title: "Armor", url: "/armor/menu", icon: mdiTshirtCrew },
    { title: "Talismans", url: "/talismans/menu", icon: mdiOneUp },
]

export const SIDE_NAV_LINKS: ILinkData[] = [
    // { subtitle: "Builder" },
    { title: "Home", url: "/", icon: mdiHome },
    { title: "Builder", url: "/builder", icon: mdiWrench },
    { title: "Test", url: "/test", icon: mdiBeaker },
    { title: "Checklist", url: "/checklist", icon: mdiFormatListChecks },
    { title: "Settings", url: "/settings", icon: mdiCog },
    { divider: true },
    { title: "Menus", icon: mdiDesktopMacDashboard, links: menuLinks },
    { divider: true },
    { title: "Tables", icon: mdiTable, links: tableLinks },
    { divider: true },
    { title: "About", url: "/about", icon: mdiInformationOutline },
]
