import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { ErPage } from "@app/features/common"
import { ErGrid } from "@app/features/er-grid"
import { EquipmentGrid } from "@app/features/equipment/components/equipment-grid"
import { EquipmentPageDetail } from "@app/features/equipment/components/EquipmentPageDetail"

export const EquipmentPage = (_props: unknown): JSX.Element => {

    const navigate = useNavigate()
    const baseClass = useSelector(Selectors.StartingClass.startingClassName)

    useEffect(() => {
        if (isBlank(baseClass)) {
            navigate("/starting-class")
        }
    }, [baseClass, navigate])

    return (
        <ErPage pageName="equipment">
            <ErGrid
                column1={<EquipmentGrid />}
                column2={<EquipmentPageDetail />}
            />
        </ErPage>
    )
}
