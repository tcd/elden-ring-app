/**
 * Any Stat that can be affected by an `Equipment Effect`.
 * These effects can come from Spells, Talismans, & passive effects on Armor or Weapons.
 *
 * It is important to note that these are stats that can currently be included in calculations.
 */
export enum AffectableStat {

    // -------------------------------------------------------------------------
    // Level
    // -------------------------------------------------------------------------

    LEVEL = "Level",

    // -------------------------------------------------------------------------
    // Attributes
    // -------------------------------------------------------------------------

    /**
     * Attribute governing HP.
     * Also affects fire resistance and immunity.
     */
    VIGOR = "Vigor",
    /**
     * Attribute that determines FP.
     * Also affects focus.
     */
    MIND = "Mind",
    /**
     * Attribute governing stamina.
     * Also affects robustness.
     * This attribute also determines how heavy your equipment can be.
     */
    ENDURANCE = "Endurance",
    /**
     * Attribute required to wield heavy armaments.
     * Also boosts attack power of strength-scaling armaments and affects your physical defense.
     */
    STRENGTH = "Strength",
    /**
     * Attribute required to wield advanced armaments.
     * Also boosts attack power of dexterity-scaling armaments, reduces casting time of spells, softens fall damage, and makes it harder to be knocked off your horse.
     */
    DEXTERITY = "Dexterity",
    /**
     * Attribute required to perform glintstone sorceries.
     * Also boosts magic power of intelligence-scaling sorceries and improves magic resistance.
     */
    INTELLIGENCE = "Intelligence",
    /**
     * Attribute required to perform sacred incantations.
     * Also boosts magic power of faith-scaling incantations.
     */
    FAITH = "Faith",
    /**
     * Attribute governing discovery.
     * Also affects holy defense, vitality, and certain sorceries and incantations.
     */
    ARCANE = "Arcane",

    // -------------------------------------------------------------------------
    // Base Stats
    // -------------------------------------------------------------------------

    HP             = "HP",
    FP             = "FP",
    STAMINA        = "Stamina",
    MAX_EQUIP_LOAD = "Max Equip Load",
    POISE          = "Poise",
    DISCOVERY      = "Discovery",

    // -------------------------------------------------------------------------
    // Resistance
    // -------------------------------------------------------------------------

    /**
     * Your resistance to various poisons and rot.
     */
    IMMUNITY = "Immunity",
    /**
     * Your resistance to blood loss and frostbite.
     */
    ROBUSTNESS = "Robustness",
    /**
     * Your resistance to sleep and bouts of madness.
     */
    FOCUS = "Focus",
    /**
     * Your resistance to death.
     */
    VITALITY = "Vitality",

    // -------------------------------------------------------------------------
    // Defense/Dmg Negation
    // -------------------------------------------------------------------------

    PHYSICAL_DEFENSE          = "Physical Defense",
    PHYSICAL_DAMAGE_NEGATION  = "Physical Damage Negation",

    VS_STRIKE_DEFENSE         = "VS Strike Defense",
    VS_STRIKE_DAMAGE_NEGATION = "VS Strike Damage Negation",

    VS_SLASH_DEFENSE          = "VS Slash Defense",
    VS_SLASH_DAMAGE_NEGATION  = "VS Slash Damage Negation",

    VS_PIERCE_DEFENSE         = "VS Pierce Defense",
    VS_PIERCE_DAMAGE_NEGATION = "VS Pierce Damage Negation",

    MAGIC_DEFENSE             = "Magic Defense",
    MAGIC_DAMAGE_NEGATION     = "Magic Damage Negation",

    FIRE_DEFENSE              = "Fire Defense",
    FIRE_DAMAGE_NEGATION      = "Fire Damage Negation",

    LIGHTNING_DEFENSE         = "Lightning Defense",
    LIGHTNING_DAMAGE_NEGATION = "Lightning Damage Negation",

    HOLY_DEFENSE              = "Holy Defense",
    HOLY_DAMAGE_NEGATION      = "Holy Damage Negation",

    /**
     * The stability of character's defense.
     *
     * The higher this value, the smaller the amount of stamina consumed when guarding attacks.
     */
    GUARD_BOOST = "Guard Boost",

    // -------------------------------------------------------------------------
    // Attack Power / Attack Rating (AR)
    // -------------------------------------------------------------------------

    PHYSICAL_ATTACK_POWER  = "Physical Attack Power",
    STRIKE_ATTACK_POWER    = "Strike Attack Power",
    SLASH_ATTACK_POWER     = "Slash Attack Power",
    PIERCE_ATTACK_POWER    = "Pierce Attack Power",
    MAGIC_ATTACK_POWER     = "Magic Attack Power",
    FIRE_ATTACK_POWER      = "Fire Attack Power",
    LIGHTNING_ATTACK_POWER = "Lightning Attack Power",
    HOLY_ATTACK_POWER      = "Holy Attack Power",
}
