import { logger } from "../logging"

/**
 * ## Reference
 *
 * - [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
 */
export const playAudio = async (src: string): Promise<void> => {
    const audioElement = new Audio(src)
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
