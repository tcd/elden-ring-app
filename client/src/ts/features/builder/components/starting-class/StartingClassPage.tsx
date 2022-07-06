import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { StartingClassMenu } from "."

export const StartingClassPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    useEffect(() => {
        // Anything in here is fired on component mount.
        dispatch(Actions.Builder.setCurrentMenu("starting-class"))
        document.getElementById("root").classList.add("startingClassPage")
        return () => {
            // Anything in here is fired on component unmount.
            document.getElementById("root").classList.remove("startingClassPage")
        }
    }, [])

    return (
        <StartingClassMenu />
    )
}
