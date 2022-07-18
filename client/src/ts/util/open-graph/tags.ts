export const OpenGraphProperties = {
    "og:title":            "og:title",
    "og:type":             "og:type",
    "og:url":              "og:url",
    "og:image":            "og:image",
    "og:description":      "og:description",
    "og:locale":           "og:locale",
    "og:audio":            "og:audio",
    "og:determiner":       "og:determiner",
    "og:locale:alternate": "og:locale:alternate",
    "og:video":            "og:video",
    "og:site_name":        "og:site_name",
    "profile:first_name":  "profile:first_name",
    "profile:last_name":   "profile:last_name",
    "profile:username":    "profile:username",
    "profile:gender":      "profile:gender",
} as const

type OpenGraphPropertiesKey = keyof typeof OpenGraphProperties
type OpenGraphProperty = typeof OpenGraphProperties[OpenGraphPropertiesKey]


// input:
//
// ^(\S+) - (.+)$
//
// output:
//
// /** $2 */
// "$1": "$1",
