import { useSelector } from "react-redux"
import {
    BottomNavigation,
    BottomNavigationAction,
    Paper,
} from "@mui/material"
import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArchiveIcon from "@mui/icons-material/Archive"

import { PageName } from "@app/types"
import { Selectors } from "@app/state"
import {
    WeaponFooter,
    NoFooter,
} from "./footers"

const FOOTERS_BY_PAGE: Record<PageName, JSX.Element> = {
    "about":          <NoFooter />,
    "armor":          <NoFooter />,
    "ashes-of-war":   <NoFooter />,
    "equipment":      <NoFooter />,
    "level-up":       <NoFooter />,
    "not-found":      <NoFooter />,
    "settings":       <NoFooter />,
    "spell":          <NoFooter />,
    "starting-class": <NoFooter />,
    "status":         <NoFooter />,
    "talisman":       <NoFooter />,
    "weapon":         <WeaponFooter />,
}

export const MobileFooter = (_props: unknown): JSX.Element => {

    const pageName = useSelector(Selectors.Core.pageName)

    const footerForPage = FOOTERS_BY_PAGE[pageName] ?? <NoFooter />

    return (
        <footer id="er__mobileLayout__footerRoot">
            {footerForPage}
        </footer>
    )
    return (
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={"Recents"}
                onChange={(event, newValue) => {
                    console.log(event, newValue)
                }}
            >
                <BottomNavigationAction label="Recents"   icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Archive"   icon={<ArchiveIcon />} />
            </BottomNavigation>
        </Paper>
    )
}
