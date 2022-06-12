import {
    Attr,
    DmgMap,
} from "@app/types"

export type AttrDmgMap<T> = {
    [key in keyof typeof Attr]: DmgMap<T>
}
