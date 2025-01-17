import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class WebDocument extends Document
{
    render()
    {
        return (
            <Html lang="en-US" className="scroll-smooth">
                <Head>
                <meta name="description" content="Ekehi - Redefining Cryptocurrency for a Sustainable and Inclusive Future" />
                <meta property="og:description" content="The EKEHI token is the native cryptocurrency of the ecosystem, designed to be a leader in sustainable cryptocurrency. It is environmentally friendly, energy-efficient, and supports global sustainability goals." />
                <meta name="keywords" content="Crypto, DeFi, Ekehi, Blockchain, Digital Currency" />
                <meta property="og:title" content="Ekehi - Redefining Cryptocurrency for a Sustainable and Inclusive Future" />
                <meta property="og:description" content="The EKEHI token is the native cryptocurrency of the ecosystem, designed to be a leader in sustainable cryptocurrency. It is environmentally friendly, energy-efficient, and supports global sustainability goals." />
                <meta property="og:image" content="https://ekehi.network/images/HEADER.jpg" />
                <meta property="og:url" content="https://ekehi.network" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Ekehi - Redefining Cryptocurrency for a Sustainable and Inclusive Future" />
                <meta name="twitter:description" content="The EKEHI token is the native cryptocurrency of the ecosystem, designed to be a leader in sustainable cryptocurrency. It is environmentally friendly, energy-efficient, and supports global sustainability goals." />
                <meta name="twitter:image" content="https://ekehi.network/images/HEADER.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="images/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
                    rel="stylesheet"
                />
                <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MG9F62J');`}}></Script>
                </Head>
                <body>
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MG9F62J"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                    <Main />
                    <NextScript>
                    </NextScript>
                </body>
            </Html>
        )
    }
}
export default WebDocument