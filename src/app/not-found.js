'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Perform a direct window redirect for the fastest possible client-side fallback
    window.location.replace('/');
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#1F3529',
      background: '#FBF8F3',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '500', marginBottom: '12px', letterSpacing: '-0.02em' }}>Redirecting...</h1>
        <p style={{ fontSize: '15px', opacity: 0.7, maxWidth: '320px', margin: '0 auto', lineHeight: '1.5' }}>
          We couldn't find that page. Sending you back to Telehealth FX.
        </p>
      </div>
    </div>
  );
}
