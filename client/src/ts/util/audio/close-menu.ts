import { CLOSE_MENU } from "@app/data/audio"

import { playAudio } from "./play-audio"

export const closeMenu = async (): Promise<void> => {
    await playAudio(CLOSE_MENU)
}
