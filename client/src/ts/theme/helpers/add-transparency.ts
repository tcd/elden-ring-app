import Color from "color"

export const addTransparency = (color: Color, alpha: Decimal): Color => {
    const [r, g, b] = color.rgb().array()
    const result = Color({ r, g, b }).alpha(alpha)
    return result
}

export const rgba = addTransparency
