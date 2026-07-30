import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'Orientis Digital | Digital Transformation, Locally Delivered';
const DEFAULT_DESCRIPTION = "Orientis Digital is Tacloban's full-service technology partner for custom web & mobile software applications, enterprise SaaS tools, and managed IT services in Eastern Visayas, Philippines.";
const BASE_URL = 'https://orientis.digital';
const DEFAULT_IMAGE = `${BASE_URL}/static/img/orientis-logo.png`;

export default function SEO({ title, description, image, path }) {
  const location = useLocation();
  const currentPath = path || location.pathname;
  const canonicalUrl = `${BASE_URL}${currentPath === '/' ? '' : currentPath}`;
  const metaTitle = title ? `${title} | Orientis Digital` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const metaImage = image || DEFAULT_IMAGE;

  useEffect(() => {
    // 1. Update Document Title
    document.title = metaTitle;

    // 2. Helper to set or create meta tags
    const setMetaTag = (selector, attribute, attributeValue, content) => {
      let element = document.querySelector(`meta[${selector}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    setMetaTag('name', 'name', 'description', metaDescription);

    // Open Graph / Facebook Meta Tags
    setMetaTag('property', 'property', 'og:title', metaTitle);
    setMetaTag('property', 'property', 'og:description', metaDescription);
    setMetaTag('property', 'property', 'og:url', canonicalUrl);
    setMetaTag('property', 'property', 'og:image', metaImage);

    // Twitter Card Meta Tags
    setMetaTag('name', 'name', 'twitter:title', metaTitle);
    setMetaTag('name', 'name', 'twitter:description', metaDescription);
    setMetaTag('name', 'name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'name', 'twitter:image', metaImage);

    // Canonical Link Tag
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [metaTitle, metaDescription, metaImage, canonicalUrl]);

  return null;
}
