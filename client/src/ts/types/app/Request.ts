export type RequestStatus = "idle" | "pending" | "fulfilled" | "rejected"

export interface RequestState<T> {
    status: RequestStatus
    response?: T
}
