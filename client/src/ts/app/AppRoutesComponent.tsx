import { RouteObject, useRoutes } from "react-router-dom"

import {
    AppLayout,

    HomePage,
    AboutPage,
    SettingsPage,
    TestPage,
    BuilderPage,
    ChecklistPage,

    TalismanMenu,
    TalismansPage,
    TalismanDetailPage,

    ArmorPage,
    ArmorDetailPage,

    WeaponMenu,
    WeaponsPage,
    WeaponDetailPage,

    SpellMenu,
    SpellsPage,
    SpellDetailPage,
} from "@app/features"

export const AppRoutesComponent = () => useRoutes(routes)

const routes: RouteObject[] = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            // { index: true, element: <HomePage /> },
            // { path: "/", element: <HomePage /> },
            { path: "/",                 element: <BuilderPage />        },
            { path: "/about",            element: <AboutPage />          },
            { path: "/builder",          element: <BuilderPage />        },
            { path: "/checklist",        element: <ChecklistPage />      },
            { path: "/test",             element: <TestPage />           },
            { path: "/settings",         element: <SettingsPage />       },

            { path: "/talismans",        element: <TalismansPage />      },
            { path: "/talismans/menu",   element: <TalismanMenu />       },
            { path: "/talismans/table",  element: <TalismansPage />      },
            { path: "/talismans/detail", element: <TalismanDetailPage /> },

            { path: "/armor",            element: <ArmorPage />          },
            { path: "/armor/detail",     element: <ArmorDetailPage />    },

            { path: "/weapons",          element: <WeaponMenu />         },
            { path: "/weapons/menu",     element: <WeaponMenu />         },
            { path: "/weapons/table",    element: <WeaponsPage />        },
            { path: "/weapons/detail",   element: <WeaponDetailPage />   },

            { path: "/spells",          element: <SpellsPage />          },
            { path: "/spells/menu",     element: <SpellMenu />           },
            { path: "/spells/table",    element: <SpellsPage />          },
            { path: "/spells/detail",   element: <SpellDetailPage />     },
        ],
    },
]
