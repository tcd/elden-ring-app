// Level 1 - 30
const formula_1 = (level: number) => (     20 *  (level       / 30))
// Level 31 - 40
const formula_2 = (level: number) => (20 + 20 * ((level - 30) / 10))
// Level 41 - 60
const formula_3 = (level: number) => (40 + 20 * ((level - 40) / 20))
// Level 61 - 99
const formula_4 = (level: number) => (60 + 10 * ((level - 60) / 39))

/**
 * Based on formulas from the [Fextralife Wiki](https://eldenring.wiki.fextralife.com/Fire+Defense)
 * @param vigLevel Vigor Level
 */
export const fireDefenseFromVigor = (vigLevel: number) => {
    if (vigLevel <= 30) { return formula_1(vigLevel) }
    if (vigLevel <= 40) { return formula_2(vigLevel) }
    if (vigLevel <= 60) { return formula_3(vigLevel) }
    if (vigLevel <= 99) { return formula_4(vigLevel) }
    return null
}
