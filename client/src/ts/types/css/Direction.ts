const LinearDirections = <const>{
    "to top":            "0deg",
    "to top right":     "45deg",
    "to right":         "90deg",
    "to bottom right": "135deg",
    "to bottom":       "180deg",
    "to left":         "270deg",
    "to bottom left":  "225deg",
    "to top left":     "315deg",
}
type LinearDirectionsKey = keyof typeof LinearDirections
type LinearDirectionsValue = typeof LinearDirections[LinearDirectionsKey]
export type LinearDirection = LinearDirectionsKey | LinearDirectionsValue
