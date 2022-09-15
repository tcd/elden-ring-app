import { SLIDER } from "@app/data/audio"

import { playAudio } from "./play-audio"

export const slider = async (): Promise<void> => {
    await playAudio(SLIDER)
}
