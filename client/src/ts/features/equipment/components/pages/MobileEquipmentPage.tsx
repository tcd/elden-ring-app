import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { isBlank } from "@app/util"
import { Selectors } from "@app/state"
import { ErPage, useHash } from "@app/shared"
import { CharacterStatus } from "@app/features/character-status"
import { EquipmentGrid } from "@app/features/equipment/components/equipment-grid"
import { EquipmentPageDetail } from "@app/features/equipment/components/EquipmentPageDetail"

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
        case "grid":   content = <EquipmentGrid />;       break
        case "detail": content = <EquipmentPageDetail />; break
        case "status": content = <CharacterStatus />;     break
        default:       content = <EquipmentGrid />;       break
    }

    return (
        <ErPage pageName="equipment">
            {content}
        </ErPage>
    )
}
