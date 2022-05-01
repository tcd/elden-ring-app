export enum AttributeName {
    vigor = "vigor",
    mind = "mind",
    endurance = "endurance",
    strength = "strength",
    dexterity = "dexterity",
    intelligence = "intelligence",
    faith = "faith",
    arcane = "arcane",
}

export const AttributeNames = Object.keys(AttributeName)

export interface Attributes {
    [AttributeName.vigor]: number
    [AttributeName.mind]: number
    [AttributeName.endurance]: number
    [AttributeName.strength]: number
    [AttributeName.dexterity]: number
    [AttributeName.intelligence]: number
    [AttributeName.faith]: number
    [AttributeName.arcane]: number
}
