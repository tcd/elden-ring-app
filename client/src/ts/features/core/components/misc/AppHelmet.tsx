import { Helmet } from "react-helmet"

import { getImageSrcManual } from "@app/util"

const openGraphTags = [
    { "property": "og:title",        "content": "Elden Ring App" },
    { "property": "og:url",          "content": "https://elden-ring-app.com" },
    { "property": "og:image",        "content": getImageSrcManual("logo", "512") },
    { "property": "og:description",  "content": "An Elden Ring build planner and then some" },
    { "property": "og:locale",       "content": "en_US" },
    { "property": "og:site_name",    "content": "Elden Ring App" },
    { "property": "og:type",         "content": "website" },
]

export const AppHelmet = (_props: unknown): JSX.Element => {

    const title = "Elden Ring App"

    const $openGraphTags = openGraphTags.map(({ property, content }) => (
        <meta key={property} property={property} content={content} />
    ))

    return (
        <Helmet>
            <base/>
            <title>{title}</title>
            {$openGraphTags}
        </Helmet>
    )
}
