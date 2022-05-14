import {
    ArmorSet,
    Attributes,
    StartingClassName,
    TalismanSet,
    WeaponSet,
} from "@types"

export interface BuildData {
    startingClassName: StartingClassName
    attributes: Attributes
    armor_names: ArmorSet
    talisman_names: TalismanSet
    weapon_names: WeaponSet
}
