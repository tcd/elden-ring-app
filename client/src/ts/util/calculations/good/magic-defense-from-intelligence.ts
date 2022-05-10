// Level  1 - 20 --> 40     *  (level       / 20)
// Level 21 - 35 --> 40 + 10* ((level - 20) / 15)
// Level 36 - 60 --> 50 + 10* ((level - 35) / 25)
// Level 61 - 99 --> 60 + 10* ((level - 60) / 39)

// Level 1 - 20
const formula_1 = (level: number) => (     40 *  (level       / 20))
// Level 11 - 35
const formula_2 = (level: number) => (40 + 10 * ((level - 20) / 15))
// Level 36 - 60
const formula_3 = (level: number) => (50 + 10 * ((level - 35) / 25))
// Level 61 - 99
const formula_4 = (level: number) => (60 + 10 * ((level - 60) / 39))


// https://eldenring.wiki.fextralife.com/Magic+Defense
export const magicDefenseFromIntelligence = (level: number) => {
    if (level <= 20) { return formula_1(level) }
    if (level <= 35) { return formula_2(level) }
    if (level <= 60) { return formula_3(level) }
    if (level <= 99) { return formula_4(level) }
    return null
}
