import {
    mdiBoxCutter,
    mdiSword,
    mdiFencing,
    mdiShield,
    mdiAxe,
    mdiMace,
    mdiMagicStaff,
    mdiAxeBattle,
    mdiAutoFix,
    mdiCrossCeltic,
    mdiAnvil,
    mdiMushroom,
    mdiOneUp,
    mdiPistol,
    mdiPulse,
    mdiSickle,
    mdiTshirtCrew,
} from "@mdi/js"

import {
    WeaponTypePlural,
} from "@app/types"

export type IWeaponTypeIcon = {
    [key in WeaponTypePlural]: string
}

export const WeaponTypeIcons: IWeaponTypeIcon = {
    [WeaponTypePlural.AXES]: "",
    [WeaponTypePlural.BALLISTAE]: "",
    [WeaponTypePlural.BOWS]: "",
    [WeaponTypePlural.CLAWS]: "",
    [WeaponTypePlural.COLOSSAL_SWORDS]: "",
    [WeaponTypePlural.COLOSSAL_WEAPONS]: "",
    [WeaponTypePlural.CROSSBOWS]: "",
    [WeaponTypePlural.CURVED_GREATSWORDS]: "",
    [WeaponTypePlural.CURVED_SWORDS]: "",
    [WeaponTypePlural.DAGGERS]: "",
    [WeaponTypePlural.FISTS]: "",
    [WeaponTypePlural.FLAILS]: "",
    [WeaponTypePlural.GLINTSTONE_STAVES]: "",
    [WeaponTypePlural.GREAT_HAMMERS]: "",
    [WeaponTypePlural.GREAT_SPEARS]: "",
    [WeaponTypePlural.GREATAXES]: "",
    [WeaponTypePlural.GREATBOWS]: "",
    [WeaponTypePlural.GREATSWORDS]: "",
    [WeaponTypePlural.HALBERDS]: "",
    [WeaponTypePlural.HAMMERS]: "",
    [WeaponTypePlural.HEAVY_THRUSTING_SWORDS]: "",
    [WeaponTypePlural.KATANAS]: "",
    [WeaponTypePlural.LIGHT_BOWS]: "",
    [WeaponTypePlural.REAPERS]: "",
    [WeaponTypePlural.SPEARS]: "",
    [WeaponTypePlural.STRAIGHT_SWORDS]: "",
    [WeaponTypePlural.THRUSTING_SWORDS]: "",
    [WeaponTypePlural.TORCHES]: "",
    [WeaponTypePlural.TWINBLADES]: "",
    [WeaponTypePlural.WARHAMMERS]: "",
    [WeaponTypePlural.WHIPS]: "",
}
