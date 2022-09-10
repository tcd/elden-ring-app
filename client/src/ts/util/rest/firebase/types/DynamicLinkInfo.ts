/**
 * [Firebase Dynamic Links Short Links API Reference](https://firebase.google.com/docs/reference/dynamic-links/link-shortener#parameters)
 */
export interface DynamicLinkInfo {
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
    /**
     * Social Meta Tag parameters
     */
    socialMetaTagInfo?: {
        /** The title to use when the Dynamic Link is shared in a social post. */
        socialTitle?: string
        /** The description to use when the Dynamic Link is shared in a social post. */
        socialDescription?: string
        /** The URL to an image related to this link. */
        socialImageLink?: string
    }
    /**
     * Navigation parameters
     */
     navigationInfo?: {
        /**
         * If set to '1', skip the app preview page when the Dynamic Link is opened, and instead redirect to the app or store.
         * The app preview page (enabled by default) can more reliably send users to the most appropriate destination when they open Dynamic Links in apps; however, if you expect a Dynamic Link to be opened only in apps that can open Dynamic Links reliably without this page, you can disable it with this parameter.
         * This parameter will affect the behavior of the Dynamic Link only on iOS.
         */
        enableForcedRedirect: boolean
    }
    /**
     * Analytics parameters
     */
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
    /**
     * Android parameters
     */
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
    /**
     * iOS parameters
     */
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
}
