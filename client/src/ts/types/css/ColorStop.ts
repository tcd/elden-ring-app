export interface ColorStop {
    percentage: Integer | `${number}%` | `${number}.${number}%`
    /**
     * Inclusive value between `1.00` and `0.00`
     */
    transparency: Decimal
    /** optional */
    color?: string
}
