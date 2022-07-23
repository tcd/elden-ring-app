import {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
    useRef,
} from "react"

import { isBlank, logger } from "@app/util"

export type Orientation = "portrait" | "landscape"

export interface IViewportContext {
    width: number
    height: number
    orientation: Orientation
    onMobile: boolean
}

// const getOrientation = (width: number, height: number) => {
//     // type OrientationLockType = "any" | "landscape" | "landscape-primary" | "landscape-secondary" | "natural" | "portrait" | "portrait-primary" | "portrait-secondary";
//     // type OrientationType = "landscape-primary" | "landscape-secondary" | "portrait-primary" | "portrait-secondary";
//     const screenOrientation = screen.orientation
//     if (!isBlank(screenOrientation)) {
//         return screenOrientation.type.startsWith("landscape") ? "landscape" : "portrait"
//     }
//     return (width > height) ? "landscape" : "portrait"
// }

/**
 * @see [Developing responsive layouts with React Hooks](https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/)
 * @see [Screen.orientation](https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation)
 */
const viewportContext = createContext<IViewportContext>({
    width: 0,
    height: 0,
    orientation: null,
    onMobile: (window.innerWidth < 700),
})

export const ViewportProvider = ({ children }) => {

    const [width, setWidth]             = useState<number>(window.innerWidth)
    const [height, setHeight]           = useState<number>(window.innerHeight)
    const [orientation, setOrientation] = useState<Orientation>(null)
    const [onMobile, setOnMobile]       = useState<boolean>(window.innerWidth < 700)

    const getOrientation = (): Orientation => {
        // const screenOrientation = screen.orientation
        return null
    }

    const getOnMobile = useCallback((): boolean => {
        return (window.innerWidth < 700)
    }, [])

    const handleWindowResize = useCallback(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        setOrientation(getOrientation)
        setOnMobile(getOnMobile())
    }, [setOnMobile, setHeight, setOrientation, setWidth, getOnMobile])

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [handleWindowResize])

    return (
        <viewportContext.Provider value={{
            width,
            height,
            orientation,
            onMobile,
        }}>
            {children}
        </viewportContext.Provider>
    )
}

export const useViewport = (): IViewportContext => {
    const context = useContext(viewportContext)
    logger.debug(context)
    return context
    // const {
    //     width,
    //     height,
    //     orientation,
    //     onMobile,
    // } = useContext(viewportContext)
    // return {
    //     width,
    //     height,
    //     orientation,
    //     onMobile,
    // }
}
