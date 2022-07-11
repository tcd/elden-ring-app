import { RouteObject, useRoutes } from "react-router-dom"

import {
    AppLayout,
    MobileLayout,

    HomePage,
    AboutPage,
    SettingsPage,
    TestPage,
    BuilderPage,
    ChecklistPage,
    StatusPage,

    TalismanMenu,
    TalismansTablePage,

    ArmorMenu,
    ArmorTablePage,

    WeaponMenu,
    WeaponsTablePage,
    AshesOfWarPage,

    SpellMenu,
    SpellsTablePage,
} from "@app/features"

export const AppRoutesComponent = () => useRoutes(routes)

const routes: RouteObject[] = [
    {
        path: "/",
        // element: <MobileLayout />,
        element: <AppLayout />,
        children: [
            // { index: true, element: <HomePage /> },
            // { path: "/", element: <HomePage /> },
            { path: "/",                 element: <BuilderPage /> },
            { path: "/about",            element: <AboutPage /> },
            { path: "/builder",          element: <BuilderPage /> },
            { path: "/checklist",        element: <ChecklistPage /> },
            { path: "/test",             element: <TestPage /> },
            { path: "/settings",         element: <SettingsPage /> },
            { path: "/status",           element: <StatusPage /> },

            { path: "/talismans",        element: <TalismansTablePage /> },
            { path: "/talismans/menu",   element: <TalismanMenu /> },
            { path: "/talismans/table",  element: <TalismansTablePage /> },

            { path: "/armor",            element: <ArmorMenu /> },
            { path: "/armor/menu",       element: <ArmorMenu /> },
            { path: "/armor/table",      element: <ArmorTablePage /> },

            { path: "/weapons",          element: <WeaponMenu /> },
            { path: "/weapons/menu",     element: <WeaponMenu /> },
            { path: "/weapons/table",    element: <WeaponsTablePage /> },
            { path: "/weapons/:slotId/ashes-of-war", element: <AshesOfWarPage /> },

            { path: "/spells",           element: <SpellsTablePage /> },
            { path: "/spells/menu",      element: <SpellMenu /> },
            { path: "/spells/table",     element: <SpellsTablePage /> },

        ],
    },
]
