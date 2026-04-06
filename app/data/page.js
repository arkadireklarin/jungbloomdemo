export default function DataPage() {
  const dataGroups = [
    {
      letter: 'a',
      title: 'behavioral data',
      description:
        'raw behavioral signals collected while the student is solving a task.',
      items: [
        'response time',
        'start delay',
        'inactivity duration',
        'retry count',
        'answer changes',
        'abandonment rate',
        'step sequence',
        'speed vs accuracy pattern',
      ],
    },
    {
      letter: 'b',
      title: 'interaction data',
      description:
        'platform-level interaction data showing how the student uses the learning environment.',
      items: [
        'question types attempted',
        'topics where the student struggles',
        'used hints',
        'opened solutions',
        'repeated questions',
        'question selection behavior',
      ],
    },
    {
      letter: 'c',
      title: 'content data',
      description:
        'structured academic content metadata used to interpret performance and generate better next steps.',
      items: [
        'question text and type',
        'topic and subtopic',
        'difficulty level',
        'solution method tagging',
        'prerequisite mapping',
        'correct solution steps',
        'alternative solution paths',
        'common misconception patterns',
      ],
    },
    {
      letter: 'd',
      title: 'derived data',
      description:
        'processed outputs produced by the analysis layer after raw data is interpreted.',
      items: [
        'friction signals',
        'friction scores',
        'learning profile',
        'performance trends',
        'intervention effectiveness',
      ],
    },
    {
      letter: 'e',
      title: 'advanced input data',
      description:
        'optional higher-depth data sources that strengthen diagnosis quality.',
      items: [
        'handwriting data',
        'step-by-step solution flow',
        'pen movement patterns',
        'deletions and rewrites',
        'solution path changes',
      ],
    },
  ];

  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, rgba(40,60,48,0.22) 0%, #0a0d0b 38%, #050605 100%)',
        color: '#f5f7f6',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '48px 24px 80px',
        }}
      >
        <div
          style={{
            marginBottom: 40,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(16px)',
            borderRadius: 24,
            padding: '28px 24px',
            boxShadow: '0 20px 80px rgba(0,0,0,0.28)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 12px',
              borderRadius: 999,
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#9ee6b0',
              background: 'rgba(87, 196, 122, 0.09)',
              border: '1px solid rgba(87, 196, 122, 0.18)',
              marginBottom: 18,
            }}
          >
            data architecture
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(2.2rem, 5vw, 4.4rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              maxWidth: 820,
            }}
          >
            the data behind
            <br />
            jungbloom
          </h1>

          <p
            style={{
              marginTop: 18,
              marginBottom: 0,
              maxWidth: 760,
              color: 'rgba(255,255,255,0.72)',
              fontSize: 17,
              lineHeight: 1.7,
            }}
          >
            jungbloom does not rely only on right or wrong answers. it combines
            behavioral, interaction, content, and derived learning signals to
            understand why a student struggles and what the next intervention
            should be.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 18,
            marginBottom: 42,
          }}
        >
          {dataGroups.map((group) => (
            <section
              key={group.letter}
              style={{
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                padding: 22,
                boxShadow: '0 18px 60px rgba(0,0,0,0.20)',
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#9ee6b0',
                  background: 'rgba(87,196,122,0.10)',
                  border: '1px solid rgba(87,196,122,0.18)',
                  marginBottom: 16,
                  textTransform: 'lowercase',
                }}
              >
                {group.letter}
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: 22,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  textTransform: 'lowercase',
                }}
              >
                {group.title}
              </h2>

              <p
                style={{
                  marginTop: 10,
                  marginBottom: 18,
                  color: 'rgba(255,255,255,0.66)',
                  fontSize: 14.5,
                  lineHeight: 1.65,
                }}
              >
                {group.description}
              </p>

              <div style={{ display: 'grid', gap: 10 }}>
                {group.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      padding: '10px 12px',
                      borderRadius: 14,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: 999,
                        background: '#9ee6b0',
                        marginTop: 8,
                        flexShrink: 0,
                      }}
                    />
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.88)',
                        fontSize: 14.5,
                        lineHeight: 1.45,
                        textTransform: 'lowercase',
                      }}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section
          style={{
            borderRadius: 28,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.03)',
            padding: '28px 24px',
          }}
        >
          <div
            style={{
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#9ee6b0',
              marginBottom: 14,
            }}
          >
            system logic
          </div>

          <h3
            style={{
              margin: 0,
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
            }}
          >
            raw signals become friction intelligence
          </h3>

          <div
            style={{
              marginTop: 24,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 14,
            }}
          >
            {[
              'data collection',
              'signal extraction',
              'friction detection',
              'decision engine',
              'adaptive intervention',
            ].map((step, index) => (
              <div
                key={step}
                style={{
                  padding: '18px 16px',
                  borderRadius: 18,
                  background: 'rgba(255,255,255,0.035)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.45)',
                    marginBottom: 8,
                  }}
                >
                  0{index + 1}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    lineHeight: 1.35,
                    color: '#f5f7f6',
                    textTransform: 'lowercase',
                  }}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}