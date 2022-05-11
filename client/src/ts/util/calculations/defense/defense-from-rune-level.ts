// Level 1 - 71
const formula_1 = (level: number): number => ( 40 + 60 * ((level + 79 -   1) / 149))
// Level 72 - 91
const formula_2 = (level: number): number => (100 + 20 * ((level + 79 - 150) /  20))
// Level 92 - 161
const formula_3 = (level: number): number => (120 + 15 * ((level + 79 - 170) /  70))
// Level 162 - 713
const formula_4 = (level: number): number => (135 + 20 * ((level + 79 - 240) / 552))

/**
 * Based on formulas from the [Fextralife Wiki](https://eldenring.wiki.fextralife.com/Physical+Defense)
 * @param runeLevel Character Rune Level
 */
export const defenseFromRuneLevel = (runeLevel: number): number => {
    if (runeLevel <=  71) { return formula_1(runeLevel) }
    if (runeLevel <=  91) { return formula_2(runeLevel) }
    if (runeLevel <= 161) { return formula_3(runeLevel) }
    if (runeLevel <= 713) { return formula_4(runeLevel) }
    return null
}

