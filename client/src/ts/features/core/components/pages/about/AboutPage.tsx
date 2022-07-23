import { Page } from "@app/shared"
import { Container } from "@mui/material"
import { About, Credit, Related } from "./sections"

export const AboutPage = (): JSX.Element => {
    return (
        <Page pageName="about" id="er__aboutPage">
            <Container>
                <About />
                <Credit />
                <Related />
            </Container>
        </Page>
    )
}
