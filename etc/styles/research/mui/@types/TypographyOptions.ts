import { FontStyle } from "."

export interface TypographyOptions extends Partial<FontStyle> {
    allVariants?: React.CSSProperties
}
