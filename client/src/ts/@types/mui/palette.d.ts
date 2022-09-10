/*
 * See:
 *
 * - [Material UI - Theming - Custom Variables](https://mui.com/material-ui/customization/theming/#custom-variables)
 *
 */


// -----------------------------------------------------------------------------
// Attempt #1
// -----------------------------------------------------------------------------

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
// }

// -----------------------------------------------------------------------------
// Attempt #2
// -----------------------------------------------------------------------------

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
// }

// -----------------------------------------------------------------------------
// Attempt #3
// -----------------------------------------------------------------------------

// import type { Theme } from "@mui/material/styles"
