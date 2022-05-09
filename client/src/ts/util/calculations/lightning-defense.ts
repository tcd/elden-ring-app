/*
Level   1 -  71 -->  40 + 60*((Lvl+79 -   1) / 149)
Level  72 -  91 --> 100 + 20*((Lvl+79 - 150) / 20)
Level  92 - 161 --> 120 + 15*((Lvl+79 - 170) / 70)
Level 162 - 713 --> 135 + 20*((Lvl+79 - 240) / 552)
*/

/** Calculate lightning defense for levels 1 - 71. */
const formula_1 = (level: number): number => (40  + 60 * ((level + 79 -   1) / 149))
/** Calculate lightning defense for levels 72 - 91. */
const formula_2 = (level: number): number => (100 + 20 * ((level + 79 - 150) / 20))
/** Calculate lightning defense for levels 92 - 161. */
const formula_3 = (level: number): number => (120 + 15 * ((level + 79 - 170) / 70))
/** Calculate lightning defense for levels 162 - 713. */
const formula_4 = (level: number): number => (135 + 20 * ((level + 79 - 240) / 552))
/**
 * Based on formulas on the [Fextralife Wiki](https://eldenring.wiki.fextralife.com/Lightning+Defense)
 * @param level B
 * @returns
 */
export const lightningDefenseForRuneLevel = (level: number): number => {
    if (level <=  71) { return formula_1(level) }
    if (level <=  91) { return formula_2(level) }
    if (level <= 161) { return formula_3(level) }
    if (level <= 713) { return formula_4(level) }
    return null
}

