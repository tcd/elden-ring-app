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

// declare module "@mui/material/styles" {
//     interface BreakpointOverrides {
//         xs: true// removes the `xs` breakpoint
//         sm: true
//         md: true
//         lg: true
//         xl: true
//         xxl: true
//         // tablet: true; // adds the `tablet` breakpoint
//         // laptop: true;
//         // desktop: true;
//     }
// }
