import * as Stats from "./stats"
import * as Attributes from "./attributes"
import * as Resistance from "./resistance"
import * as Defense from "./defense"
import * as EquipLoad from "./equip-load"
import * as StartingClass from "./starting-class"
import * as Level from "./level"

import * as Misc from "./misc"

import * as Api from "./api"
import { selectExportData } from "./export-data"

export const BuilderSelectors = {
    exportData: selectExportData,
    api: {
        loading:               Api.selectFetchingEverything,
        shouldFetchEverything: Api.selectShouldFetchEverything,
        fetchFailed:           Api.selectFetchFailed,
        fetchSuccessful:       Api.selectFetchSuccessful,
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
    startingClass: {
        startingClassName:       StartingClass.selectStartingClassName,
        startingClass:           StartingClass.selectStartingClass,
        confirmingStartingClass: StartingClass.selectConfirmingStartingClass,
    },
    level: Level.selectCorrectedLevel,
    runesToNextLevel: Stats.selectRunesForNextLevel,
    allAttributes: Attributes.selectAttributes,
    attribute: {
        vigor:        Level.selectCorrectedVigor,
        mind:         Level.selectCorrectedMind,
        endurance:    Level.selectCorrectedEndurance,
        strength:     Level.selectCorrectedStrength,
        dexterity:    Level.selectCorrectedDexterity,
        intelligence: Level.selectCorrectedIntelligence,
        faith:        Level.selectCorrectedFaith,
        arcane:       Level.selectCorrectedArcane,
    },
    resistance: {
        immunity:   Resistance.selectImmunity,
        robustness: Resistance.selectRobustness,
        focus:      Resistance.selectFocus,
        vitality:   Resistance.selectVitality,
    },
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
}
