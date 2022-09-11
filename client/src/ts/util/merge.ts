// eslint-disable-next-line no-restricted-imports
import _merge from "lodash/merge"

/**
 * Wrapper around [`_.merge`](https://lodash.com/docs/4.17.15#merge) that does not mutate objects.
 */
export const merge = <TObject, TSource>(object: TObject, source: TSource): TObject & TSource => {
    return _merge({}, object, source)
}
