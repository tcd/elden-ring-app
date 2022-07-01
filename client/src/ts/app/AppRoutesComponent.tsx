import { RouteObject, useRoutes } from "react-router-dom"

import {
    AppLayout,

    HomePage,
    AboutPage,
    SettingsPage,
    TestPage,
    BuilderPage,
    ChecklistPage,
    StartingClassMenu,

    TalismanMenu,
    TalismansPage,

    ArmorMenu,
    ArmorPage,

    WeaponMenu,
    WeaponsPage,

    SpellMenu,
    SpellsPage,
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
            { path: "/starting-class",   element: <StartingClassMenu />  },

            { path: "/talismans",        element: <TalismansPage />      },
            { path: "/talismans/menu",   element: <TalismanMenu />       },
            { path: "/talismans/table",  element: <TalismansPage />      },

            { path: "/armor",            element: <ArmorMenu />          },
            { path: "/armor/menu",       element: <ArmorMenu />          },
            { path: "/armor/table",      element: <ArmorPage />          },

            { path: "/weapons",          element: <WeaponMenu />         },
            { path: "/weapons/menu",     element: <WeaponMenu />         },
            { path: "/weapons/table",    element: <WeaponsPage />        },

            { path: "/spells",          element: <SpellsPage />          },
            { path: "/spells/menu",     element: <SpellMenu />           },
            { path: "/spells/table",    element: <SpellsPage />          },
        ],
    },
]
