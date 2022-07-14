import { Page } from "@app/shared"
import { Container } from "@mui/material"
import { Credit, Related } from "./sections"

export const AboutPage = (): JSX.Element => {
    return (
        <Page pageName="about">
            <Container>
                <Credit />
                <Related />
            </Container>
        </Page>
    )
}
