import { useSelector } from "react-redux"
import { Container } from "@mui/material"

import { Selectors } from "@app/state"
import { ComponentSx } from "@app/theme"
import { ErPage, useViewport } from "@app/shared"

import { About, Credit, Related } from "./sections"

export const AboutPage = (_props: unknown): JSX.Element => {

    const { onMobile } = useViewport()

    if (onMobile) {
        return (<MobileAboutPage/>)
    }

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
        <ErPage pageName="about" sx={ComponentSx.AboutPage.root}>
            <Container>
                {content}
            </Container>
        </ErPage>
    )
}
