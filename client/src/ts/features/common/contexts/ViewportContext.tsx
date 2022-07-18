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
const viewportContext = createContext<IViewportContext>({ width: 0, height: 0, onMobile: (window.innerWidth < 700) })

export const ViewportProvider = ({ children }) => {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [onMobile, setOnMobile] = useState(window.innerWidth < 700)

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        setOnMobile((window.innerWidth < 700))
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    return (
        <viewportContext.Provider value={{ width, height, onMobile }}>
            {children}
        </viewportContext.Provider>
    )
}

export const useViewport = (): IViewportContext => {
    const { width, height, onMobile } = useContext(viewportContext)
    return { width, height, onMobile }
}
