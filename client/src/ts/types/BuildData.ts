import {
    ArmorSet,
    Attributes,
    StartingClassName,
    TalismanSet,
} from "@types"

export interface BuildData {
    startingClassName: StartingClassName
    attributes: Attributes
    armor_names: ArmorSet
    talisman_names: TalismanSet
    weapon_names: any
}
