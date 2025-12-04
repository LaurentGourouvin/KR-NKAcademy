import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header/Header';
export const metadata: Metadata = {
    metadataBase: new URL('https://nkacademy.gourouvin.dev'),
    title: 'KR NKAcademy',
    description: 'Natural Korean Acquisition — From Zero to TOPIK II',
    openGraph: {
        title: 'KR NKAcademy — Natural Korean Acquisition',
        description: 'Learn Korean naturally from beginner to TOPIK II with structured lessons, dialogues, audio and exercises.',
        url: 'https://nkacademy.gourouvin.dev',
        siteName: 'KR NKAcademy',
        images: [
            {
                url: '/assets/logo_square.png',
                width: 298,
                height: 286,
                alt: 'KR NKAcademy — Korean Learning Platform',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="pt-8 mb:pt-16">{children}</main>
            </body>
        </html>
    );
}
