import { NextSeo } from "next-seo";
import { SITE_NAME } from "../../lib/constrants";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from 'next/router'

export default function Page({ children, description, title }) {
    var pageTitle = `${title} | ${SITE_NAME}`
    const router = useRouter();
    var url = "https://slynite.com" + router.asPath;
    return(
        <div className="bg-primary text-secondary justify-between flex flex-col min-h-screen">
            <NextSeo
                title={pageTitle}
                description={description}
                additionalMetaTags={[{
                    property: 'dc:creator',
                    content: 'Danny Schapeit'
                  }, {
                    name: 'application-name',
                    content: 'Slynite'
                  }, {
                    httpEquiv: 'x-ua-compatible',
                    content: 'IE=edge; chrome=1'
                }]}
                additionalLinkTags={[
                    {
                      rel: 'icon',
                      href: '/favicon/favicon.ico',
                    },
                    {
                      rel: 'apple-touch-icon',
                      href: '/favicon/apple-touch-icon.png',
                      sizes: '76x76'
                    },
                    {
                      rel: 'manifest',
                      href: '/favicon/manifest.json'
                    }
                ]}
            />

            <div className="p-5 pt-0 space-y-2">
                <Header />
                <main className="flex-grow sm:mx-14 md:mx-16 lg:mx-24 xl:mx-40 justify-center">
                    <div className="max-w-screen-3xl mx-auto mt-10">
                        <Banner />
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}