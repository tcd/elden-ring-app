import {
    StandardLonghandPropertiesHyphen,
    Property,
} from "csstype"

type Duration = `${number}s` | `${number}.${number}s`

export interface ICssTransition {
    /**
     * `transition-property`
     *
     * Specifies the name of the CSS property to which the transition is applied.
     */
    property?: "all" | keyof StandardLonghandPropertiesHyphen
    /**
     * `transition-duration`
     *
     * Specifies how long the transition from the old value to the new value should take.
     */
    duration?: number | Duration
    /**
     * `transition-timing-function`
     *
     * easing-function
     */
    timing?: Property.TransitionTimingFunction
    /**
     * `transition-delay`
     *
     * Defines when the transition will start.
     */
    delay?: number | Duration
}

const defaults: ICssTransition = {
    property: "all",
    duration: "0s",
    timing: "ease",
    delay: "0s",
}

/**
 * ## See
 *
 * - [Animatable CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)
 * - [MDN - Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
 * - [Spec](https://drafts.csswg.org/css-transitions/)
 * - [w3schools](https://www.w3schools.com/css/css3_transitions.asp)
 * - [Easing Functions Cheat Sheet](https://easings.net/)
 *
 *
 * ```css
 * div {
 *   transition: <property> <duration> <timing-function> <delay>;
 * }
 * ```
 */
export const transition = (options: ICssTransition = {}): string => {
    const {
        property,
        duration,
        timing,
        delay,
    } = { ...defaults, ...options }
    return [property, duration, timing, delay].join(" ")
}
