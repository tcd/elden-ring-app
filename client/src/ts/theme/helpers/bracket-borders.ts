import type { SxProps } from "@mui/material"

/**
 * ## See:
 *
 * - [Stack Overflow - Square brackets with CSS](https://stackoverflow.com/a/41807110/7687024)
 */
export const bracketBorders = (color: string , thickness: string, length: string): SxProps => {
    return {
        backgroundImage: Array(4).fill(`linear-gradient(${color}, ${color})`).join(", "),
        backgroundRepeat: "no-repeat",
        // vertical
        backgroundSize: `${length} ${thickness}`,
        backgroundPosition: ["top left", "top right", "bottom left", "bottom right"].join(", "),
        border: `solid ${color}`,
        borderWidth: `0 ${thickness}`,
    }
}
