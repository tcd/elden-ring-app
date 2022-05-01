/**
 * Used to manually block async code. Must use with `await`
 *
 * Thanks [David Weldon](https://stackoverflow.com/a/13448477/7687024)
 *
 * @param {number} ms - milliseconds to block
 *
 * @example
 * // block for 5 seconds
 * await sleep(5_000)
 */
export const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}