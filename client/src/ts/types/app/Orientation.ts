/**
 * - https://www.w3.org/TR/screen-orientation/#screen-orientation-types-and-locks
 * - https://www.w3.org/TR/screen-orientation/#ref-for-dom-orientationtype-1
 */
type OrientationType =
    | "portrait-primary"
    | "portrait-secondary"
    | "landscape-primary"
    | "landscape-secondary"

// export type Orientation = "hamburger" | "hotdog" // it's funny. thanks for reading my code.
export type Orientation = "portrait" | "landscape"
