// Update the Typography's variant prop options
export declare module "@mui/material/Typography" {
    export interface TypographyPropsVariantOverrides {
        // add new
        pageName: true
        body: true
        statColumn: true
        code: true

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
