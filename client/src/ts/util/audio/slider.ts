import { SLIDER_AUDIO } from "@app/data/audio"

/**
 * ## Reference
 *
 * - [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
 */
export const slider = async () => {
    const audioElement = new Audio(SLIDER_AUDIO)
    await audioElement.play()
    audioElement.remove()
}
