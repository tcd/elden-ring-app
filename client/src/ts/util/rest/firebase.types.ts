// Manually constructing a Dynamic Link URL

export interface CreateDynamicLinkResponse {
    /** The generated short Dynamic Link. */
    shortLink?: string
    /** A link to a flowchart of the Dynamic Link's behavior. */
    previewLink?: string
}

/** [Firebase Dynamic Links Short Links API Reference](https://firebase.google.com/docs/reference/dynamic-links/link-shortener) */
export interface DynamicLinkInfo {
    dynamicLinkInfo: {
        /**
         * Required if you didn't set a value for the `longDynamicLink` parameter.
         *
         * Your Firebase project's Dynamic Links domain.
         * You can find this value in the Dynamic Links section of the [Firebase console](https://console.firebase.google.com/).
         */
        domainUriPrefix: string
        /**
         * Required if you didn't set a value for the `longDynamicLink` parameter.
         *
         * The link your app will open. Specify a URL that your app can handle, typically the app's content or payload, which initiates app-specific logic (such as crediting the user with a coupon or displaying a welcome screen).
         * This link must be a well-formatted URL, be properly URL-encoded, use either HTTP or HTTPS, and cannot be another Dynamic Link.
         */
        link: string
        androidInfo?: {
            /**
             * The package name of the Android app to use to open the link.
             * The app must be connected to your project from the Overview page of the Firebase console.
             * Required for the Dynamic Link to open an Android app.
             */
            androidPackageName?: string
            /**
             * The link to open when the app isn't installed.
             * Specify this to do something other than install your app from the Play Store when the app isn't installed, such as open the mobile web version of the content, or display a promotional page for your app.
             */
            androidFallbackLink?: string
            /**
             * The [versionCode](http://developer.android.com/tools/publishing/versioning.html#appversioning) of the minimum version of your app that can open the link.
             * If the installed app is an older version, the user is taken to the Play Store to upgrade the app.
             */
            androidMinPackageVersionCode?: string
        }
        iosInfo?: {
            /**
             * The bundle ID of the iOS app to use to open the link.
             * The app must be connected to your project from the Overview page of the Firebase console.
             * Required for the Dynamic Link to open an iOS app.
             */
            iosBundleId?: string
            /**
             * The link to open when the app isn't installed.
             * Specify this to do something other than install your app from the App Store when the app isn't installed, such as open the mobile web version of the content, or display a promotional page for your app.
             */
            iosFallbackLink?: string
            /**
             * Your app's custom URL scheme, if defined to be something other than your app's bundle ID.
             */
            iosCustomScheme?: string
            /**
             * The link to open on iPads when the app isn't installed.
             * Specify this to do something other than install your app from the App Store when the app isn't installed, such as open the web version of the content, or display a promotional page for your app.
             */
            iosIpadFallbackLink?: string
            /**
             * The bundle ID of the iOS app to use on iPads to open the link.
             * The app must be connected to your project from the Overview page of the Firebase console.
             */
            iosIpadBundleId?: string
            /**
             * Your app's App Store ID, used to send users to the App Store when the app isn't installed.
             */
            iosAppStoreId?: string
        }
        /**
         * If set to '1', skip the app preview page when the Dynamic Link is opened, and instead redirect to the app or store.
         * The app preview page (enabled by default) can more reliably send users to the most appropriate destination when they open Dynamic Links in apps; however, if you expect a Dynamic Link to be opened only in apps that can open Dynamic Links reliably without this page, you can disable it with this parameter.
         * This parameter will affect the behavior of the Dynamic Link only on iOS.
         */
        navigationInfo?: {
            enableForcedRedirect: boolean
        }
        analyticsInfo?: {
            /** Google Play analytics parameters. */
            googlePlayAnalytics?: {
                utmSource?: string
                utmMedium?: string
                utmCampaign?: string
                utmTerm?: string
                utmContent?: string
            }
            /** iTunes Connect analytics parameters. */
            itunesConnectAnalytics?: {
                at?: string
                ct?: string
                mt?: string
                pt?: string
            }
        }
        socialMetaTagInfo?: {
            /** The title to use when the Dynamic Link is shared in a social post. */
            socialTitle?: string
            /** The description to use when the Dynamic Link is shared in a social post. */
            socialDescription?: string
            /** The URL to an image related to this link. */
            socialImageLink?: string
        }
    }
    /**
     * Specifies how to create the path component of a short Dynamic Link.
     * By default, Firebase Dynamic Links generates 17-character string suffixes.
     *
     * - `"SHORT"`
     *     - Generate path strings that are only as long as needed to be unique, with a minimum length of 4 characters. Use this method if sensitive information would not be exposed if a short Dynamic Link URL were guessed.
     * - `"UNGUESSABLE"`
     *     - Shorten the path to an unguessable string. Such strings are created by base62-encoding randomly generated 96-bit numbers, and consist of 17 alphanumeric characters. Use unguessable strings to prevent your Dynamic Links from being crawled, which can potentially expose sensitive information.
     */
    suffix?: {
        option?: "SHORT" | "UNGUESSABLE"
    }
}

// const DynamicLinkInfoQueryParams: Record<NestedKeyOf<DynamicLinkInfo>, string> = {
//     dynamicLinkInfo: "",
//     suffix: "",
//     "dynamicLinkInfo.navigationInfo.enableForcedRedirect": "",
//     "dynamicLinkInfo.analyticsInfo.googlePlayAnalytics": "",
//     "dynamicLinkInfo.analyticsInfo.itunesConnectAnalytics": "",
//     "dynamicLinkInfo.androidInfo": "",
//     "dynamicLinkInfo.iosInfo": "",
//     "dynamicLinkInfo.navigationInfo": "",
//     "dynamicLinkInfo.analyticsInfo": "",
//     "dynamicLinkInfo.socialMetaTagInfo": ""
// }

// https://your_subdomain.page.link/?link=your_deep_link&apn=package_name[&amv=minimum_version][&afl=fallback_link]

/**
 * [Manually constructing a Dynamic Link URL](https://firebase.google.com/docs/dynamic-links/create-manually)
 */
export interface DynamicLinkInfoQueryParams {
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
     * The description to use when the Dynamic Link is shared in a social post. *
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
