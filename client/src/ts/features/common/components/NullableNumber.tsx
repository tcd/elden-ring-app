import { isBlank } from "@app/util"

export interface NullableNumberProps {
    number?: number
}

export const NullableNumber = ({ number }: NullableNumberProps): JSX.Element => {
    if (isBlank(number) || number === 0) {
        return null
    }
    return (
        <span>{number}</span>
    )
}
