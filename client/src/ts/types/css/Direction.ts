const Directions = <const>{
    "to top":            "0deg",
    "to top right":     "45deg",
    "to right":         "90deg",
    "to bottom right": "135deg",
    "to bottom":       "180deg",
    "to left":         "270deg",
    "to bottom left":  "225deg",
    "to top left":     "315deg",
}
type DirectionsKey = keyof typeof Directions
type DirectionsValue = typeof Directions[DirectionsKey]
export type Direction = DirectionsKey | DirectionsValue
