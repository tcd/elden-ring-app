import { Container } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { ErPage } from "@app/features/common"

import { About, Credit, Related } from "./sections"

export const AboutPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="about" sx={ComponentSx.AboutPage.root}>
            <Container>
                <About />
                <Credit />
                <Related />
            </Container>
        </ErPage>
    )
}
