import Head from 'next/head';

interface Props {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    noCrawl?: boolean;
}

const SEO = ({ title, description, image, url, noCrawl }: Props) => (
    <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        {description && <meta name='description' content={description} />}
        {url && <link rel='canonical' href={url} />}
        <link rel='icon' href='/favicon.png' />
        <meta name='author' content='Seth Morenos' />
        <meta name='theme-color' content='#FAFAFA' />
        <meta property='og:title' content={title} />
        {description && <meta property='og:description' content={description} />}
        {url && <meta property='og:url' content={url} />}
        <meta property='og:image' content={image} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta name='twitter:title' content={title} />
        {description && <meta name='twitter:description' content={description} />}
        <meta name='twitter:image' content={image} />
        {noCrawl && <meta name='robots' content='noindex' />}
    </Head>
);

SEO.defaultProps = {
    title: 'Seth Morenos',
    description:
        "I'm Seth, a product designer passionate about building experiences that help move the world forward. Currently working to empower independent business owners.",
    image: '/preview.png',
    url: null,
};

export default SEO;
