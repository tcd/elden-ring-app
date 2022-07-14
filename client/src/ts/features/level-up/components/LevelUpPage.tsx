import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { CharacterStatus } from "@app/features/builder"
import { Overview } from "./Overview"
import { Attributes } from "./Attributes"

export const LevelUpPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.Core.setPageName("level-up"))
        return () => {
            dispatch(Actions.Core.clearPageName())
        }
    }, [dispatch])

    return (
        <main id="er__levelUpPage__root" className="container-fluid">
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
        </main>
    )
}
