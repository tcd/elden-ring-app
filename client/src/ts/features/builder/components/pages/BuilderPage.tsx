import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import {
    ErPage,
    CharacterStatus,
    Attributes,
    Overview,
} from "@app/features"

import { EquipmentSlots } from "../equipment-slots"

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
                <div id="variable-menu">
                    <div className="builder-column">
                        <Overview />
                        <Attributes />
                    </div>
                    <div className="builder-column">
                        <EquipmentSlots />
                    </div>
                </div>
                <div id="er__builder__characterStatus">
                    <CharacterStatus />
                </div>
            </div>
        </ErPage>
    )
}
