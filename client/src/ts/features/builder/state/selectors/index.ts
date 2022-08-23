import * as Api from "./api"
import * as Misc from "./misc"

export const BuilderSelectors = {
    mobileTab: Misc.selectMobileTab,
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
}
