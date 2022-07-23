import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { isBlank } from "@app/util"
import { Selectors } from "@app/state"
import { Page } from "@app/shared"
import { CharacterStatus } from "@app/features/builder"
import { Overview } from "./Overview"
import { Attributes } from "./Attributes"

export const LevelUpPage = (_props: unknown): JSX.Element => {

    const navigate = useNavigate()

    const baseClass = useSelector(Selectors.StartingClass.startingClassName)

    useEffect(() => {
        if (isBlank(baseClass)) {
            navigate("/starting-class")
        }
    }, [baseClass, navigate])

    return (
        <Page pageName="level-up" className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <Overview />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Attributes />
                        </div>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col">
                    <CharacterStatus />
                </div>
            </div>
        </Page>
    )
}
