import isString from "lodash/isString"
// import { isBlank } from "@app/util"

const MERGE_TARGETS = [
    "className",
    "sx",
]

/**
 * Merge (somewhat deeply) default props and passed props for a React component.
 */
export const mergeProps = <Props>(defaultProps: Partial<Props>, passedProps: Props): Props => {
    const merged: Props = {
        ...defaultProps,
        ...passedProps,
    } as Props

    for (const [key, value] of Object.entries(passedProps)) {
        // if (value?.hasOwnProperty("className") && value?.["className"]) {
        if (isString(value?.["className"])) {
            if (isString(defaultProps?.[key]?.["className"])) {
                merged[key]["className"] = [
                    defaultProps[key]["className"],
                    passedProps[key]["className"],
                ].join(" ")
            }
        }
    }

    return merged
}
