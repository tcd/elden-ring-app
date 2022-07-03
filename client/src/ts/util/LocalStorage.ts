export class LocalStorage {

    public static set(key: string, value: any): boolean {
        try {
            if (typeof(value) === "string") {
                localStorage.setItem(key, value)
                return true
            } else {
                localStorage.setItem(key, JSON.stringify(value))
            }
        } catch (error) {
            throw error
        }
    }

    public static get<T = any>(key: string): T | null {
        try {
            const value = localStorage.getItem(key)
            return value as unknown as T
        } catch (error) {
            throw error
        }
    }

}
