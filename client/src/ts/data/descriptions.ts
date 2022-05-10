import { Stat } from "@app/types"

const SHARED_BODY_DESCRIPTION_1 = "The higher the number, the lower your susceptibility."
const SHARED_BODY_DESCRIPTION_2 = "Governed by your attributes as well as defensive gear and any additional effects."
// Defense          Attribites
// Damage Negation = Armor + anything else.
/**
 * - Defense:
 *     - Determined by attributes
 * - Damage Negation
 *     - Determined by armor & additional factors.
 */
const DEFENSE_DESCRIPTION = "The former is calculated via attributes, while the latter is calculated via defensive gear and any additional effects."

const ARMOR_STATS = [
    Stat.ARMOR_HEAD,
    Stat.ARMOR_CHEST,
    Stat.ARMOR_ARMS,
    Stat.ARMOR_LEGS,
]

export const DESCRIPTIONS = {
    LEVEL_UP_SCREEN: {
        // =========================================================================
        // Level
        // =========================================================================
        [Stat.LEVEL]:        "A cumulative figure that represents overall attribute strength.\nYou can level up using runes.",
        [Stat.RUNES_NEEDED]: "Number of runes required to raise a level.<br/>When you level up, you can choose an attribute to increase.",
        // =========================================================================
        // Attributes
        // =========================================================================
        [Stat.VIGOR]:        "Attribute governing HP.\nAlso affects fire resistance and immunity.",
        [Stat.MIND]:         "Attribute that determines FP.\nAlso affects focus.",
        [Stat.ENDURANCE]:    "Attribute governing stamina.\nAlso affects robustness.\nThis attribute also determines how heavy your equipment can be.",
        [Stat.STRENGTH]:     "Attribute required to wield heavy armaments.\nAlso boosts attack power of strength-scaling armaments and affects your physical defense.",
        [Stat.DEXTERITY]:    "Attribute required to wield advanced armaments.\nAlso boosts attack power of dexterity-scaling armaments, reduces casting time of spells, softens fall damage, and makes it harder to be knocked off your horse.",
        [Stat.INTELLIGENCE]: "Attribute required to perform glintstone sorceries.\nAlso boosts magic power of intelligence-scaling sorceries and improves magic resistance.",
        [Stat.FAITH]:        "Attribute required to perform sacred incantations.\nAlso boosts magic power of faith-scaling incantations.",
        [Stat.ARCANE]:       "Attribute governing discovery.\nAlso affects holy defense, vitality, and certain sorceries and incantations.",
        // =========================================================================
        // Base Stats
        // =========================================================================
        [Stat.HP]:             "Your life. If reduced to nothing, you die.\nReplenish it by drinking from the Flask of Crimson Tears or resting at a site of grace.",
        [Stat.FP]:             "Energy consumed to use spells and skills.\nReplenish it by drinking from the Flask of Cerulean Tears or resting at a site of grace.",
        [Stat.STAMINA]:        "Required for various actions.\nDepletes when certain actions are taken, \nbut recovers automatically.",
        [Stat.MAX_EQUIP_LOAD]: "Max weight of equippable armaments and armor. \nMovement slows as load increases. \nExceed this number and movement slows dramatically.",
        [Stat.POISE]:          "The degree to which you can resist collapsing under enemy attacks.",
        [Stat.DISCOVERY]:      "Governs likelihood of finding items on the corpses of defeated foes.",
        // =========================================================================
        // Attack Power
        // =========================================================================
        [Stat.WEAPON_R1]: "Attack power of the armament equipped in right hand slot 1",
        [Stat.WEAPON_R2]: "Attack power of the armament equipped in right hand slot 2",
        [Stat.WEAPON_R3]: "Attack power of the armament equipped in right hand slot 3",
        [Stat.WEAPON_L1]: "Attack power of the armament equipped in left hand slot 1",
        [Stat.WEAPON_L2]: "Attack power of the armament equipped in left hand slot 2",
        [Stat.WEAPON_L3]: "Attack power of the armament equipped in left hand slot 3",
        // =========================================================================
        // Defense Power
        // =========================================================================
        [Stat.PHYSICAL_DEFENSE]:  `Your defense power and damage negation against standard physical attacks.\n${DEFENSE_DESCRIPTION}`,
        [Stat.VS_STRIKE_DEFENSE]: `Your defense power and damage negation against striking physical attacks.\n${DEFENSE_DESCRIPTION}`,
        [Stat.VS_SLASH_DEFENSE]:  `Your defense power and damage negation against slashing physical attacks.\n${DEFENSE_DESCRIPTION}`,
        [Stat.VS_PIERCE_DEFENSE]: `Your defense power and damage negation against piercing physical attacks.\n${DEFENSE_DESCRIPTION}`,
        [Stat.MAGIC_DEFENSE]:     `Your defense power and damage negation against magical attacks.\n${DEFENSE_DESCRIPTION}`,
        [Stat.FIRE_DEFENSE]:      `Your defense power and damage negation against fire attacks.\n${DEFENSE_DESCRIPTION}`,
        [Stat.LIGHTNING_DEFENSE]: `Your defense power and damage negation against lightning attacks.\n${DEFENSE_DESCRIPTION}`,
        [Stat.HOLY_DEFENSE]:      `Your defense power and damage negation against holy attacks.\n${DEFENSE_DESCRIPTION}`,
        // =========================================================================
        // Body
        // =========================================================================
        [Stat.IMMUNITY]:   `Your resistance to various poisons and rot.\n${SHARED_BODY_DESCRIPTION_1}\n${SHARED_BODY_DESCRIPTION_2}`,
        [Stat.ROBUSTNESS]: `Your resistance to blood loss and frostbite.\n${SHARED_BODY_DESCRIPTION_1}\n${SHARED_BODY_DESCRIPTION_2}`,
        [Stat.FOCUS]:      `Your resistance to sleep and bouts of madness.\n${SHARED_BODY_DESCRIPTION_1}\n${SHARED_BODY_DESCRIPTION_2}`,
        [Stat.VITALITY]:   `Your resistance to death.\nThe higher the number, the lower your susceptibility to instant death.\n${SHARED_BODY_DESCRIPTION_2}`,
    },
    ARMOR_SELECT_SCREEN: {

    }
}

export const DESCRIPTIONS_PLUS = {
    LEVEL_UP_SCREEN: {
        // =========================================================================
        // Level
        // =========================================================================
        [Stat.LEVEL]:        { "description": "A cumulative figure that represents overall attribute strength.\nYou can level up using runes." },
        [Stat.RUNES_NEEDED]: { "description": "Number of runes required to raise a level.<br/>When you level up, you can choose an attribute to increase." },
        // =========================================================================
        // Attributes
        // =========================================================================
        [Stat.VIGOR]:        { "description": "Attribute governing HP.\nAlso affects fire resistance and immunity." },
        [Stat.MIND]:         { "description": "Attribute that determines FP.\nAlso affects focus." },
        [Stat.ENDURANCE]:    { "description": "Attribute governing stamina.\nAlso affects robustness.\nThis attribute also determines how heavy your equipment can be." },
        [Stat.STRENGTH]:     { "description": "Attribute required to wield heavy armaments.\nAlso boosts attack power of strength-scaling armaments and affects your physical defense." },
        [Stat.DEXTERITY]:    { "description": "Attribute required to wield advanced armaments.\nAlso boosts attack power of dexterity-scaling armaments, reduces casting time of spells, softens fall damage, and makes it harder to be knocked off your horse." },
        [Stat.INTELLIGENCE]: { "description": "Attribute required to perform glintstone sorceries.\nAlso boosts magic power of intelligence-scaling sorceries and improves magic resistance." },
        [Stat.FAITH]:        { "description": "Attribute required to perform sacred incantations.\nAlso boosts magic power of faith-scaling incantations." },
        [Stat.ARCANE]:       { "description": "Attribute governing discovery.\nAlso affects holy defense, vitality, and certain sorceries and incantations." },
        // =========================================================================
        // Base Stats
        // =========================================================================
        [Stat.HP]:             { "basedOn": [ Stat.VIGOR     ], "description": "Your life. If reduced to nothing, you die.\nReplenish it by drinking from the Flask of Crimson Tears or resting at a site of grace." },
        [Stat.FP]:             { "basedOn": [ Stat.MIND      ], "description": "Energy consumed to use spells and skills.\nReplenish it by drinking from the Flask of Cerulean Tears or resting at a site of grace." },
        [Stat.STAMINA]:        { "basedOn": [ Stat.ENDURANCE ], "description": "Required for various actions.\nDepletes when certain actions are taken, \nbut recovers automatically." },
        [Stat.MAX_EQUIP_LOAD]: { "basedOn": [ Stat.ENDURANCE ], "description": "Max weight of equippable armaments and armor. \nMovement slows as load increases. \nExceed this number and movement slows dramatically." },
        [Stat.POISE]:          { "basedOn": [ ...ARMOR_STATS ], "description": "The degree to which you can resist collapsing under enemy attacks." },
        [Stat.DISCOVERY]:      { "basedOn": [ Stat.ARCANE    ], "description": "Governs likelihood of finding items on the corpses of defeated foes." },
        // =========================================================================
        // Attack Power
        // =========================================================================
        [Stat.WEAPON_R1]: { "description": "Attack power of the armament equipped in right hand slot 1" },
        [Stat.WEAPON_R2]: { "description": "Attack power of the armament equipped in right hand slot 2" },
        [Stat.WEAPON_R3]: { "description": "Attack power of the armament equipped in right hand slot 3" },
        [Stat.WEAPON_L1]: { "description": "Attack power of the armament equipped in left hand slot 1" },
        [Stat.WEAPON_L2]: { "description": "Attack power of the armament equipped in left hand slot 2" },
        [Stat.WEAPON_L3]: { "description": "Attack power of the armament equipped in left hand slot 3" },
        // =========================================================================
        // Defense Power
        // =========================================================================
        [Stat.PHYSICAL_DEFENSE]:  { "basedOn": [ Stat.STRENGTH ], "description": `Your defense power and damage negation against standard physical attacks.\n${DEFENSE_DESCRIPTION}` },
        [Stat.VS_STRIKE_DEFENSE]: { "basedOn": [], "description": `Your defense power and damage negation against striking physical attacks.\n${DEFENSE_DESCRIPTION}` },
        [Stat.VS_SLASH_DEFENSE]:  { "basedOn": [], "description": `Your defense power and damage negation against slashing physical attacks.\n${DEFENSE_DESCRIPTION}` },
        [Stat.VS_PIERCE_DEFENSE]: { "basedOn": [], "description": `Your defense power and damage negation against piercing physical attacks.\n${DEFENSE_DESCRIPTION}` },
        [Stat.MAGIC_DEFENSE]:     { "basedOn": [ Stat.INTELLIGENCE ], "description": `Your defense power and damage negation against magical attacks.\n${DEFENSE_DESCRIPTION}` },
        [Stat.FIRE_DEFENSE]:      { "basedOn": [ Stat.VIGOR ], "description": `Your defense power and damage negation against fire attacks.\n${DEFENSE_DESCRIPTION}` },
        [Stat.LIGHTNING_DEFENSE]: { "basedOn": [], "description": `Your defense power and damage negation against lightning attacks.\n${DEFENSE_DESCRIPTION}` },
        [Stat.HOLY_DEFENSE]:      { "basedOn": [ Stat.ARCANE ], "description": `Your defense power and damage negation against holy attacks.\n${DEFENSE_DESCRIPTION}` },
        // =========================================================================
        // Body
        // =========================================================================
        [Stat.IMMUNITY]:   { "basedOn": [ Stat.VIGOR     ], "description": `Your resistance to various poisons and rot.\n${SHARED_BODY_DESCRIPTION_1}\n${SHARED_BODY_DESCRIPTION_2}` },
        [Stat.ROBUSTNESS]: { "basedOn": [ Stat.ENDURANCE ], "description": `Your resistance to blood loss and frostbite.\n${SHARED_BODY_DESCRIPTION_1}\n${SHARED_BODY_DESCRIPTION_2}` },
        [Stat.FOCUS]:      { "basedOn": [ Stat.MIND      ], "description": `Your resistance to sleep and bouts of madness.\n${SHARED_BODY_DESCRIPTION_1}\n${SHARED_BODY_DESCRIPTION_2}` },
        [Stat.VITALITY]:   { "basedOn": [ Stat.ARCANE    ], "description": `Your resistance to death.\nThe higher the number, the lower your susceptibility to instant death.\n${SHARED_BODY_DESCRIPTION_2}` },
    },
    ARMOR_SELECT_SCREEN: {

    }
}
