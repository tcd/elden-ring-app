import { OPEN_MENU } from "@app/data/audio"

import { playAudio } from "./play-audio"

export const openMenu = async (): Promise<void> => {
    await playAudio(OPEN_MENU)
}
