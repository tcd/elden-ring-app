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
    MobileBuilderPage,
} from "@app/features/builder"
import {
    StatusPage,
} from "@app/features/character-status"
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

export const AppRoutesComponent = (_props: unknown): JSX.Element => {
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
            { path: "/talismans/:talismanSlotId", element: <TalismanPage /> },

            // { path: "/armor",      element: <ArmorTablePage /> },
            { path: "/armor/:armorSlotId", element: <ArmorPage /> },

            // { path: "/weapons", element: <WeaponsTablePage /> },
            { path: "/weapons/:weaponSlotId", element: <WeaponsPage /> },
            { path: "/weapons/:weaponSlotId/ashes-of-war", element: <AshesOfWarPage /> },

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
            { path: "/",          element: <MobileEquipmentPage /> },
            { path: "/about",     element: <AboutPage /> },
            { path: "/builder",   element: <MobileBuilderPage /> },
            { path: "/checklist", element: <ChecklistPage /> },
            { path: "/settings",  element: <SettingsPage /> },
            { path: "/status",    element: <StatusPage /> },
            { path: "/test",      element: <TestPage /> },
            { path: "/level-up",  element: <LevelUpPage /> },
            { path: "/equipment", element: <MobileEquipmentPage /> },

            { path: "/starting-class", element: <StartingClassPage /> },

            // { path: "/talismans", element: <TalismansTablePage /> },
            { path: "/talismans/:talismanSlotId", element: <MobileTalismanPage /> },

            // { path: "/armor",      element: <ArmorTablePage /> },
            { path: "/armor/:armorSlotId", element: <MobileArmorPage /> },

            // { path: "/weapons", element: <WeaponsTablePage /> },
            { path: "/weapons/:weaponSlotId", element: <MobileWeaponPage /> },
            { path: "/weapons/:weaponSlotId/ashes-of-war", element: <AshesOfWarPage /> },

            // { path: "/spells",     element: <SpellsTablePage /> },
            { path: "/spells", element: <SpellsTablePage /> },
            { path: "/spells/menu", element: <SpellMenu /> },

            { path: "*", element: <NotFoundPage /> },
        ],
    },
]
