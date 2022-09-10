// export declare module "@mui/system" {
//     // interface Theme {
//     // //   status: {
//     // //     danger: string;
//     // //   };
//     // }
//     // // allow configuration using `createTheme`
//     // interface ThemeOptions {
//     // //   status?: {
//     // //     danger?: string;
//     // //   };
//     // }
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

// declare module "@mui/material/styles" {
//     // interface Theme {
//     // //   status: {
//     // //     danger: string;
//     // //   };
//     // }
//     // // allow configuration using `createTheme`
//     // interface ThemeOptions {
//     // //   status?: {
//     // //     danger?: string;
//     // //   };
//     // }
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

// =============================================================================
// Typography
// =============================================================================

// Update the Typography's variant prop options
export declare module "@mui/material/Typography" {
    export interface TypographyPropsVariantOverrides {
        // add new
        pageName: true
        body: true

        // remove old
        // h1: false
        // h2: false
        // h3: false
        // h4: false
        // h5: false
        // h6: false
        subtitle1: false
        subtitle2: false
        body1: false
        body2: false
        caption: false
        button: false
        overline: false
    }
}

// =============================================================================
// Buttons
// =============================================================================

export declare module "@mui/material/Button" {
    export interface ButtonPropsVariantOverrides {
        "elden-ring": true
    }
}

// // =============================================================================
// // Links
// // =============================================================================
//
// import type { To } from "react-router-dom"
// import type { LinkTypeMap as MuiLinkTypeMap } from "@mui/material/Link"
//
// export declare module "@mui/material/Link" {
//     export interface LinkTypeMap extends MuiLinkTypeMap<
// }
