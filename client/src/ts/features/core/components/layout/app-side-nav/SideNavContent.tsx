import { Box } from "@mui/material"

import { LayoutSx } from "@app/theme"

import { SideNavItem, SideNavItemProps } from "./SideNavItem"

// =============================================================================
// SideNavContent
// =============================================================================

const sideNavItems: SideNavItemProps[] = [
    {
        pageName: "builder",
        title: "Builder",
        cloudflareId: "smithing",
        url: "/builder#grid",
    },
    {
        pageName: "equipment",
        title: "Equipment",
        cloudflareId: "equipment",
        url: "/equipment#grid",
    },
    {
        pageName: "level-up",
        title: "Level Up",
        cloudflareId: "level-up",
        url: "/level-up",
    },
    // {
    //     pageName: null,
    //     title: "Item Crafting",
    //     cloudflareId: "ui/title-icons/crafting",
    // },
    {
        pageName: "status",
        title: "Status",
        cloudflareId: "status",
        url: "/status",
    },
    {
        pageName: "about",
        title: "About",
        cloudflareId: "map",
        url: "/about",
    },
    {
        pageName: "settings",
        title: "Settings",
        cloudflareId: "system",
        url: "/settings",
    },
]

export const SideNavContent = (_props: unknown): JSX.Element => {
    const items = sideNavItems.map((x) => <SideNavItem key={x.title} {...x} />)
    return (
        <Box component="ul" sx={LayoutSx.shared.sideNav.items}>
            {items}
        </Box>
    )
}
