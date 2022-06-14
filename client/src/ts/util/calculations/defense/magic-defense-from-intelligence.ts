// Level 1 - 20
const formula_1 = (level: Integer): Decimal => ( 0 + 40 * ((level -  0) / 20))
// Level 11 - 35
const formula_2 = (level: Integer): Decimal => (40 + 10 * ((level - 20) / 15))
// Level 36 - 60
const formula_3 = (level: Integer): Decimal => (50 + 10 * ((level - 35) / 25))
// Level 61 - 99
const formula_4 = (level: Integer): Decimal => (60 + 10 * ((level - 60) / 39))

/**
 * Based on formulas from the [Fextralife Wiki](https://eldenring.wiki.fextralife.com/Magic+Defense)
 * @param intLevel Intelligence Level
 */
export const magicDefenseFromIntelligence = (intLevel: Integer): Decimal => {
    if (intLevel <= 20) { return formula_1(intLevel) }
    if (intLevel <= 35) { return formula_2(intLevel) }
    if (intLevel <= 60) { return formula_3(intLevel) }
    if (intLevel <= 99) { return formula_4(intLevel) }
    return null
}
