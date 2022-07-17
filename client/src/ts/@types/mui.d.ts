declare module "@mui/system" {
    // interface Theme {
    // //   status: {
    // //     danger: string;
    // //   };
    // }
    // // allow configuration using `createTheme`
    // interface ThemeOptions {
    // //   status?: {
    // //     danger?: string;
    // //   };
    // }
    interface BreakpointOverrides {
        xs: true// removes the `xs` breakpoint
        sm: true
        md: true
        lg: true
        xl: true
        xxl: true
        // tablet: true; // adds the `tablet` breakpoint
        // laptop: true;
        // desktop: true;
    }
}

declare module "@mui/material/styles" {
    // interface Theme {
    // //   status: {
    // //     danger: string;
    // //   };
    // }
    // // allow configuration using `createTheme`
    // interface ThemeOptions {
    // //   status?: {
    // //     danger?: string;
    // //   };
    // }
    interface BreakpointOverrides {
        xs: true// removes the `xs` breakpoint
        sm: true
        md: true
        lg: true
        xl: true
        xxl: true
        // tablet: true; // adds the `tablet` breakpoint
        // laptop: true;
        // desktop: true;
    }
}
