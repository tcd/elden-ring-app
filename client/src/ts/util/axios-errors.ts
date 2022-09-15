import type { AxiosError } from "axios"

export const isAxiosError = (arg: any): arg is AxiosError => {
    return arg?.isAxiosError === true
}

export interface ToJSONResult {
    code?: string
    description?: string
    message?: string
    name?: string
    stack?: string
    fileName?: string
    lineNumber?: string
    columnNumber?: string
    status?: number
    config?: {
        transitional?: {
            silentJSONParsing?: boolean
            forcedJSONParsing?: boolean
            clarifyTimeoutError?: boolean
        }
        transformRequest?: any[]
        transformResponse?: any[]
        timeout?: number
        xsrfCookieName?: string
        xsrfHeaderName?: string
        maxContentLength?: number
        maxBodyLength?: number
        headers?: Record<string, any>
        method?: "post" | "get"
        url?: string
        params?: Record<string, any>
        /** stringified JSON */
        data?: string
    }
}

export interface SerializedAxiosError<TResponse = any> {
    isSerializedAxiosError: true
    message?: string
    stack?: string
    status?: number
    code?: string
    responseData?: TResponse
}

export const serializeAxiosError = <TResponse = any>(error: AxiosError): SerializedAxiosError<TResponse> => {
    if (!isAxiosError(error)) { return null }
    const errorJson: ToJSONResult = error.toJSON()
    return {
        isSerializedAxiosError: true,
        message: errorJson?.message,
        stack: errorJson?.stack,
        status: errorJson?.status,
        code: errorJson?.code,
        responseData: error?.response?.data,
    }
}

export const isAxiosSerializedError = <TResponse = any>(arg: any): arg is SerializedAxiosError<TResponse> => {
    return arg?.isSerializedAxiosError === true
}
