import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { ErPage, useHash, useViewport } from "@app/shared"

import { About, Credit, Related } from "./sections"

export const AboutPage = (_props: unknown): JSX.Element => {

    const hash = useHash()
    const navigate = useNavigate()
    const { onMobile } = useViewport()

    useEffect(() => {
        if (hash === "") {
            navigate("#about", { replace: true })
        }
    }, [navigate, hash])

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

    const tab = useHash()
    // const navigate = useNavigate()

    // if (tab === "") {
    //     navigate("#about", { replace: true })
    // }

    let content: JSX.Element = null

    switch (tab) {
        case "about":   content = <About />;   break
        case "credit":  content = <Credit />;  break
        case "related": content = <Related />; break
        default:                               break
    }

    return (
        <ErPage pageName="about" sx={ComponentSx.AboutPage.root}>
            <Container>
                {content}
            </Container>
        </ErPage>
    )
}
