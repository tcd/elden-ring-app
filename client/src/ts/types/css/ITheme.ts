import type { Breakpoint } from "./Breakpoint"
import type { Length } from "./Length"

export type Breakpoints = Record<Breakpoint, Length>

export interface ITheme {
    breakpoints: Breakpoint
}
