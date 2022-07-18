import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Tab, Tabs } from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { Page } from "@app/shared"
import { CharacterStatus } from "@app/features/builder"
import { EquipmentGrid } from "@app/features/equipment/components/equipment-grid"
import { EquipmentPageDetail } from "@app/features/equipment/components/EquipmentPageDetail"

export const MobileEquipmentPage = (_props: unknown): JSX.Element => {

    const tab = useSelector(Selectors.Equipment.mobileTab)

    let content: JSX.Element = null

    switch (tab) {
        case "grid":   content = <EquipmentGrid />;       break
        case "detail": content = <EquipmentPageDetail />; break
        case "status": content = <CharacterStatus />;     break
        default:                                          break
    }

    return (
        <Page pageName="equipment">
            {content}
        </Page>
    )
}
