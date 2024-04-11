import type {ReactNode} from 'react';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '@/app/globals.css';
import classNames from 'classnames';
import Providers from '@/components/Providers';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Croct - Demo',
    description: 'A demo of Croct\'s personalization platform.',
};

type RootLayoutProps = {
    children: ReactNode,
};

export default function RootLayout({children}: RootLayoutProps): ReactNode {
    return (
        <html lang="en" className="h-full">
            <body className={classNames('h-full', inter)}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
