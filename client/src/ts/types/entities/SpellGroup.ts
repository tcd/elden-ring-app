import { BaseEntity, SpellType } from "@app/types"

export interface SpellGroup extends BaseEntity {
    name: string
    spell_type: SpellType
}
