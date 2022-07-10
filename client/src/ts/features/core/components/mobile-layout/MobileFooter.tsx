import {
    BottomNavigation,
    BottomNavigationAction,
    Paper,
} from "@mui/material"
import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArchiveIcon from "@mui/icons-material/Archive"

export const MobileFooter = (_props: unknown): JSX.Element => {
    // return (
    //     <footer>
    //         Footer
    //     </footer>
    // )
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
