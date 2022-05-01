import * as Weapons from "./weapons"
import * as Talismans from "./talismans"
import * as Armor from "./armor"

import * as Stats from "./stats"
import * as Attributes from "./attributes"
import * as Resistance from "./resistence"
import * as Defense from "./defense"
import * as EquipLoad from "./equip-load"

import * as Api from "./api"

export const BuilderSelectors = {
    api: {
        loading: Api.selectFetchingEverything,
        shouldFetchEverything: Api.selectShouldFetchEverything,
        armor: Api.selectArmor,
        spells: Api.selectSpells,
        talismans: Api.selectTalismans,
        weapons: Api.selectWeapons,
        weaponTypes: Api.selectWeaponTypes,
        weaponSkills: Api.selectWeaponSkills,
    },
    startingClassName: Stats.selectStartingClassName,
    level: Stats.selectLevel,
    runesToNextLevel: Stats.selectRunesForNextLevel,
    stats: Stats.selectStats,
    attributes: Attributes.selectAttributes,
    resistance: Resistance.selectResistance,
    talismans: Talismans.selectTalismansArray,
    talismanOptions: Talismans.selectTalismanOptions,
    talismanModalOpen: Talismans.selectTalismanModalOpen,
    defense: {
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
    weapons: {
        modalOpen: Weapons.selectWeaponModalOpen,
        activeSlotId: Weapons.selectActiveWeaponSlotId,
        active: Weapons.selectActiveWeapon,
        bySlot: {
            R1: Weapons.selectRightWeapon1,
            R2: Weapons.selectRightWeapon2,
            R3: Weapons.selectRightWeapon3,
            L1: Weapons.selectLeftWeapon1,
            L2: Weapons.selectLeftWeapon2,
            L3: Weapons.selectLeftWeapon3,
        },
    },
    armor: {
        modalOpen: Armor.selectArmorModalOpen,
        activeType: Armor.selectActiveArmorType,
        activeName: Armor.selectActiveArmorName,
        activbeOptions: Armor.selectArmorOptions,
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
    // attribute: {
    //     vigor:        selectVigor,
    //     mind:         selectMind,
    //     endurance:    selectEndurance,
    //     strength:     selectStrength,
    //     dexterity:    selectDexterity,
    //     intelligence: selectIntelligence,
    //     faith:        selectFaith,
    //     arcane:       selectArcane,
    // },
}
