import { SLIDER_AUDIO } from "@app/data/audio"

import { playAudio } from "./play-audio"

export const slider = async (): Promise<void> => {
    await playAudio(SLIDER_AUDIO)
}
