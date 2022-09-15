/**
 * [Manually constructing a Dynamic Link URL](https://firebase.google.com/docs/dynamic-links/create-manually)
 */
export interface DynamicLinkQueryParams {
    // -------------------------------------------------------------------------
    // Deep link parameter (Payload parameter)
    // -------------------------------------------------------------------------
    /**
     * The link your app will open. Specify a URL that your app can handle, typically the app's content or payload, which initiates app-specific logic (such as crediting the user with a coupon or displaying a welcome screen).
     * This link must be a well-formatted URL, be properly URL-encoded, use either HTTP or HTTPS, and cannot be another Dynamic Link.
     */
    link: string
    // -------------------------------------------------------------------------
    // Social Meta Tag parameters
    // -------------------------------------------------------------------------
    /**
     * Social Title
     *
     * The title to use when the Dynamic Link is shared in a social post.
     */
    st?: string
    /**
     * Social Description
     *
     * The description to use when the Dynamic Link is shared in a social post.
     */
    sd?: string
    /**
     * Social Image
     *
     * The URL to an image related to this link.
     * The image should be at least 300x200 px, and less than 300 KB.
     */
    si?: string
    // -------------------------------------------------------------------------
    // Debug parameter
    // -------------------------------------------------------------------------
    /**
     * debug
     *
     * Instead of loading the Dynamic Link, generate a flowchart you can use to preview your Dynamic Links' behavior on different platforms and configurations.
     */
    d?: 1
}
