// import type { To } from "react-router-dom"
// import type { DistributiveOmit } from "@mui/types"
// import type { SxProps } from "@mui/system"
// import type { OverridableComponent } from "@mui/material/OverridableComponent"
// import type {
//     // LinkTypeMap as MuiLinkTypeMap,
//     // LinkProps as MuiLinkProps,
//     LinkClasses,
// } from "@mui/material/Link"
// import type { Theme } from "@mui/material/styles"
// import type { TypographyProps } from "@mui/material/Typography"
//
// // import type { IEldenRingMaterialTheme } from "@app/theme"
//
//
// export declare module "@mui/material/Link" {
//     // // export interface LinkTypeMap extends MuiLinkProps<
//     // export type LinkProps<
//     //     D extends React.ElementType = MuiLinkTypeMap["defaultComponent"],
//     //     P = {
//     //         to: To,
//     //     },
//     // > = OverrideProps<LinkTypeMap<P, D>, D>;
//
//     export interface LinkTypeMap<P = {}, D extends React.ElementType = "a"> {
//         props: P &
//             DistributiveOmit<LinkBaseProps, "classes"> & {
//                 /**
//                  * Describes a location that is the destination of some navigation, either via
//                  * `history.push` or `history.replace`.
//                  * May be either a URL or the pieces of a URL path.
//                  */
//                 to: To
//                 /**
//                  * The content of the component.
//                  */
//                 children?: React.ReactNode;
//                 /**
//                  * Override or extend the styles applied to the component.
//                  */
//                 classes?: Partial<LinkClasses>;
//                 /**
//                  * The color of the link.
//                  * @default 'primary'
//                  */
//                 color?: TypographyProps["color"];
//                 /**
//                  * The system prop that allows defining system overrides as well as additional CSS styles.
//                  */
//                 sx?: SxProps<Theme>;
//                 /**
//                  * `classes` prop applied to the [`Typography`](/material-ui/api/typography/) element.
//                  */
//                 TypographyClasses?: TypographyProps["classes"];
//                 /**
//                  * Controls when the link should have an underline.
//                  * @default 'always'
//                  */
//                 underline?: "none" | "hover" | "always";
//                 /**
//                  * Applies the theme typography styles.
//                  * @default 'inherit'
//                  */
//                 variant?: TypographyProps["variant"];
//             };
//         defaultComponent: D;
//     }
//
//     /**
//      *
//      * Demos:
//      *
//      * - [Breadcrumbs](https://mui.com/material-ui/react-breadcrumbs/)
//      * - [Links](https://mui.com/material-ui/react-link/)
//      *
//      * API:
//      *
//      * - [Link API](https://mui.com/material-ui/api/link/)
//      * - inherits [Typography API](https://mui.com/material-ui/api/typography/)
//      */
//     declare const Link: OverridableComponent<LinkTypeMap>
//
//     export type LinkBaseProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color" | "href">
//         & DistributiveOmit<TypographyProps, "children" | "component" | "color" | "ref" | "variant"> & { to: To }
//
//     export type LinkProps<
//         D extends React.ElementType = LinkTypeMap["defaultComponent"],
//         P = {},
//       > = OverrideProps<LinkTypeMap<P, D>, D>;
//
//     export default Link
// }
