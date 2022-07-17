import {
    createContext,
    useState,
    useEffect,
    useContext,
} from "react"

export interface IViewportContext {
    width: number
    height: number
    onMobile: boolean
}

// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
const viewportContext = createContext<IViewportContext>({ width: 0, height: 0, onMobile: false })

export const ViewportProvider = ({ children }) => {
    // This is the exact same logic that we previously had in our hook

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [onMobile, setOnMobile] = useState(false)

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        setOnMobile((window.innerWidth < 700))
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    // Now we are dealing with a context instead of a Hook, so instead
    // of returning the width and height we store the values in the
    // value of the Provider
    return (
        <viewportContext.Provider value={{ width, height, onMobile }}>
            {children}
        </viewportContext.Provider>
    )
}

// Rewrite the "useViewport" hook to pull the width and height values
// out of the context instead of calculating them itself
export const useViewport = (): IViewportContext => {
    // We can use the "useContext" Hook to access a context from within
    // another Hook, remember, Hooks are composable!
    const { width, height, onMobile } = useContext(viewportContext)
    return { width, height, onMobile }
}
