import type { Metadata } from "next";
import { Inter , Manrope} from "next/font/google";
import "./globals.css";
import {cx} from "@/utils";
import Header from "@/components/ui/Header/header";
import Footer from "@/components/ui/Footer/footer";
import siteMetadata from '@/utils/siteMetaData'


const inter = Inter({ subsets: ["latin"] , display:"swap", variable:"--font-sm"});
const manrope = Manrope({ subsets: ["latin"] , display:"swap", variable:"--font-sm"});
//By providing a value of swap , we tell the browser to render the page right away with fallback fonts, and then redraw the page once the fonts have loaded.

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        template: `%s | ${siteMetadata.title}`,
        default: siteMetadata.title
    },
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.siteUrl,
        siteName: siteMetadata.title,
        images: [
            siteMetadata.socialBanner
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: siteMetadata.title,
        description: siteMetadata.description,
        images: [    siteMetadata.socialBanner], // Must be an absolute URL
    },


}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={cx(inter.variable,manrope.variable,'font-mr bg-light ')}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
