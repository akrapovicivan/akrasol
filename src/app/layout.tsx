import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from './components/Header/Header';
import './globals.css';
import { raleway } from '@/shared/fonts';
import Footer from './components/Footer/Footer';

config.autoAddCss = false;

export const metadata: Metadata = {
    title: 'Akrasol',
    description: 'A great website built with Next.js',
    icons: {
        icon: '/svg/logo.svg',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${raleway.className} antialiased flex flex-col min-h-screen bg-white`}>
                <Header />
                <main className='flex-grow'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
