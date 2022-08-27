export interface ColorStop {
    /**
     * Inclusive value between `0%` and `100%`
     */
    percentage: Integer | `${number}%` | `${number}.${number}%`
    /**
     * Inclusive value between `0.00` and `1.00`
     */
    transparency: Decimal
    /** optional */
    color?: string
}
