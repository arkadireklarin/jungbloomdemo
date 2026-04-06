export const metadata = {
  title: 'Contact | Jungbloom',
};

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#090909',
        color: 'white',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: '80px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 16,
          background: 'rgba(255,255,255,0.03)',
          padding: 32,
        }}
      >
        <p style={{ color: '#a7f3d0', fontSize: 14, fontWeight: 600 }}>Contact</p>
        <h1
          style={{
            marginTop: 12,
            fontSize: 'clamp(36px, 6vw, 64px)',
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            fontWeight: 700,
          }}
        >
          Let’s Talk About Jungbloom
        </h1>
        <p
          style={{
            marginTop: 18,
            fontSize: 16,
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: 620,
          }}
        >
          Reach out for pilot programs, demos, or early collaboration opportunities.
        </p>

        <div
          style={{
            marginTop: 28,
            display: 'grid',
            gap: 16,
          }}
        >
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 12,
              padding: 16,
              background: 'rgba(0,0,0,0.20)',
            }}
          >
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>Email</div>
            <div style={{ marginTop: 8, fontSize: 18, fontWeight: 600 }}>
              info@jungbloom.ai
            </div>
          </div>

         
          
       
            <div style={{ marginTop: 8, fontSize: 18, fontWeight: 600 }}>
            </div>
          </div>
        </div>
      
    </main>
  );
}