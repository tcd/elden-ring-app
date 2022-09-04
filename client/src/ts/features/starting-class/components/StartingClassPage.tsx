import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { ComponentSx } from "@app/theme"
import { ErPage } from "@app/shared"

import { StartingClassMenu } from "./StartingClassMenu"
import { ConfirmationDialog } from "./ConfirmationDialog"
import { Footer } from "./Footer"
import { BigBorder  } from "./borders"

export const StartingClassPage = (_props: unknown): JSX.Element => {

    const navigate = useNavigate()
    const shouldRedirect = useSelector(Selectors.StartingClass.shouldRedirectFromStartingClassPage)
    const lastMainPage = useSelector(Selectors.Routing.lastMainPage)

    useEffect(() => {
        if (shouldRedirect) {
            navigate(lastMainPage)
        }
        document.getElementById("root").classList.add("startingClassPage")
        return () => {
            document.getElementById("root").classList.remove("startingClassPage")
        }
    }, [navigate, lastMainPage, shouldRedirect])

    return (
        <ErPage pageName="starting-class" sx={ComponentSx.StartingClassPage.root}>
            <ConfirmationDialog />
            <BigBorder />
            <StartingClassMenu />
            <BigBorder />
            <Footer />
        </ErPage>
    )
}
