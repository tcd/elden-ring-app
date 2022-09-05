import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { isBlank, useHash } from "@app/util"
import { Selectors } from "@app/state"
import { ErPage } from "@app/features/common"
import { CharacterStatus } from "@app/features/character-status"

import { EquipmentSlots } from "../equipment-slots"
import { EquipmentPageDetail } from "../EquipmentPageDetail"

export const MobileEquipmentPage = (_props: unknown): JSX.Element => {

    const hash = useHash()
    const navigate = useNavigate()
    const baseClass = useSelector(Selectors.StartingClass.startingClassName)

    useEffect(() => {
        if (isBlank(baseClass)) {
            navigate("/starting-class")
        }
        if (hash === "") {
            navigate("#grid", { replace: true })
        }
    }, [baseClass, navigate, hash])

    let content: JSX.Element = null

    switch (hash) {
        case "grid":   content = <EquipmentSlots />;       break
        case "detail": content = <EquipmentPageDetail />; break
        case "status": content = <CharacterStatus />;     break
        default:       content = <EquipmentSlots />;       break
    }

    return (
        <ErPage pageName="equipment">
            {content}
        </ErPage>
    )
}
