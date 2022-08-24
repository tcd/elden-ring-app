import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { MobileBuilderMenu } from "../MobileBuilderMenu"

export const MobileBuilderPage = (_props: unknown): JSX.Element => {

    const navigate = useNavigate()

    const startingClassName = useSelector(Selectors.StartingClass.startingClassName)

    useEffect(() => {
        if (isBlank(startingClassName)) {
            navigate("/starting-class")
        }
    }, [startingClassName, navigate])

    return <MobileBuilderMenu />
}