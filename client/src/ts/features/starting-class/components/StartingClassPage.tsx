import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import { Actions } from "@app/state"
import { StartingClassMenu, StartingClassConfirmationDialog } from "."

export const StartingClassPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.Core.setPageName("starting-class"))
        document.getElementById("root").classList.add("startingClassPage")
        return () => {
            dispatch(Actions.Core.clearPageName())
            document.getElementById("root").classList.remove("startingClassPage")
        }
    }, [dispatch])

    return (
        <Box className="er__startingClass">
            <StartingClassConfirmationDialog />
            <div className="er__startingClass__topBorder"></div>
            <StartingClassMenu />
            <div className="er__startingClass__bottomBorder"></div>
            <div className="er__startingClass__footer">
                <span className="er__startingClass__bottomText">
                    Select a base for creating your character
                </span>
            </div>
        </Box>
    )
}
