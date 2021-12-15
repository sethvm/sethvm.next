import Head from 'next/head'

interface Props {
    title?: string,
    description?: string,
    image?: string,
    url?: string
}

const SEO = ({
    title,
    description,
    image,
    url
}: Props) => {

    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Seth Morenos" />
            <meta name="theme-color" content="#004080" />
            <link rel="icon" href="/favicon.png" />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            {description && <meta name="description" content={description} />}
            {url && <link rel="canonical" href={url} />}
            {url && <meta property="og:url" content={url} />}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            <meta name="twitter:image" content={image} />
            <meta name="twitter:title" content={title} />
            {description && <meta name="twitter:description" content={description} />}
        </Head>
    );
}

SEO.defaultProps = {
    title: "Seth Morenos",
    description: 
        "Product designer pursuing a BASc in Systems Design Engineering at the University of Waterloo.",
    image: "/preview.png",
    url: null,
}

export default SEO
