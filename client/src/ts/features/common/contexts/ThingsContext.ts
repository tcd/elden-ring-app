import { createContext } from "react"

export interface IThingsContext {
    anything: string
}

const thingsContext = createContext<IThingsContext | null>(null)
thingsContext.displayName = "ThingsContext"

export const ThingsProvider = thingsContext.Provider
export const ThingsContext = thingsContext
