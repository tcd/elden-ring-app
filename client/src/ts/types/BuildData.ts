import { StartingClassName } from "@app/constants"
import {
    ArmorSet,
    Attributes,
    TalismanSet,
    WeaponSlots,
} from "@app/types"

export interface BuildData {
    startingClassName: StartingClassName
    attributes: Attributes
    armorNames: ArmorSet
    talismanNames: TalismanSet
    weaponNames: WeaponSlots
}
