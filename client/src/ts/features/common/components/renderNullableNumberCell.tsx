import { isBlank } from "@app/util"

export const renderNullableNumberCell = (number: number): JSX.Element => {
    if (isBlank(number) || number === 0) {
        return null
    }
    return (
        <span>{number}</span>
    )
}
