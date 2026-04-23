/* global React */

const AffiliateDisclosure = () => (
  <>
    <p><strong>Last Updated: April 2026</strong></p>
    <p>Telehealth FX ("we," "us," or "our") is an informational website and affiliate marketing platform. We are <strong>not</strong> a medical provider, pharmacy, or telehealth clinic. We do not provide medical advice, diagnosis, or treatment.</p>
    
    <h3>1. Financial Relationships</h3>
    <p>This website is supported by our partners. We participate in affiliate marketing programs, which means we may earn a commission, referral fee, or other compensation when you click on links to our partners' websites and/or make a purchase or sign up for a service (such as a GLP-1 weight loss program).</p>
    <p>This compensation may impact how and where products appear on this site. However, our reviews and recommendations are based on our independent research and evaluation of the programs.</p>

    <h3>2. No Medical Advice</h3>
    <p>The information provided on Telehealth FX, including text, graphics, images, and other material, is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or treatment.</p>
    <p>Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>

    <h3>3. FDA Disclaimer</h3>
    <p>Information regarding compounded medications (including compounded semaglutide and tirzepatide) discussed on this site is provided for educational purposes. Compounded medications are not FDA-approved, meaning the FDA does not evaluate them for safety, efficacy, or quality. They are prepared by licensed compounding pharmacies pursuant to a prescription from a licensed healthcare provider.</p>

    <h3>4. User Responsibility</h3>
    <p>When you click on a link to a telehealth provider, you will be directed to their platform to undergo a medical consultation. Any medical decisions, prescriptions, and treatments are strictly between you and the licensed medical professionals on that platform.</p>
  </>
);

const PrivacyPolicy = () => (
  <>
    <p><strong>Last Updated: April 2026</strong></p>
    <p>At Telehealth FX, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you use our website.</p>
    <h3>1. Information We Collect</h3>
    <p>We may collect information you voluntarily provide, such as your email address if you subscribe to our newsletter, and usage data via cookies to improve our site.</p>
    <h3>2. Health Information</h3>
    <p>We are not a medical provider and do not collect Protected Health Information (PHI). When you click through to our partners, any health information you provide is governed by their Privacy Policy and Notice of Privacy Practices.</p>
    <h3>3. Cookies and Tracking</h3>
    <p>We use cookies to analyze site traffic and track affiliate referrals. You can manage cookie preferences through your browser settings.</p>
  </>
);

const TermsOfService = () => (
  <>
    <p><strong>Last Updated: April 2026</strong></p>
    <p>By accessing Telehealth FX, you agree to be bound by these Terms of Service.</p>
    <h3>1. Use of Site</h3>
    <p>You may use our site for lawful, informational purposes only. You must be at least 18 years old to use this site.</p>
    <h3>2. Disclaimer of Warranties</h3>
    <p>Our website is provided "as is" without any representations or warranties, express or implied. We make no representations about the accuracy or completeness of the content provided.</p>
    <h3>3. Limitation of Liability</h3>
    <p>In no event shall Telehealth FX be liable for any indirect, consequential, or special liability arising out of your use of this website or reliance on its content.</p>
  </>
);

const TelehealthConsent = () => (
  <>
    <p>Since Telehealth FX is an informational affiliate site, we do not provide telehealth services directly. However, we want you to understand how telehealth works when you visit our partners.</p>
    <p>Telehealth involves the delivery of healthcare services using electronic communications, information technology, or other means. By utilizing a partner's telehealth platform, you will be required to consent to their specific Telehealth Consent policies, which cover the risks, benefits, and limitations of receiving care remotely rather than in person.</p>
  </>
);

const HIPAA = () => (
  <>
    <p>Because Telehealth FX does not provide medical services, we are not a "Covered Entity" under the Health Insurance Portability and Accountability Act (HIPAA).</p>
    <p>However, the licensed medical providers and pharmacies we refer you to are bound by HIPAA and state privacy laws. Once you leave our site and enter a partner's platform, any health data you share will be protected according to their Notice of Privacy Practices.</p>
  </>
);

const Placeholder = ({ title }) => (
  <>
    <p>Thank you for your interest in {title}. This page is currently being updated by our team. Please check back soon.</p>
    <p>If you need immediate assistance, please use our Contact page or message our care team directly.</p>
  </>
);

window.PAGE_CONTENT = {
  'affiliate-disclosure': { title: 'Affiliate Disclosure', component: AffiliateDisclosure },
  'privacy': { title: 'Privacy Policy', component: PrivacyPolicy },
  'terms': { title: 'Terms of Service', component: TermsOfService },
  'telehealth-consent': { title: 'Telehealth Consent', component: TelehealthConsent },
  'hipaa': { title: 'HIPAA Notice', component: HIPAA },
  'accessibility': { title: 'Accessibility Statement', component: () => <Placeholder title="Accessibility" /> },
  'about': { title: 'About Us', component: () => <Placeholder title="About Us" /> },
  'careers': { title: 'Careers', component: () => <Placeholder title="Careers" /> },
  'press': { title: 'Press', component: () => <Placeholder title="Press" /> },
  'partners': { title: 'Partners', component: () => <Placeholder title="Partners" /> },
  'contact': { title: 'Contact', component: () => <Placeholder title="Contact" /> },
  'help-center': { title: 'Help Center', component: () => <Placeholder title="Help Center" /> },
  'shipping': { title: 'Shipping Policy', component: () => <Placeholder title="Shipping Policy" /> },
  'returns': { title: 'Returns & Refunds', component: () => <Placeholder title="Returns & Refunds" /> },
  'insurance': { title: 'Insurance Information', component: () => <Placeholder title="Insurance Information" /> },
  'status': { title: 'System Status', component: () => <Placeholder title="System Status" /> },
};
