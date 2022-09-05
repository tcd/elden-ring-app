import { MENU_CLICK } from "@app/data/audio"

import { logger } from "../logging"

/**
 * ## Reference
 *
 * - [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
 */
export const menuClick = async (): Promise<void> => {
    const audioElement = new Audio(MENU_CLICK)
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
