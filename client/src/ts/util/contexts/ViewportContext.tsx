import {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
} from "react"

import type { DeviceSize, Orientation } from "@app/types"
import { ThemeVars } from "@app/theme"

import { ScreenSize } from "../web/ScreenSize"
import { isBlank } from "../helpers/is-blank"

export interface IViewportContext {
    width: number
    height: number
    orientation: Orientation
    onMobile: boolean
    deviceSize: DeviceSize
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
    onMobile: (window.innerWidth < ThemeVars.gridBreakpoints.lg),
    deviceSize: ScreenSize.deviceSize,
})

export const ViewportProvider = ({ children }) => {

    const [width, setWidth]             = useState<number>(window.innerWidth)
    const [height, setHeight]           = useState<number>(window.innerHeight)
    const [orientation, setOrientation] = useState<Orientation>(null)
    const [onMobile, setOnMobile]       = useState<boolean>(window.innerWidth < ThemeVars.gridBreakpoints.lg)
    const [deviceSize, setDeviceSize]   = useState<DeviceSize>(ScreenSize.deviceSize)

    const getOrientation = useCallback((): Orientation => {
        const screenOrientation = screen.orientation
        if (!isBlank(screenOrientation)) {
            return screenOrientation.type.startsWith("landscape") ? "landscape" : "portrait"
        }
        return (width > height) ? "landscape" : "portrait"
    }, [width, height])

    const getOnMobile = useCallback((): boolean => {
        return (window.innerWidth < ThemeVars.gridBreakpoints.lg)
    }, [])

    const getDeviceSize = useCallback((): DeviceSize => {
        if (width >= ThemeVars.gridBreakpoints.xl) { return "desktop" }
        if (width >= ThemeVars.gridBreakpoints.lg) { return "laptop"  }
        if (width >= ThemeVars.gridBreakpoints.md) { return "tablet"  }
        return "mobile"
    }, [width])

    const handleWindowResize = useCallback(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        setOrientation(getOrientation)
        setOnMobile(getOnMobile())
        setDeviceSize(getDeviceSize())
    }, [
        setOnMobile,
        setWidth,
        setHeight,
        setOrientation,
        getOnMobile,
        setDeviceSize,
        getDeviceSize,
        getOrientation,
    ])

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
            deviceSize,
        }}>
            {children}
        </viewportContext.Provider>
    )
}

export const useViewport = (): IViewportContext => {
    const context = useContext(viewportContext)
    // logger.debug(context)
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
