import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { useHash } from "@app/util"
import { ErPage } from "@app/features/common"

import { About, Credit, Related } from "./sections"

export const MobileAboutPage = (_props: unknown): JSX.Element => {

    const tab = useHash()
    const navigate = useNavigate()

    if (tab === "") {
        navigate("#about", { replace: true })
    }

    useEffect(() => {
        if (tab === "") {
            navigate("#about", { replace: true })
        }
    }, [navigate, tab])

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
