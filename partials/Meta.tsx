import { NextSeo } from "next-seo"

export const Meta = ({
  title = "Flow Studio - Meet the new digital age with us.",
  description = "We make creating and designing a unique experience for our clients.",
  url = "https://flowstudio.com"
}) => (
  <>
    <NextSeo
      {...{ title, description, canonical: url }}
      openGraph={{
        url,
        title,
        description,
        site_name: "Flow Studio",
        images: [
          {
            url: '/seo-image.png',
            height: 1212,
            width: 2114,
            alt: "Flow Studio"
          }
        ]
      }}
      twitter={{
        handle: "@flowstudio_",
        site: url,
        cardType: "summary_large_image"
      }}
    />
  </>
)