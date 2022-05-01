import { Outlet } from "react-router-dom"

import { SxProps } from "@mui/material"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"

const drawerWidth = 240

const drawerStyles: SxProps = {
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
}

export const AppSideMenu = () => {
    return (
        <div id="app-side-menu">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis vel, odit, consequuntur a sit corrupti sunt tenetur odio esse exercitationem perferendis dolorum tempore error voluptas incidunt! Odit, quibusdam! Debitis.
        </div>
    )
}

// export const AppSideMenu = () => {
//     return (
//         <Drawer variant="permanent" sx={drawerStyles}>
//             <Toolbar />
//             <Box sx={{ overflow: "auto" }}>
//                 <List>
//                     {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>
//                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                             </ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//                 <Divider />
//                 <List>
//                     {["All mail", "Trash", "Spam"].map((text, index) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>
//                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                             </ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//             </Box>
//         </Drawer>
//     )
// }
