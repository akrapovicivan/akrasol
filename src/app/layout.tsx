import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from './components/Header/Header';
import './globals.css';
import { raleway } from '@/shared/fonts';

config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${raleway.className} antialiased`}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
