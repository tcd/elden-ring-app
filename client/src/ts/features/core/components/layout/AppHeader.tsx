import { Link as RouterLink } from "react-router-dom"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import Toolbar from "@mui/material/Toolbar"
// import Typography from "@mui/material/Typography"

import { AppSideNav  } from "./side-nav"

export const AppHeader = (): JSX.Element => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <AppSideNav />

                    <Link
                        noWrap
                        variant="h6"
                        component={RouterLink}
                        className="text-shadow"
                        to={"/"}
                        sx={{ mr: 2, textDecoration: "none", color: "#D6CDB8" }}
                    >
                            Elden Ring
                    </Link>

                    <Box sx={{ flexGrow: 1 }}></Box>

                    {/* <UserMenu /> */}

                </Toolbar>
            </Container>
        </AppBar>
    )
}
