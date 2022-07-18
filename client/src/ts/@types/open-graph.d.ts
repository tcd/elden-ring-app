/**
 * [The Open Graph protocol](https://ogp.me/)
 * [blatantly copied from Florian Keller's work](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/open-graph/index.d.ts)
 */
declare module "open-graph-protocol" {
    interface Metadata {
        [key: string]: string | string[] | undefined;
        /**
         * An alternate url to use if the webpage requires HTTPS.
         */
        secure_url?: string | string[] | undefined;
        /**
         * A MIME type for this image.
         */
        type?: string | string[] | undefined;
    }

    interface ImageVideoMetadata extends Metadata {
        /**
         * A description of what is in the image (not a caption).
         * If the page specifies an `og:image` it should specify `og:image:alt`.
         */
        alt?: string | string[] | undefined;
        /**
         * The number of pixels high.
         */
        height?: string | string[] | undefined;
        /**
         * An image URL which should represent your object within the graph.
         */
        url?: string | string[] | undefined;
        /**
         * The number of pixels wide.
         */
        width?: string | string[] | undefined;
    }

    interface Data {
        [key: string]: string | string[] | ImageVideoMetadata | Metadata | undefined;
        /**
         * A URL to an audio file to accompany this object.
         */
        audio?: string | string[] | Metadata | undefined;
        /**
         * A one to two sentence description of your object.
         */
        description?: string | string[] | undefined;
        /**
         * The word that appears before this object's title in a sentence.
         * An enum of (a, an, the, "", auto).
         * If `"auto"` is chosen, the consumer of your data should chose between `"a"` or `"an"`.
         * @default "" // blank
         */
        determiner?: string | string[] | undefined;
        /**
         * An image URL which should represent your object within the graph.
         */
        image?: string | string[] | ImageVideoMetadata | undefined;
        /**
         * The locale these tags are marked up in.
         * Of the format `language_TERRITORY`.
         * @default "en_US"
         */
        locale?:
            | string | string[]
            | {
                  /** An array of other locales this page is available in. */
                  alternate?: string | string[] | undefined;
              } | undefined;
        /**
         * If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
         */
        site_name?: string | string[] | undefined;
        /**
         * The title of your object as it should appear within the graph, e.g., "The Rock".
         */
        title: string | string[];
        /**
         * The type of your object, e.g. `"video.movie"`.
         *
         * Depending on the type you specify, other properties may also be required.
         */
        type?: string | string[] | undefined;
        /**
         * The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "http://www.imdb.com/title/tt0117500/".
         */
        url?: string | string[] | undefined;
        /**
         * A URL to a video file that complements this object.
         */
        video?: string | string[] | ImageVideoMetadata | undefined;
    }
}
