import { useLocation } from "react-router-dom"

export const useHash = (): string => {
    const location = useLocation()
    if (location?.hash) {
        return location.hash.replace("#", "")
    }
    return ""
}
