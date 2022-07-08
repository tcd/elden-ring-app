export const range = (start: number, end: number): number[] => {
    return Array.from(
        (function*() {
            while (start <= end) {
                yield start++
            }
        })(),
    )
}
