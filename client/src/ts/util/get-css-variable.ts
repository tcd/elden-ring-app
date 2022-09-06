export const getCssVariable = (name: string): string => {
    return getComputedStyle(document.documentElement).getPropertyValue(name)?.trim() ?? ""
}
