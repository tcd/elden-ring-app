import { Breakpoint, Length } from "."

export type Breakpoints = Record<Breakpoint, Length>

export interface ITheme {
    breakpoints: Breakpoint
}
