
export interface AttributeChecklist {
    strength:     boolean
    dexterity:    boolean
    intelligence: boolean
    faith:        boolean
    arcane:       boolean
}

export interface DamageTypeChecklist {
    physical:  boolean
    magic:     boolean
    fire:      boolean
    lightning: boolean
    holy:      boolean
}

export interface AttributeDamageTypeChecklist {
    strength:     AttributeChecklist
    dexterity:    AttributeChecklist
    intelligence: AttributeChecklist
    faith:        AttributeChecklist
    arcane:       AttributeChecklist
}

export interface DamageTypeAttributeChecklist {
    physical:  AttributeChecklist
    magic:     AttributeChecklist
    fire:      AttributeChecklist
    lightning: AttributeChecklist
    holy:      AttributeChecklist
}
