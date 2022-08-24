import { getImageSrcManual } from "./get-image-src"

export type LetterKey =
    | "a"
    | "b"
    | "c"
    | "d"
    | "e"
    | "f"
    | "g"
    | "h"
    | "i"
    | "j"
    | "k"
    | "l"
    | "m"
    | "n"
    | "o"
    | "p"
    | "q"
    | "r"
    | "s"
    | "t"
    | "u"
    | "v"
    | "w"
    | "x"
    | "y"
    | "z"

export const isLetterKey = (value: string): value is LetterKey => {
    return !!value.match(/^[a-z]$/)
}

export type ControlKey =
    | "arrow-keys"
    | "backspace"
    | "esc"
    | "left-right-arrows"
    | "minus"
    | "plus"
    | "return"
    | "space"
    | "tab"

export const ControlKeyUrls: Record<ControlKey, string> = {
    "arrow-keys":        getImageSrcManual("keyboard/control/arrow-keys", "public"),
    "backspace":         getImageSrcManual("keyboard/control/backspace", "public"),
    "esc":               getImageSrcManual("keyboard/control/esc", "public"),
    "left-right-arrows": getImageSrcManual("keyboard/control/left-right-arrow", "public"),
    "minus":             getImageSrcManual("keyboard/control/minus", "public"),
    "plus":              getImageSrcManual("keyboard/control/plus", "public"),
    "return":            getImageSrcManual("keyboard/control/return", "public"),
    "space":             getImageSrcManual("keyboard/control/space", "public"),
    "tab":               getImageSrcManual("keyboard/control/tab", "public"),
}

export const LetterKeyUrls: Record<LetterKey, string> = {
    "a": getImageSrcManual("keyboard/letters/a", "public"),
    "b": getImageSrcManual("keyboard/letters/b", "public"),
    "c": getImageSrcManual("keyboard/letters/c", "public"),
    "d": getImageSrcManual("keyboard/letters/d", "public"),
    "e": getImageSrcManual("keyboard/letters/e", "public"),
    "f": getImageSrcManual("keyboard/letters/f", "public"),
    "g": getImageSrcManual("keyboard/letters/g", "public"),
    "h": getImageSrcManual("keyboard/letters/h", "public"),
    "i": getImageSrcManual("keyboard/letters/i", "public"),
    "j": getImageSrcManual("keyboard/letters/j", "public"),
    "k": getImageSrcManual("keyboard/letters/k", "public"),
    "l": getImageSrcManual("keyboard/letters/l", "public"),
    "m": getImageSrcManual("keyboard/letters/m", "public"),
    "n": getImageSrcManual("keyboard/letters/n", "public"),
    "o": getImageSrcManual("keyboard/letters/o", "public"),
    "p": getImageSrcManual("keyboard/letters/p", "public"),
    "q": getImageSrcManual("keyboard/letters/q", "public"),
    "r": getImageSrcManual("keyboard/letters/r", "public"),
    "s": getImageSrcManual("keyboard/letters/s", "public"),
    "t": getImageSrcManual("keyboard/letters/t", "public"),
    "u": getImageSrcManual("keyboard/letters/u", "public"),
    "v": getImageSrcManual("keyboard/letters/v", "public"),
    "w": getImageSrcManual("keyboard/letters/w", "public"),
    "x": getImageSrcManual("keyboard/letters/x", "public"),
    "y": getImageSrcManual("keyboard/letters/y", "public"),
    "z": getImageSrcManual("keyboard/letters/z", "public"),
}
