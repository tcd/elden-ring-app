// Level 1 - 30
const formula_1 = (level: number): number => (     10 *  (level       / 30))
// Level 31 - 40
const formula_2 = (level: number): number => (10 +  5 * ((level - 30) / 10))
// Level 41 - 60
const formula_3 = (level: number): number => (15 + 15 * ((level - 40) / 20))
// Level 61 - 99
const formula_4 = (level: number): number => (30 + 10 * ((level - 60) / 39))

/**
 * Based on formulas from the [Fextralife Wiki](https://eldenring.wiki.fextralife.com/Physical+Defense)
 * @param strLevel Strength Level
 */
export const physicalDefenseFromStrength = (strLevel: number): number => {
    if (strLevel <= 30) { return formula_1(strLevel) }
    if (strLevel <= 40) { return formula_2(strLevel) }
    if (strLevel <= 60) { return formula_3(strLevel) }
    if (strLevel <= 99) { return formula_4(strLevel) }
    return null
}
