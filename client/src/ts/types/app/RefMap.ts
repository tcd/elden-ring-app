import {
    // RefObject,
    // LegacyRef,
    MutableRefObject,
} from "react"

// type RefMap = Record<string, LegacyRef<HTMLDivElement>>
export type RefMap<T = HTMLDivElement> = Record<string, MutableRefObject<T>>
