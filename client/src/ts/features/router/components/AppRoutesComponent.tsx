import { RouteObject, useRoutes } from "react-router-dom"

import { useViewport } from "@app/shared"
import {
    AppLayout,
    MobileLayout,

    // HomePage,
    NotFoundPage,
    AboutPage,
    SettingsPage,
    TestPage,
} from "@app/features/core"
import {
    BuilderPage,
    StatusPage,
} from "@app/features/builder"
import {
    ChecklistPage,
} from "@app/features/checklist"
import {
    LevelUpPage,
} from "@app/features/level-up"
import {
    StartingClassPage,
} from "@app/features/starting-class"
import {
    EquipmentPage,
    MobileEquipmentPage,
} from "@app/features/equipment"
import {
    TalismanPage,
    // TalismansTablePage,
    MobileTalismanPage,
} from "@app/features/talismans"
import {
    ArmorPage,
    // ArmorTablePage,
    MobileArmorPage,
} from "@app/features/armor"
import {
    WeaponsPage,
    // WeaponsTablePage,
    AshesOfWarPage,
    MobileWeaponPage,
} from "@app/features/weapons"
import {
    SpellMenu,
    SpellsTablePage,
} from "@app/features/spells"

export const AppRoutesComponent = () => {
    // const onMobile = ScreenSize.onMobile
    const { onMobile } = useViewport()

    const routes = onMobile ? mobileRoutes : desktopRoutes
    return useRoutes(routes)
}

const desktopRoutes: RouteObject[] = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            // { index: true, element: <HomePage /> },
            // { path: "/", element: <HomePage /> },
            { path: "/",          element: <EquipmentPage /> },
            { path: "/about",     element: <AboutPage /> },
            { path: "/builder",   element: <BuilderPage /> },
            { path: "/checklist", element: <ChecklistPage /> },
            { path: "/settings",  element: <SettingsPage /> },
            { path: "/status",    element: <StatusPage /> },
            { path: "/test",      element: <TestPage /> },
            { path: "/level-up",  element: <LevelUpPage /> },
            { path: "/equipment", element: <EquipmentPage /> },

            { path: "/starting-class", element: <StartingClassPage /> },

            // { path: "/talismans", element: <TalismansTablePage /> },
            { path: "/talismans/:slotId", element: <TalismanPage /> },

            // { path: "/armor",      element: <ArmorTablePage /> },
            { path: "/armor/:slotId", element: <ArmorPage /> },

            // { path: "/weapons", element: <WeaponsTablePage /> },
            { path: "/weapons/:slotId", element: <WeaponsPage /> },
            { path: "/weapons/:slotId/ashes-of-war", element: <AshesOfWarPage /> },

            // { path: "/spells",     element: <SpellsTablePage /> },
            { path: "/spells", element: <SpellsTablePage /> },
            { path: "/spells/menu", element: <SpellMenu /> },

            { path: "*", element: <NotFoundPage /> },

        ],
    },
]

const mobileRoutes: RouteObject[] = [
    {
        path: "/",
        element: <MobileLayout />,
        // element: <AppLayout />,
        children: [
            // { index: true, element: <HomePage /> },
            // { path: "/", element: <HomePage /> },
            { path: "/",          element: <BuilderPage /> },
            { path: "/about",     element: <AboutPage /> },
            { path: "/builder",   element: <BuilderPage /> },
            { path: "/checklist", element: <ChecklistPage /> },
            { path: "/settings",  element: <SettingsPage /> },
            { path: "/status",    element: <StatusPage /> },
            { path: "/test",      element: <TestPage /> },
            { path: "/level-up",  element: <LevelUpPage /> },
            { path: "/equipment", element: <MobileEquipmentPage /> },

            { path: "/starting-class", element: <StartingClassPage /> },

            // { path: "/talismans", element: <TalismansTablePage /> },
            { path: "/talismans/:slotId", element: <MobileTalismanPage /> },

            // { path: "/armor",      element: <ArmorTablePage /> },
            { path: "/armor/:slotId", element: <MobileArmorPage /> },

            // { path: "/weapons", element: <WeaponsTablePage /> },
            { path: "/weapons/:slotId", element: <MobileWeaponPage /> },
            { path: "/weapons/:slotId/ashes-of-war", element: <AshesOfWarPage /> },

            // { path: "/spells",     element: <SpellsTablePage /> },
            { path: "/spells", element: <SpellsTablePage /> },
            { path: "/spells/menu", element: <SpellMenu /> },

            { path: "*", element: <NotFoundPage /> },

        ],
    },
]