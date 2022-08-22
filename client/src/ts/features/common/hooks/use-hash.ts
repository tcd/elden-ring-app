import { useLocation } from "react-router-dom"

export const useHash = () => {
    const location = useLocation()
    if (location?.hash) {
        return location.hash.replace("#", "")
    }
    return null
}
