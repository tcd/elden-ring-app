import { MENU_CLICK } from "@app/data/audio"

/**
 * ## Reference
 *
 * - [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
 */
export const menuClick = async () => {
    const audioElement = new Audio(MENU_CLICK)
    await audioElement.play()
    audioElement.remove()
}
