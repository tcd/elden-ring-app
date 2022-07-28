import mp3 from "../../../assets/audio/slider.mp3"

/**
 * ## Reference
 *
 * - [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
 */
export const slider = async () => {
    const audioElement = new Audio(mp3)
    await audioElement.play()
    audioElement.remove()
}
