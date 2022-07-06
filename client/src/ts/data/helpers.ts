import { STARTING_CLASSES } from "./starting-classes"

export const startingClassByName = (name: string) => {
    return STARTING_CLASSES.find(x => x.name == name) ?? null
}
