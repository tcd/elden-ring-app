import { Attributes, Overview } from "@app/features/level-up"

import { EquipmentSlots } from "./equipment-slots"

export const LevelUpMenu = (_props: unknown): JSX.Element => {
    return (
        <div id="variable-menu">
            <div className="builder-column">
                <Overview />
                <Attributes />
            </div>
            <div className="builder-column">
                <EquipmentSlots />
            </div>
        </div>
    )
}
