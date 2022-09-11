import { isBlank } from "@app/util"

// export type Orientation = "hamburger" | "hotdog" // it's funny. thanks for reading my code.
type Orientation = "portrait" | "landscape"

type DeviceSize = "mobile" | "tablet" | "laptop" | "desktop"

/**
 * ## Reference
 *
 * - [Screen API](https://developer.mozilla.org/en-US/docs/Web/API/Screen)
 * - [ScreenOrientation API](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation)
 */
export abstract class ScreenSize {

    public static get onMobile(): boolean {
        return this.width <= 700
    }

    public static get width(): Integer {
        return window.innerWidth
    }

    public static get height(): Integer {
        return window.innerHeight
    }

    public static get orientation(): Orientation {
        const screenOrientation = screen.orientation
        if (!isBlank(screenOrientation)) {
            return screenOrientation.type.startsWith("landscape") ? "landscape" : "portrait"
        }
        return (this.width > this.height) ? "landscape" : "portrait"
    }

    public static get deviceSize(): DeviceSize {
        const width = this.width
        if (width <=  500) { return "mobile"  }
        if (width <   990) { return "tablet"  }
        if (width <  1400) { return "laptop"  }
        if (width >  1400) { return "desktop" }
        throw "Unable to determine device size"
    }
}
