// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace Bitly {
    interface DeepLink {
        app_id?: string
        app_uri_path?: string
        install_url?: string
        install_type?: string
        guid?: string
        bitlink?: string
        app_guid?: string
        os?: string
        created?: string
        modified?: string
        brand_guid?: string
    }
    // interface Bitlink {
    //     references?: Record<string, any>
    //     link?: string
    //     id?: string
    //     long_url?: string
    //     archived?: boolean
    //     /** timestamp */
    //     created_at?: string
    //     custom_bitlinks?: any[]
    //     tags?: string[]
    //     deeplinks?: DeepLink[]
    // }
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Requests {
        interface Shorten {
            long_url: string
            /**
             * @default "bit.ly"
             */
            domain?: string
            group_guid?: string
        }
        interface Bitlink {
            long_url: string
            /**
             * @default "bit.ly"
             */
            domain?: string
            /**
             * Always include a specific group and custom domain in your shorten calls.
             */
            group_guid?: string
            title?: string
            tags?: string[]
            deeplinks?: DeepLink[]
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Responses {
        interface Shorten {
            references?: Record<string, any>
            link?: string
            id?: string
            long_url?: string
            archived?: boolean
            /** timestamp */
            created_at?: string
            custom_bitlinks?: string[]
            tags?: string[]
            deeplinks?: DeepLink[]
        }
        interface Bitlink {
            references?: Record<string, any>
            link?: string
            id?: string
            long_url?: string
            archived?: boolean
            /** timestamp */
            created_at?: string
            custom_bitlinks?: any[]
            tags?: string[]
            deeplinks?: DeepLink[]
        }
    }
}

const _example: Bitly.Responses.Shorten = {
    created_at: "2022-09-08T18:44:45+0000",
    id: "bit.ly/3Qulqm0",
    link: "https://bit.ly/3Qulqm0",
    custom_bitlinks: [],
    long_url: "http://127.0.0.1:8080/data?data=hello from bitly",
    archived: false,
    tags: [],
    deeplinks: [],
    references: {
        group: "https://api-ssl.bitly.com/v4/groups/Bm98dnW7Scu",
    },
}
