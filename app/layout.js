import './globals.css';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';

export const metadata = {
  title: 'MotionCut | The 30-Creative Testing System for Meta Ads',
  description:
    'We turn one ecommerce product into 30 finished Meta ads every month. No creators to source, no products to ship, no weeks of waiting.',
  openGraph: {
    title: 'MotionCut | The 30-Creative Testing System for Meta Ads',
    description:
      'We turn one ecommerce product into 30 finished Meta ads every month. No creators to source, no products to ship, no weeks of waiting.',
    siteName: 'MotionCut',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MotionCut | The 30-Creative Testing System for Meta Ads',
    description:
      'We turn one ecommerce product into 30 finished Meta ads every month. No creators to source, no products to ship, no weeks of waiting.',
  },
  icons: {
    icon: '/assets/images/icon.png',
    apple: '/assets/images/apple-icon.png',
  },
};

export const viewport = {
  themeColor: '#0a0a0b',
};

const THEME_INIT_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');var t='dark';try{t=localStorage.getItem('theme')==='light'?'light':'dark'}catch(e){}d.dataset.theme=t;if(t==='light'){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content','#ffffff')}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-small focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
