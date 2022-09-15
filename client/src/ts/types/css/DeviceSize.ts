export const DeviceSizeMap = <const>{
    "mobile":  "mobile",
    "tablet":  "tablet",
    "laptop":  "laptop",
    "desktop": "desktop",
}

export type DeviceSize = typeof DeviceSizeMap[keyof typeof DeviceSizeMap]
