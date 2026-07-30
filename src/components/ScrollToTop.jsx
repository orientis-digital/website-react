import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMetadata = {
  '/': {
    title: 'Orientis Digital | Digital Transformation, Locally Delivered',
    desc: "Tacloban's full-service technology partner for custom web & mobile software applications, enterprise SaaS tools, and managed IT services in Eastern Visayas."
  },
  '/products': {
    title: 'Software Products (Launching Soon) | Orientis Digital',
    desc: 'Explore upcoming enterprise software tools and join the early access waitlist for Orientis SaaS solutions.'
  },
  '/solutions': {
    title: 'Custom Software & IT Solutions | Orientis Digital',
    desc: 'End-to-end web engineering, cross-platform mobile apps, cloud DevOps, and strategic IT advisory in Tacloban City, Leyte.'
  },
  '/about': {
    title: 'About Us & Vision | Orientis Digital',
    desc: "Learn about Orientis Digital's mission, core values, and commitment to empowering businesses in Eastern Visayas, Philippines."
  },
  '/contact': {
    title: 'Contact Engineering & Demos | Orientis Digital',
    desc: 'Get in touch with Orientis Digital in Tacloban City, Leyte for custom software inquiries, consultations, and IT support.'
  },
  '/privacy': {
    title: 'Privacy Policy | Orientis Digital',
    desc: 'Data privacy and compliance policy for Orientis Digital software applications and IT services.'
  },
  '/terms': {
    title: 'Terms of Service | Orientis Digital',
    desc: 'Master service agreement and terms of use for Orientis Digital platform and engineering deliverables.'
  },
  '/404': {
    title: '404 Page Not Found | Orientis Digital',
    desc: 'The requested page or node was not found on Orientis Digital network.'
  },
  '/500': {
    title: '500 Server Error | Orientis Digital',
    desc: 'Internal system error telemetry logged.'
  },
  '/403': {
    title: '403 Access Restricted | Orientis Digital',
    desc: 'Access permission required.'
  }
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = pageMetadata[pathname] || pageMetadata['/'];
    
    // Update Page Title
    document.title = meta.title;

    // Update Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.desc);
    }

    // Update Open Graph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.desc);
    }

    // Update Twitter Card Title & Description
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', meta.title);
    }

    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', meta.desc);
    }
  }, [pathname]);

  return null;
}
