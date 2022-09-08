import type { AxiosError } from "axios"

export const isAxiosError = (arg: any): arg is AxiosError => {
    return arg?.isAxiosError === true
}
