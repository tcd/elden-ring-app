import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { ErPage } from "@app/shared"

import { StartingClassMenu, StartingClassConfirmationDialog } from "."

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
        <ErPage pageName="starting-class" className="er__startingClass">
            <StartingClassConfirmationDialog />
            <div className="er__startingClass__topBorder"></div>
            <StartingClassMenu />
            <div className="er__startingClass__bottomBorder"></div>
            <div className="er__startingClass__footer">
                <span className="er__startingClass__bottomText">
                    Select a base for creating your character
                </span>
            </div>
        </ErPage>
    )
}
