import { MENU_CLICK } from "@app/data/audio"

import { playAudio } from "./play-audio"

export const menuClick = async (): Promise<void> => {
    await playAudio(MENU_CLICK)
}
