import {
    mdiBeaker,
    mdiHome,
    mdiMagicStaff,
    mdiOneUp,
    mdiSword,
    mdiTshirtCrew,
    mdiWrench,
    mdiTable,
} from "@mdi/js"

import { ILinkData } from "@types"

const tableLinks: ILinkData[] = [
    { title: "Weapons",   url: "/weapons/table",   icon: mdiSword       },
    { title: "Spells",    url: "/spells/table",    icon: mdiMagicStaff  },
    { title: "Armor",     url: "/armor/table",     icon: mdiTshirtCrew  },
    { title: "Talismans", url: "/talismans/table", icon: mdiOneUp       },
]

const menuLinks: ILinkData[] = [
    { title: "Weapons",   url: "/weapons/menu",   icon: mdiSword       },
    { title: "Spells",    url: "/spells/menu",    icon: mdiMagicStaff  },
    { title: "Armor",     url: "/armor/menu",     icon: mdiTshirtCrew  },
    { title: "Talismans", url: "/talismans/menu", icon: mdiOneUp       },
]

export const SIDE_NAV_LINKS: ILinkData[] = [
    // { subtitle: "Builder" },
    { title: "Home",      url: "/",          icon: mdiHome        },
    { title: "Builder",   url: "/builder",   icon: mdiWrench      },
    { title: "Test",      url: "/test",      icon: mdiBeaker      },
    { divider: true },
    { title: "Menus", icon: mdiTable, links: menuLinks },
    { divider: true },
    { title: "Tables", icon: mdiTable, links: tableLinks },
]
