// https://github.com/rosebox/rosebox/blob/6e8489faceb845bfad0d182988bb7041cfccc75e/packages/core/src/core/shared/types/gradient.ts
export type AtLeastOneRequired<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]
