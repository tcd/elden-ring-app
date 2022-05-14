declare module "custom-bootstrap" {

    export interface GrayColorVariables {
        white:    string
        gray_100: string
        gray_200: string
        gray_300: string
        gray_400: string
        gray_500: string
        gray_600: string
        gray_700: string
        gray_800: string
        gray_900: string
        black:    string
    }

    export interface ColorVariables {
        blue:       string
        indigo:     string
        purple:     string
        pink:       string
        red:        string
        orange:     string
        yellow:     string
        green:      string
        teal:       string
        cyan:       string
        black:      string
        white:      string
        gray:       string
        gray_dark:  string
        gray_light: string
    }

    export interface ThemeColorVariables {
        primary:   string
        secondary: string
        success:   string
        info:      string
        warning:   string
        danger:    string
        light:     string
        dark:      string
    }

    /**
     * Grid breakpoints
     *
     * Define the minimum dimensions at which your layout will change,
     * adapting to different screen sizes, for use in media queries.
     */
    export interface GridBreakpoints {
        xs:    0
        sm:   576
        md:   768
        lg:   992
        xl:  1200
        xxl: 1400
    }

    /**
     * Z-index master list
     *
     * Warning: Avoid customizing these values.
     * They're used for a bird's eye view of components dependent
     * on the z-axis and are designed to all work together.
     */
    export interface ZIndexMasterList {
        "$zindex-dropdown":           1_000
        "$zindex-sticky":             1_020
        "$zindex-fixed":              1_030
        "$zindex-offcanvas-backdrop": 1_040
        "$zindex-offcanvas":          1_045
        "$zindex-modal-backdrop":     1_050
        "$zindex-modal":              1_055
        "$zindex-popover":            1_070
        "$zindex-tooltip":            1_080
        "$zindex-toast":              1_090
    }
}
