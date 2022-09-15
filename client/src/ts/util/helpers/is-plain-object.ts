import _isPlainObject from "lodash/isPlainObject"

export const isPlainObject = <T extends object>(arg: any): arg is T => {
    return _isPlainObject(arg)
}
