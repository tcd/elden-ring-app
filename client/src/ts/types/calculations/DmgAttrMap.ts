import {
    Dmg,
    AttrMap,
} from "@app/types"

export type DmgAttrMap<T> = {
    [key in keyof typeof Dmg]: AttrMap<T>
}
