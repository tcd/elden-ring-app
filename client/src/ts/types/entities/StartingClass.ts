import { StartingClassName } from "@app/constants"

export interface StartingClass {

    id: Integer

    name: StartingClassName
    description: string

    level:        Integer
    total_levels: Integer

    vigor:        Integer
    mind:         Integer
    endurance:    Integer
    strength:     Integer
    dexterity:    Integer
    intelligence: Integer
    faith:        Integer
    arcane:       Integer

    R1?: string
    R2?: string
    L1?: string
    L2?: string

    Head?:  string
    Chest?: string
    Arms?:  string
    Legs?:  string

    Spell1?: string
    Spell2?: string
}
