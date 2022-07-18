export interface OgBasicMetadata {
    /**
     * The title of your object as it should appear within the graph.
     *
     * @example "The Rock"
     */
    title: string
    /**
     * The type of your object.
     *
     * Depending on the type you specify, other properties may also be required.
     *
     * @example "video.movie"
     */
    type: string
    /**
     * An image URL which should represent your object within the graph.
     */
    image?: string
    /**
     * The canonical URL of your object that will be used as its permanent ID in the graph
     *
     * @example "https://www.imdb.com/title/tt0117500/"
     */
    url: string
    /**
     * A URL to an audio file to accompany this object.
     */
    audio?: string
    /**
     * A one to two sentence description of your object.
     */
    description?: string
    /**
     * The word that appears before this object's title in a sentence.
     *
     * If `"auto"` is chosen, the consumer of your data should chose between `"a"` or `"an"`.
     *
     * @default "" // blank
     */
    determiner: "a" | "an" | "the" | "" | "auto"
    /** The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US. */
    locale: string
    /** An array of other locales this page is available in. */
    alternate_locale
    /** If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb". */
    site_name: string
    /** A URL to a video file that complements this object. */
    video: string
}
