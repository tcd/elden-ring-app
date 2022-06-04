import { Stat } from "@app/types"

const SHARED_BODY_DESCRIPTION_1 = "The higher the number, the lower your susceptibility."
const SHARED_BODY_DESCRIPTION_2 = "Governed by your attributes as well as defensive gear and any additional effects."
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

/**
 * *Maybe* Line Break.
 *
 * Text breaks lines here in the game,
 * I feel like breaking in the app would
 * make it feel more immersive.
 *
 * Haven't decided yet.
 */
const mlb = "\n"

export const DESCRIPTIONS = {
    LEVEL_UP_SCREEN: {
        // =========================================================================
        // Level
        // =========================================================================
        [Stat.LEVEL]:        `A cumulative figure that represents overall${mlb}attribute strength.\nYou can level up using runes.`,
        [Stat.RUNES_NEEDED]: "Number of runes required to raise a level.\nWhen you level up, you can choose an attribute to increase.",
        // =========================================================================
        // Attributes
        // =========================================================================
        [Stat.VIGOR]:        `Attribute governing HP.\nAlso affects fire resistance${mlb}and immunity.`,
        [Stat.MIND]:         "Attribute that determines FP.\nAlso affects focus.",
        [Stat.ENDURANCE]:    `Attribute governing stamina.\nAlso affects robustness.\nThis attribute also determines how${mlb}heavy your equipment can be.`,
        [Stat.STRENGTH]:     `Attribute required to wield heavy armaments.\nAlso boosts attack power of strength-scaling${mlb}armaments and affects your physical defense.`,
        [Stat.DEXTERITY]:    `Attribute required to wield advanced armaments.\nAlso boosts attack power of dexterity-scaling${mlb}armaments, reduces casting time of spells,${mlb}softens fall damage, and makes it harder to${mlb}be knocked off your horse.`,
        [Stat.INTELLIGENCE]: `Attribute required to perform glintstone${mlb}sorceries. Also boosts magic power of${mlb}intelligence-scaling sorceries and improves${mlb}magic resistance.`,
        [Stat.FAITH]:        `Attribute required to perform sacred${mlb}incantations. Also boosts magic power${mlb}of faith-scaling incantations.`,
        [Stat.ARCANE]:       `Attribute governing discovery.\nAlso affects holy defense, vitality,${mlb}and certain sorceries and incantations.`,
        // =========================================================================
        // Base Stats
        // =========================================================================
        [Stat.HP]:             `Your life. If reduced to nothing, you die.\nReplenish it by drinking from the Flask of${mlb}Crimson Tears or resting at a site of grace.`,
        [Stat.FP]:             `Energy consumed to use spells and skills.\nReplenish it by drinking from the Flask of${mlb}Cerulean Tears or resting at a site of grace.`,
        [Stat.STAMINA]:        `Required for various actions.\nDepletes when certain actions are taken,${mlb}but recovers automatically.`,
        [Stat.MAX_EQUIP_LOAD]: `Max weight of equippable armaments and${mlb}armor. Movement slows as load increases.${mlb}The rightmost number is the maximum${mlb}weight that can be equipped; exceed it${mlb}and movement slows dramatically.`,
        [Stat.POISE]:          `The degree to which you can resist${mlb}collapsing under enemy attacks.`,
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
    EQUIPMENT_SCREEN: {
        'overview': {
            'Armament Category': `Armament category.\nArmaments belonging to the same${mlb}category exhibit similar properties.`,
            'damage type(s)': `The types of physical damage dealt${mlb}by this armament. Other than standard${mlb}physical damage, striking, slashing,${mlb}and piercing damage can also be dealt.`,
            'skill': "The names of skills you can use.\nUsing most skills consumes FP.",
            "FP Cost": `The amount of FP required to${mlb}perform this skill.`,
            "Weight": "Weight of this equipment.",
        },
        "Attack Power": {
            "Physical":  "Physical attack power",
            "Magic":     "Magic attack power",
            "Fire":      "Fire attack power",
            "Lightning": "Lightning attack power",
            "Holy":      "Holy attack power",
            "Critical":  `The strength of critical hits,${mlb}which can be performed on enemies${mlb}you have got behind or stance-broken.`,
        },
        "Attribute Scaling": {
            "Str": `The degree to which this armament's${mlb}attacks scale with strength`,
            "Int": `The degree to which this armament's${mlb}attacks scale with intelligence`,
            "Arc": `The degree to which this armament's${mlb}attacks scale with arcane`,
            "Dex": `The degree to which this armament's${mlb}attacks scale with dexterity`,
            "Fai": `The degree to which this armament's${mlb}attacks scale with faith`,
        },
        "Attributes Required": {
            "Str": `Strength required to master this armament.\nWithout sufficient strength, this${mlb}armament's damage is greatly reduced.`,
            "Int": `Intelligence required to master this armament.\nWithout sufficient intelligence, this${mlb}armament's damage is greatly reduced.`,
            "ARC": `Arcane required to master this armament.\nWithout sufficient arcane, this${mlb}armament's damage is greatly reduced.`,
            "Dex": `Dexterity required to master this armament.\nWithout sufficient dexterity, this${mlb}armament's damage is greatly reduced.`,
            "Fai": `Faith required to master this armament.\nWithout sufficient faith, this${mlb}armament's damage is greatly reduced.`,
        },
        "Guarded Damage Negation": {
            "Physical":    `The degree to which physical damage${mlb}is negated while guarding`,
            "Magic":       `The degree to which magic damage${mlb}is negated while guarding`,
            "Fire":        `The degree to which fire damage${mlb}is negated while guarding`,
            "Lightning":   `The degree to which lightning damage${mlb}is negated while guarding`,
            "Holy":        `The degree to which holy damage${mlb}is negated while guarding`,
            "Guard Boost": `The stability of character's defense.\nThe higher this value, the smaller${mlb}the amount of stamina consumed${mlb}when guarding attacks.`,
        },
        "Character Status": {
            "Discovery": `Governs the likelihood of finding items${mlb}on the corpses of defeated foes.`,
            "Memory Slots": `The number of slots available for${mlb}memorizing sorceries and incantations.`,
        },
    },
}
