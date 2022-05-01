import { Stat } from "@app/types"

export const DESCRIPTIONS = {
    "HP":             { "basedOn": [ "Vigor" ],     "description": "Your life. If reduced to nothing, you die." },
    "FP":             { "basedOn": [ "Mind" ],      "description": "Energy consumed to use spells and skills." },
    "Stamina":        { "basedOn": [ "Endurance" ], "description": "Required for various actions. \nDepletes when certain actions are taken, \nbut recovers automatically." },
    "Max Equip Load": { "basedOn": [ "Endurance" ], "description": "Max weight of equippable armaments and armor. \nMovement slows as load increases.\n Exceed this number and movement slows dramitically" },
    "Poise":          { "basedOn": [ "Armor" ],     "description": "The degree to which you can resist collapsing under enemy attacks." },
    "Discovery":      { "basedOn": [ "Arcane" ],    "description": "Governs likelihood of finding items on the corpses of defeated foes." },

    [Stat.IMMUNITY]:   { "basedOn": [], "description": "Your resistance to various poisons and rot. The higher the number, the lower your susceptibility. Governed by your attributes, as well as defensive gear and any additional effects." },
    [Stat.ROBUSTNESS]: { "basedOn": [], "description": "Your resistance to blood loss and frostbite." },
    [Stat.FOCUS]:      { "basedOn": ["Mind"], "description": "Your resistance to sleep and bouts of madness." },
    [Stat.VITALITY]:   { "basedOn": [], "description": "Your resistance to death. The higher the number, the lower your susceptibility to instant death." },
}
