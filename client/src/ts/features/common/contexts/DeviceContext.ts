import { createContext, useContext } from "react"

import { ILogger } from "@app/types"

const loggingContext = createContext<ILogger | null>(null)
loggingContext.displayName = "LoggingContext"

export const LoggingProvider = loggingContext.Provider
export const LoggingContext  = loggingContext

export const useLogging = () => {
    const  log = useContext(LoggingContext)
    return log
}
