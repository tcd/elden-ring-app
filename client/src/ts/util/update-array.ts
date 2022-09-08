type IdentifierFunction<T> = (element: T) => boolean
type ChangerFunction<T>    = (element: T) => T

interface UpdateArrayOptions<T> {
    array: T[]
    finder: IdentifierFunction<T>
    changer: ChangerFunction<Partial<T>>
}

/**
 * Create a copy of an `array` with one or more elements (identified by `finderFunc`) altered by `changerFunc`.
 *
 * @param array the array to update.
 * @param finderFunc function that determines which element or elements to update.
 * @param changerFunc function that updates a given element.
 * @returns an updated copy of `array`.
 */
export const updateArray = <T>({ array, finder, changer }: UpdateArrayOptions<T>): T[] => {
    const newArray: T[] = array.map(element => {
        if (finder(element)) {
            return {
                ...element,
                ...changer(element),
            }
        } else {
            return element
        }
    })
    return newArray
}
