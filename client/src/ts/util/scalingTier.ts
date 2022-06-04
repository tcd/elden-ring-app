export const scalingTier = (decimal: number): string => {
    if (decimal > 1.75) { return "S" }
    if (decimal > 1.40) { return "A" }
    if (decimal > 0.90) { return "B" }
    if (decimal > 0.60) { return "C" }
    if (decimal > 0.25) { return "D" }
    if (decimal > 0.00) { return "E" }
    return ""
}
