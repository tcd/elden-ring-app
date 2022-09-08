type RecordKey = string | symbol

type Func<Input, Key extends RecordKey, Result> = (input: Input) => [Key, Result]

export const reduceToObject = <
    Input,
    Key extends RecordKey,
    Result
    >(
        array: Input[],
        reducer: Func<Input, Key, Result>,
    ): Record<Key, Result> => {
    return array.reduce((accumulated, current) => {
        const [key, result] = reducer(current)
        accumulated[key] = result
        return accumulated
    }, {} as unknown as Record<Key, Result>)
}
