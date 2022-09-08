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

// =============================================================================
// Object to Object
// =============================================================================

// @ts-ignore: next-line
type TRecord<K = any, V = any> = { [key: K]: V }

type OFunc<
    InputKey,
    InputValue,
    Key,
    Result,
> = (key: InputKey, value: InputValue) => [Key, Result]

export const reduceObjectToObject = <
    InputValue,
    InputKey extends keyof T,
    Key,
    Result = any,
    T = TRecord<InputKey, InputValue>,
    >(
        input: T,
        reducer: OFunc<InputKey, InputValue, Key, Result>,
    ): TRecord<Key, Result> =>
{
    const entries = Object.entries(input) as [InputKey, InputValue][]
    return entries.reduce((accumulated, [currentKey, currentValue]) => {
        const [key, result] = reducer(currentKey, currentValue)
        // @ts-ignore: next-line
        accumulated[key] = result
        return accumulated
    }, {} as unknown as TRecord<Key, Result>)
}
