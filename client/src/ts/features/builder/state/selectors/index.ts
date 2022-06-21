export * from "./select-builder-state"

import * as Talismans from "./talismans"
import * as Armor from "./armor"

import * as Stats from "./stats"
import * as Attributes from "./attributes"
import * as Resistance from "./resistance"
import * as Defense from "./defense"
import * as EquipLoad from "./equip-load"
import * as StartingClass from "./starting-class"

import * as Misc from "./misc"

import * as Api from "./api"
import { selectExportData } from "./export-data"

export const BuilderSelectors = {
    exportData: selectExportData,
    api: {
        loading:               Api.selectFetchingEverything,
        shouldFetchEverything: Api.selectShouldFetchEverything,
        armor:                 Api.selectArmor,
        spells:                Api.selectSpells,
        talismans:             Api.selectTalismans,
        weapons:               Api.selectWeapons,
        weaponTypes:           Api.selectWeaponTypes,
        weaponSkills:          Api.selectWeaponSkills,
        adjustmentParams:      Api.selectAttackElementCorrectParams,
    },
    misc: {
        whichCharacterStatus: Misc.selectWhichCharacterStatus,
        currentMenu: Misc.selectCurrentMenu,
    },
    startingClassName: StartingClass.selectStartingClassName,
    startingClass: StartingClass.selectStartingClass,
    level: Stats.selectLevel,
    runesToNextLevel: Stats.selectRunesForNextLevel,
    attribute: {
        vigor:        Attributes.selectVigor,
        mind:         Attributes.selectMind,
        endurance:    Attributes.selectEndurance,
        strength:     Attributes.selectStrength,
        dexterity:    Attributes.selectDexterity,
        intelligence: Attributes.selectIntelligence,
        faith:        Attributes.selectFaith,
        arcane:       Attributes.selectArcane,
    },
    resistance: {
        immunity:   Resistance.selectImmunity,
        robustness: Resistance.selectRobustness,
        focus:      Resistance.selectFocus,
        vitality:   Resistance.selectVitality,
    },
    /** Returns all talismans. */
    talismans: Talismans.selectTalismansArray,
    /**
     * Can't wear two of the same talisman.
     * Some talismans restrict the use of others.
     *
     * This returns talismans available to equip in the active talisman slot.
     */
    talismanOptions: Talismans.selectTalismanOptions,
    talismanModalOpen: Talismans.selectTalismanModalOpen,
    defense: {
        defense: {
            physical:  Defense.selectPhysicalDefense,
            magic:     Defense.selectMagicDefense,
            fire:      Defense.selectFireDefense,
            lightning: Defense.selectLightningDefense,
            holy:      Defense.selectHolyDefense,
        },
        negation: {
            physical:  Defense.selectPhysicalNegation,
            strike:    Defense.selectStrikeNegation,
            slash:     Defense.selectSlashNegation,
            pierce:    Defense.selectPierceNegation,
            magic:     Defense.selectMagicNegation,
            fire:      Defense.selectFireNegation,
            lightning: Defense.selectLightningNegation,
            holy:      Defense.selectHolyNegation,
        },
    },
    stat: {
        hp:               Stats.selectHp,
        fp:               Stats.selectFp,
        stamina:          Stats.selectStamina,
        maxEquipLoad:     EquipLoad.selectMaxEquipLoad,
        currentEquipLoad: EquipLoad.selectCurrentEquipLoad,
        poise:            Stats.selectPoise,
        discovery:        Stats.selectDiscovery,
    },
    equipLoad: {
        max:         EquipLoad.selectMaxEquipLoad,
        current:     EquipLoad.selectCurrentEquipLoad,
        percentage:  EquipLoad.selectEquipLoadPercentage,
        description: EquipLoad.selectEquipLoadDescription,
    },
    talisman: {
        all: Talismans.selectTalismansArray,
        options: Talismans.selectTalismanOptions,
        modalOpen: Talismans.selectTalismanModalOpen,
        activeName: Talismans.selectActiveTalismanName,
        activeNumber: Talismans.selectActiveTalismanNumber,
    },
    armor: {
        modalOpen: Armor.selectArmorModalOpen,
        activeType: Armor.selectActiveArmorType,
        activeName: Armor.selectActiveArmorName,
        activeOptions: Armor.selectArmorOptions,
        head: Armor.selectHead,
        chest: Armor.selectChest,
        arms: Armor.selectArms,
        legs: Armor.selectLegs,
        names: {
            head: Armor.selectHeadName,
            chest: Armor.selectChestName,
            arms: Armor.selectArmsName,
            legs: Armor.selectLegsName,
        },
    },
}
