import { SLIDER_AUDIO } from "@app/data/audio"

import { logger } from "../logging"

/**
 * ## Reference
 *
 * - [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
 */
export const slider = async (): Promise<void> => {
    const audioElement = new Audio(SLIDER_AUDIO)
    try {
        await audioElement.play()
        audioElement?.remove()
    } catch (error) {
        audioElement?.remove()
        logger.info(error)
    } finally {
        audioElement?.remove()
    }
}
