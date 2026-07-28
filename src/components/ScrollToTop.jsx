import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titlesMap = {
  '/': 'Orientis Digital | Unified Tech Solutions',
  '/products': 'Enterprise Products | Orientis Digital',
  '/solutions': 'Solutions & Capabilities | Orientis Digital',
  '/about': 'About Us & Manifesto | Orientis Digital',
  '/contact': 'Contact Engineering | Orientis Digital',
  '/privacy': 'Privacy Policy | Orientis Digital',
  '/terms': 'Terms of Service | Orientis Digital'
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = titlesMap[pathname] || 'Orientis Digital | Unified Tech Solutions';
    document.title = title;
  }, [pathname]);

  return null;
}
