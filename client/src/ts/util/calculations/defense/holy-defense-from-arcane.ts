// Level 1 - 20
const formula_1 = (level: number) => (     40 *  (level       / 20))
// Level 21 - 35
const formula_2 = (level: number) => (40 + 10 * ((level - 20) / 15))
// Level 36 - 60
const formula_3 = (level: number) => (50 + 10 * ((level - 35) / 25))
// Level 61 - 99
const formula_4 = (level: number) => (60 + 10 * ((level - 60) / 39))

/**
 * Based on formulas from the [Fextralife Wiki](https://eldenring.wiki.fextralife.com/Holy+Defense)
 * @param arcLevel Arcane Level
 */
export const holyDefenseFromArcane = (arcLevel: number) => {
    if (arcLevel <= 20) { return formula_1(arcLevel) }
    if (arcLevel <= 35) { return formula_2(arcLevel) }
    if (arcLevel <= 60) { return formula_3(arcLevel) }
    if (arcLevel <= 99) { return formula_4(arcLevel) }
    return null
}
