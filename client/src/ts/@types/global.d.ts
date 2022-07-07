export declare global {
    export type Integer = number
    export type Decimal = number

    export interface Window {
        [key: string]: any
        // /** A place for storing window properties that need need to be disabled and re-enabled */
        // jail: { [key: string]: any }
    }
}
