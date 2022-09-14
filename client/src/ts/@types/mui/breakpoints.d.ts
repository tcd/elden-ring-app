// -----------------------------------------------------------------------------
// Attempt #1
// -----------------------------------------------------------------------------

// export declare module "@mui/system" {
//     interface BreakpointOverrides {
//         xs: true
//         sm: true
//         md: true
//         lg: true
//         xl: true
//         phone: true;
//         tablet: true;
//         laptop: true;
//         desktop: true;
//     }
// }

// -----------------------------------------------------------------------------
// Attempt #2
// -----------------------------------------------------------------------------

// https://mui.com/material-ui/customization/breakpoints/#custom-breakpoints
export declare module "@mui/material/styles" {
    export interface BreakpointOverrides {
        zero: true
        mobile: true
        tablet: true
        laptop: true
        desktop: true
        tv: true
    }
}
