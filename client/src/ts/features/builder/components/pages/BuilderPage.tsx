import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import {
    ErPage,
    CharacterStatus,
} from "@app/features"

import { LevelUpMenu } from "../LevelUpMenu"

export const BuilderPage = (_props: unknown): JSX.Element => {

    const navigate = useNavigate()

    const startingClassName = useSelector(Selectors.StartingClass.startingClassName)

    useEffect(() => {
        if (isBlank(startingClassName)) {
            navigate("/starting-class")
        }
    }, [startingClassName, navigate])

    return (
        <ErPage pageName="builder" id="er__builder__root" sx={{ width: "90vw" }}>
            <div id="er__builder__body">
                <LevelUpMenu />
                <div id="er__builder__characterStatus">
                    <CharacterStatus />
                </div>
            </div>
        </ErPage>
    )
}
