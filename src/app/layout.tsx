import Header from '@/components/Header'
import './globals.css'
import { Open_Sans } from 'next/font/google'; 
import Footer from '@/components/Footer'; 
import AuthProvider from '@/providers/AuthProvider';
import getCurrentUser from '@/actions/getCurrentUser';

const font = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Coffee Shop',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser(); 
  
  return (
    <html lang="en">
      <body className={font.className}>
      <AuthProvider>

        <Header currentUser={currentUser} />
        {children}
        <Footer />
        </AuthProvider>
        </body>
    </html>
  )
}
