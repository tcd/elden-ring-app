import { useSelector } from "react-redux"
import { Container } from "@mui/material"

import { Page, useViewport } from "@app/shared"
import { Selectors } from "@app/state"
import { About, Credit, Related } from "./sections"

export const AboutPage = (_props: unknown): JSX.Element => {

    const { onMobile } = useViewport()

    if (onMobile) {
        return (<MobileAboutPage/>)
    }

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

export const MobileAboutPage = (_props: unknown): JSX.Element => {

    const hash = useSelector(Selectors.Router.hash)

    let content = <About />

    if (hash != null) {
        switch (hash) {
            case "about":   content = <About />;   break
            case "credit":  content = <Credit />;  break
            case "related": content = <Related />; break
            default:                               break
        }
    }

    return (
        <Page pageName="about" id="er__aboutPage">
            <Container>
                {content}
            </Container>
        </Page>
    )
}
