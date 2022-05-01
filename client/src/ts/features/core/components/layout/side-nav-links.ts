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
    { title: "Home",      url: "/",          icon: mdiHome        },
    { title: "Builder",   url: "/builder",   icon: mdiWrench      },
    { title: "Weapons",   url: "/weapons",   icon: mdiSword       },
    { title: "Spells",    url: "/spells",    icon: mdiMagicStaff  },
    { title: "Armor",     url: "/armor",     icon: mdiTshirtCrew  },
    { title: "Talismans", url: "/talismans", icon: mdiOneUp       },
    // { title: "Test",      url: "/test",      icon: mdiBeaker      },
]
