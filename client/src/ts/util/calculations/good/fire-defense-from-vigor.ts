// Level  1 - 30 -->      20 *  (level       / 30)
// Level 31 - 40 --> 20 + 20 * ((level - 30) / 10)
// Level 41 - 60 --> 40 + 20 * ((level - 40) / 20)
// Level 61 - 99 --> 60 + 10 * ((level - 60) / 39)

// Level 1 - 30
const formula_1 = (level: number) => (     20 *  (level       / 30))
// Level 31 - 40
const formula_2 = (level: number) => (20 + 20 * ((level - 30) / 10))
// Level 41 - 60
const formula_3 = (level: number) => (40 + 20 * ((level - 40) / 20))
// Level 61 - 99
const formula_4 = (level: number) => (60 + 10 * ((level - 60) / 39))


// https://eldenring.wiki.fextralife.com/Fire+Defense
export const fireDefenseFromVigor = (level: number) => {
    if (level <= 30) { return formula_1(level) }
    if (level <= 40) { return formula_2(level) }
    if (level <= 60) { return formula_3(level) }
    if (level <= 99) { return formula_4(level) }
    return null
}
