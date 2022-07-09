export declare global {

    // eslint-disable-next-line @typescript-eslint/ban-types
    export type Integer = number & {}
    // eslint-disable-next-line @typescript-eslint/ban-types
    export type Decimal = number & {}

    export interface Window {
        [key: string]: any
        // /** A place for storing window properties that need need to be disabled and re-enabled */
        // jail: { [key: string]: any }
    }
}
