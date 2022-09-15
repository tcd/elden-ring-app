export const sum = (numbers: number[]): number => {
    if (!((numbers?.length ?? 0) > 0)) {
        return 0
    }
    return numbers.reduce((total, current) => total + current, 0)
}
