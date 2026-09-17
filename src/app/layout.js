import StyledComponentsRegistry from '@/lib/registry';
import MainContainer from '@/components/MainContainer';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeContextProvider } from '@/context/ThemeContext';
import CustomThemeProvider from '@/providers/CustomThemeProvider';
import AuthProvider from '@/providers/AuthProvider';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <AuthProvider>
            <ThemeContextProvider>
              <MainContainer>
                <Navbar />
                {children}
                <Footer />
              </MainContainer>
            </ThemeContextProvider>
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};
