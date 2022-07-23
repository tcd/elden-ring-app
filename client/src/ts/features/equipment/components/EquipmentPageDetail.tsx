import { useSelector } from "react-redux"

import { EquipmentType } from "@app/types"
import { Selectors } from "@app/state"
import { ArmorDetail } from "@app/features/armor/components"
import { TalismanDetail } from "@app/features/talismans/components"
import { WeaponDetail } from "@app/features/weapons/components"
import { AmmunitionDetail } from "@app/features/ammunition/components"
import { QuickItemDetail } from "@app/features/quick-items/components"

const DETAILS_BY_TYPE: Record<EquipmentType, JSX.Element> = {
    "Ammunition": <AmmunitionDetail />,
    "Armor": <ArmorDetail />,
    "Talisman": <TalismanDetail />,
    "Weapon": <WeaponDetail />,
    "QuickItem": <QuickItemDetail />,
}

export const EquipmentPageDetail = (_props: unknown): JSX.Element => {

    const activeType = useSelector(Selectors.Equipment.activeType)

    const detailComponent = DETAILS_BY_TYPE[activeType]

    return (
        <div id="er__equipmentPageDetail">
            {detailComponent}
        </div>
    )
}
