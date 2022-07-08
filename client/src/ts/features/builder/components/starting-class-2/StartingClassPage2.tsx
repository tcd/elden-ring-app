import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import { Actions } from "@app/state"
import { StartingClassMenu2 } from ".."
// import { StartingClassConfirmationDialog } from "@app/features/builder"

export const StartingClassPage2 = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     // Anything in here is fired on component mount.
    //     dispatch(Actions.Builder.setCurrentMenu("starting-class"))
    //     document.getElementById("root").classList.add("startingClassPage")
    //     return () => {
    //         // Anything in here is fired on component unmount.
    //         document.getElementById("root").classList.remove("startingClassPage")
    //     }
    // }, [])

    return (
        <Box className="er__startingClass2">
            {/* <StartingClassConfirmationDialog />
            <div className="er__startingClass2__topBorder"></div> */}
            <StartingClassMenu2 />
            {/* <div className="er__startingClass2__bottomBorder"></div>
            <div className="er__startingClass2__footer">
                <span className="er__startingClass2__bottomText">
                    Select a base for creating your character
                </span>
            </div> */}
        </Box>
    )
}
