export const spellImageFileName = (name: string): string => {
    return name.replaceAll(":", "_")
}
