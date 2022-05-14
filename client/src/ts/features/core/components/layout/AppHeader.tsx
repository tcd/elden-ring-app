import { Link as RouterLink } from "react-router-dom"
import {
    AppBar,
    Box,
    Container,
    Link,
    Toolbar,
} from "@mui/material"

import { COLORS } from "@app/theme"
import { AppSideNav } from "./side-nav"

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
                        sx={{ mr: 2, textDecoration: "none", color: COLORS.white }}
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
