import {
    mdiBeaker,
    mdiHome,
    mdiMagicStaff,
    mdiOneUp,
    mdiSword,
    mdiTshirtCrew,
    mdiWrench,
} from "@mdi/js"

import { ILinkData } from "@types"

export const SIDE_NAV_LINKS: ILinkData[] = [
    { subtitle: "Builder" },
    { title: "Home",      url: "/",          icon: mdiHome        },
    { title: "Builder",   url: "/builder",   icon: mdiWrench      },
    // { title: "Weapons",   url: "/weapons",   icon: mdiSword       },
    // { title: "Spells",    url: "/spells",    icon: mdiMagicStaff  },
    // { title: "Armor",     url: "/armor",     icon: mdiTshirtCrew  },
    // { title: "Talismans", url: "/talismans", icon: mdiOneUp       },
    // { title: "Test",      url: "/test",      icon: mdiBeaker      },
    { divider: true },
    { subtitle: "Tables" },
    { title: "Weapons",   url: "/weapons/table",   icon: mdiSword       },
    { title: "Spells",    url: "/spells/table",    icon: mdiMagicStaff  },
    { title: "Armor",     url: "/armor/table",     icon: mdiTshirtCrew  },
    { title: "Talismans", url: "/talismans/table", icon: mdiOneUp       },
    { divider: true },
    { subtitle: "Menus" },
    { title: "Weapons",   url: "/weapons/menu",   icon: mdiSword       },
    { title: "Spells",    url: "/spells/menu",    icon: mdiMagicStaff  },
    { title: "Armor",     url: "/armor/menu",     icon: mdiTshirtCrew  },
    { title: "Talismans", url: "/talismans/menu", icon: mdiOneUp       },
]
