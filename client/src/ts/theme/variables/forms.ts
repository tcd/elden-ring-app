export const forms = <const>{
    textField: {
        /**
         * - width of vertical borders
         * - height of horizontal borders
         */
        borderThickness: "1.0px",
        /**
         * how far the vertical borders cover from either side
         */
        borderLength: "6px",
        colors: {
            inputBg: "#24231c",
            rootBg: "#292720",
            border: "#aeaeae",
            // border: "red",
            background: [
                "#252621",
                "#21211c",
                "#292720",
            ],
            scratchBorderColors: [
                // "#9a9990",
                "#aeaeae",
            ],
        },
        zIndex: {
            root:             2_000,

            wrapper:          2_010,

            borders:          2_020,

            // horizontalBorder: 2_020,
            // verticalBorder:   2_020,

            absolute:         2_040,

            input:            2_100,
        },
    },
}
