import {
    AttrMap,
    DmgMap,
    AttrDmgMap,
    DmgAttrMap,
} from "elden-ring-calculator"

export const buildAttrMap = <T>(defaultValue: T, values: Partial<AttrMap<T>> = {}): AttrMap<T> => {
    return {
        ...{
            strength:     defaultValue,
            dexterity:    defaultValue,
            intelligence: defaultValue,
            faith:        defaultValue,
            arcane:       defaultValue,
        },
        ...values,
    }
}

export const buildDmgMap = <T>(defaultValue: T, values: Partial<DmgMap<T>> = {}): DmgMap<T> => {
    return {
        ...{
            physical:  defaultValue,
            magic:     defaultValue,
            fire:      defaultValue,
            lightning: defaultValue,
            holy:      defaultValue,
        },
        ...values,
    }
}

export const buildAttrDmgMap = <T>(defaultValue: T, values: Partial<AttrMap<Partial<DmgMap<T>>>> = {}): AttrDmgMap<T> => {
    return {
        strength:     buildDmgMap(defaultValue, values?.strength     ?? {}),
        dexterity:    buildDmgMap(defaultValue, values?.dexterity    ?? {}),
        intelligence: buildDmgMap(defaultValue, values?.intelligence ?? {}),
        faith:        buildDmgMap(defaultValue, values?.faith        ?? {}),
        arcane:       buildDmgMap(defaultValue, values?.arcane       ?? {}),
    }
}

export const buildDmgAttrMap = <T>(defaultValue: T, values: Partial<DmgMap<Partial<AttrMap<T>>>> = {}): DmgAttrMap<T> => {
    return {
        physical:  buildAttrMap(defaultValue, values?.physical  ?? {}),
        magic:     buildAttrMap(defaultValue, values?.magic     ?? {}),
        fire:      buildAttrMap(defaultValue, values?.fire      ?? {}),
        lightning: buildAttrMap(defaultValue, values?.lightning ?? {}),
        holy:      buildAttrMap(defaultValue, values?.holy      ?? {}),
    }
}
