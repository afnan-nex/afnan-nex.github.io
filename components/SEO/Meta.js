import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Afnan Portfolio</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Afnan Portfolio" />
            <meta name="description"
                content="Afnan's (afnan-nex) Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Afnan (afnan-nex)" />
            <meta name="keywords"
                content="afnan-nex, afnan's portfolio, afnan linux, ubuntu portfolio, afnan portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Afnan Portfolio" />
            <meta itemProp="description"
                content="Afnan's (afnan-nex) Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Afnan Portfolio" />
            <meta name="twitter:description"
                content="Afnan's (afnan-nex) Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="afnan-nex" />
            <meta name="twitter:creator" content="afnan-nex" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Afnan Portfolio" />
            <meta name="og:description"
                content="Afnan's (afnan-nex) Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="https://afnan-nex.github.io/" />
            <meta name="og:site_name" content="Afnan Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <link rel="icon" type="image/png" sizes="32x32" href="images/logos/fevicon.png" />
            <link rel="icon" type="image/svg+xml" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/fevicon.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
