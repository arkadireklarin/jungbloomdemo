'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function JungbloomLandingPage() {
  const [viewport, setViewport] = useState({
    isMobile: false,
    isTablet: false,
  });

  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewport({
        isMobile: width <= 768,
        isTablet: width <= 1024,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { isMobile, isTablet } = viewport;

  const benefits = [
    {
      title: 'Less Manual Prep',
      description:
        'Teachers do not need to build multiple follow-up worksheets by hand for every student.',
    },
    {
      title: 'Better Follow-Up Questions',
      description:
        'Students get the next question based on how they struggled, not just whether they were right or wrong.',
    },
    {
      title: 'Improving Quality Over Time',
      description:
        'As the system learns from structured teaching material, generated questions become more aligned and useful.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Observe Response Patterns',
      description:
        'Jungbloom tracks timing, retries, hesitation, and answer behavior during student practice.',
    },
    {
      number: '02',
      title: 'Detect The Learning Issue',
      description:
        'The system identifies whether the problem is weak foundations, misunderstanding, speed, or poor starting strategy.',
    },
    {
      number: '03',
      title: 'Generate The Next Question',
      description:
        'A better follow-up question is created automatically to match the student’s actual need.',
    },
  ];

  const cardStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: isMobile ? 14 : 16,
  };

  const smallCardStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: isMobile ? 10 : 12,
  };

  const buttonSecondary = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 10,
    padding: isMobile ? '14px 16px' : '14px 18px',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    width: isMobile ? '100%' : 'auto',
    boxSizing: 'border-box',
  };

  const buttonWhite = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    color: 'black',
    border: 'none',
    borderRadius: 10,
    padding: isMobile ? '14px 16px' : '14px 18px',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    width: isMobile ? '100%' : 'auto',
    boxSizing: 'border-box',
  };

  const buttonBlack = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'black',
    color: 'white',
    border: 'none',
    borderRadius: 10,
    padding: '14px 18px',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    width: isMobile ? '100%' : 'auto',
    boxSizing: 'border-box',
  };

  const h2Size = isMobile ? 28 : 40;

  async function sendMessage() {
    if (!message.trim()) return;

    setLoading(true);
    setReply('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setReply(data.error || 'something went wrong');
      } else {
        setReply(data.reply || 'no response');
      }
    } catch (error) {
      setReply('connection error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, rgba(52,211,153,0.08), transparent 28%), #090909',
        color: 'white',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        overflowX: 'hidden',
      }}
    >
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(14px)',
          background: 'rgba(9,9,9,0.88)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: isMobile ? '14px 16px' : '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.10)',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src="/logo.png"
                alt="jungbloom logo"
                style={{
                  width: 50,
                  height: 50,
                  objectFit: 'contain',
                }}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Jungbloom</div>
              <div
                style={{
                  fontSize: isMobile ? 11 : 12,
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.4,
                }}
              >
                Adaptive AI Assignment Infrastructure
              </div>
            </div>
          </div>

          <nav
            style={{
              display: 'flex',
              gap: isMobile ? 12 : 22,
              fontSize: isMobile ? 13 : 14,
              color: 'rgba(255,255,255,0.72)',
              flexWrap: 'wrap',
              width: isMobile ? '100%' : 'auto',
              order: isMobile ? 3 : 0,
            }}
          >
            <a href="#product" style={{ color: 'inherit', textDecoration: 'none' }}>
              Product
            </a>
            <a href="#benefits" style={{ color: 'inherit', textDecoration: 'none' }}>
              Benefits
            </a>
            <a href="#how" style={{ color: 'inherit', textDecoration: 'none' }}>
              How It Works
            </a>
            <a href="#future" style={{ color: 'inherit', textDecoration: 'none' }}>
              Future Layer
            </a>
            <a href="#chat-demo" style={{ color: 'inherit', textDecoration: 'none' }}>
              AI Demo
            </a>
          </nav>

          <div
            style={{
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            <Link href="/contact" style={buttonSecondary}>
              Request Demo
            </Link>
            <Link href="/contact" style={buttonWhite}>
              Contact
            </Link>
          </div>
        </div>
      </header>

      <section
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '36px 16px 24px' : '72px 24px 40px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isTablet ? '1fr' : '1.05fr 0.95fr',
            gap: isMobile ? 24 : 48,
            alignItems: 'center',
          }}
        >
          <div>
            <h1
              style={{
                marginTop: 24,
                fontSize: isMobile ? 42 : 76,
                lineHeight: isMobile ? 1.02 : 0.96,
                letterSpacing: '-0.04em',
                fontWeight: 700,
                maxWidth: '100%',
              }}
            >
              Smarter Assignments,
              <br />
              Less Manual Work.
            </h1>

            <p
              style={{
                marginTop: 24,
                maxWidth: 720,
                fontSize: isMobile ? 15 : 18,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              Jungbloom analyzes student response patterns, detects where they struggle, and
              generates more useful follow-up questions automatically.
            </p>

            <div
              style={{
                marginTop: 34,
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
                gap: 20,
                maxWidth: 760,
              }}
            >
              {[
                ['Core Value', 'Adaptive Question Generation'],
                ['Primary User', 'Teachers And Schools'],
                ['Outcome', 'Higher Relevance, Lower Prep Time'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    borderLeft: '1px solid rgba(255,255,255,0.10)',
                    paddingLeft: 14,
                  }}
                >
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{label}</div>
                  <div style={{ marginTop: 8, fontSize: 14, fontWeight: 600 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="product">
            <div
              style={{
                ...cardStyle,
                overflow: 'hidden',
                boxShadow: '0 25px 80px rgba(0,0,0,0.45)',
              }}
            >
              <div
                style={{
                  padding: isMobile ? 16 : '18px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.10)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 12,
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Adaptive Question Flow</div>
                  <div style={{ marginTop: 4, fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
                    Product Preview
                  </div>
                </div>
                <div
                  style={{
                    padding: '8px 12px',
                    borderRadius: 999,
                    border: '1px solid rgba(52,211,153,0.18)',
                    background: 'rgba(52,211,153,0.10)',
                    color: '#a7f3d0',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Live Logic
                </div>
              </div>

              <div style={{ padding: isMobile ? 16 : 20 }}>
                <div
                  style={{
                    ...smallCardStyle,
                    padding: isMobile ? 16 : 18,
                    background: 'rgba(255,255,255,0.02)',
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 12,
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'white' }}>
                        PDF Upload
                      </div>
                      <div
                        style={{
                          marginTop: 4,
                          fontSize: 12,
                          color: 'rgba(255,255,255,0.45)',
                        }}
                      >
                        Teacher Worksheet Import
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '6px 10px',
                        borderRadius: 999,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.65)',
                      }}
                    >
                      PDF · Parsed
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 14,
                      borderRadius: 12,
                      border: '1px dashed rgba(255,255,255,0.16)',
                      background:
                        'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))',
                      padding: 16,
                    }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '64px 1fr auto',
                        gap: 14,
                        alignItems: isMobile ? 'stretch' : 'center',
                      }}
                    >
                      <div
                        style={{
                          width: 64,
                          height: 78,
                          borderRadius: 10,
                          background: '#111214',
                          border: '1px solid rgba(255,255,255,0.08)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <div
                          style={{
                            width: 22,
                            height: 26,
                            borderRadius: 4,
                            background: 'rgba(255,255,255,0.12)',
                          }}
                        />
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>PDF</div>
                      </div>

                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'white', lineHeight: 1.5 }}>
                          Grade 10 Algebra Worksheet — Quadratics Unit
                        </div>
                        <div
                          style={{
                            marginTop: 6,
                            fontSize: 13,
                            lineHeight: 1.7,
                            color: 'rgba(255,255,255,0.6)',
                          }}
                        >
                          14 questions detected · topic tags extracted · difficulty distribution
                          mapped
                        </div>
                        <div
                          style={{
                            marginTop: 10,
                            display: 'flex',
                            gap: 8,
                            flexWrap: 'wrap',
                          }}
                        >
                          {['Quadratic Equations', 'Method Choice', 'Factorization'].map((tag) => (
                            <span
                              key={tag}
                              style={{
                                padding: '6px 10px',
                                borderRadius: 999,
                                fontSize: 12,
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: 'rgba(255,255,255,0.72)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ width: isMobile ? '100%' : 'auto' }}>
                        <button
                          style={{
                            ...buttonSecondary,
                            padding: '12px 14px',
                            fontSize: 13,
                            width: isMobile ? '100%' : 'auto',
                          }}
                        >
                          Imported
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    ...smallCardStyle,
                    padding: isMobile ? 16 : 18,
                    background: 'rgba(0,0,0,0.24)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 16,
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.35)',
                        }}
                      >
                        Student Session
                      </div>
                      <div
                        style={{
                          marginTop: 10,
                          fontSize: isMobile ? 18 : 20,
                          fontWeight: 600,
                        }}
                      >
                        Algebra Practice · Session 04
                      </div>
                    </div>

                    <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.40)' }}>
                        Detected Difficulty
                      </div>
                      <div
                        style={{
                          marginTop: 8,
                          fontSize: 14,
                          fontWeight: 600,
                          color: '#a7f3d0',
                        }}
                      >
                        Method Selection
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
                    <div
                      style={{
                        borderRadius: 12,
                        padding: 16,
                        border: '1px solid rgba(255,255,255,0.10)',
                        background: 'rgba(255,255,255,0.03)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 12,
                          alignItems: 'center',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 600 }}>Previous Question</div>
                        <div
                          style={{
                            padding: '6px 10px',
                            borderRadius: 999,
                            fontSize: 12,
                            fontWeight: 600,
                            background: 'rgba(255,255,255,0.04)',
                            color: 'rgba(255,255,255,0.68)',
                            border: '1px solid rgba(255,255,255,0.10)',
                          }}
                        >
                          Too Broad
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: 12,
                          fontSize: isMobile ? 14 : 15,
                          lineHeight: 1.8,
                          color: 'rgba(255,255,255,0.76)',
                        }}
                      >
                        Solve the quadratic equation
                        <span style={{ color: 'white', fontWeight: 600 }}> 3x² − 11x + 6 = 0 </span>
                        and explain which method you used. Show the full solution clearly and justify
                        why your chosen method is efficient.
                      </div>
                    </div>

                    <div
                      style={{
                        borderRadius: 12,
                        padding: 16,
                        border: '1px solid rgba(255,255,255,0.10)',
                        background: 'rgba(255,255,255,0.03)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 12,
                          alignItems: 'center',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 600 }}>Detected Pattern</div>
                        <div
                          style={{
                            padding: '6px 10px',
                            borderRadius: 999,
                            fontSize: 12,
                            fontWeight: 600,
                            background: 'rgba(255,255,255,0.04)',
                            color: 'rgba(255,255,255,0.68)',
                            border: '1px solid rgba(255,255,255,0.10)',
                          }}
                        >
                          Start-Step Friction
                        </div>
                      </div>

                      <div
                        style={{
                          marginTop: 12,
                          display: 'grid',
                          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
                          gap: 10,
                        }}
                      >
                        {[
                          ['Initial Pause', '18s'],
                          ['Method Changes', '2'],
                          ['Confidence', 'Low'],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            style={{
                              borderRadius: 10,
                              border: '1px solid rgba(255,255,255,0.08)',
                              background: 'rgba(0,0,0,0.18)',
                              padding: 12,
                            }}
                          >
                            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.42)' }}>
                              {label}
                            </div>
                            <div style={{ marginTop: 6, fontSize: 16, fontWeight: 600 }}>{value}</div>
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          marginTop: 12,
                          fontSize: 14,
                          lineHeight: 1.8,
                          color: 'rgba(255,255,255,0.72)',
                        }}
                      >
                        The main issue is student cannot decide which formula to use.
                      </div>
                    </div>

                    <div
                      style={{
                        borderRadius: 12,
                        padding: 16,
                        border: '1px solid rgba(52,211,153,0.20)',
                        background: 'rgba(52,211,153,0.10)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 12,
                          alignItems: 'center',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 600 }}>Next Generated Question</div>
                        <div
                          style={{
                            padding: '6px 10px',
                            borderRadius: 999,
                            fontSize: 12,
                            fontWeight: 700,
                            background: '#34d399',
                            color: '#04130c',
                          }}
                        >
                          Adapted
                        </div>
                      </div>

                      <div
                        style={{
                          marginTop: 12,
                          fontSize: isMobile ? 14 : 15,
                          lineHeight: 1.8,
                          color: '#d1fae5',
                        }}
                      >
                        Before solving
                        <span style={{ color: 'white', fontWeight: 700 }}> 3x² − 11x + 6 = 0</span>,
                        choose the most efficient first method:
                        <span style={{ color: 'white', fontWeight: 700 }}>
                          {' '}
                          factoring, completing the square, or the quadratic formula
                        </span>
                        . Then write only the first step and explain why that method is the best fit.
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 18,
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
                      gap: 12,
                    }}
                  >
                    {[
                      ['Hesitation', 'High'],
                      ['Retries', '2 Attempts'],
                      ['Next Step', 'Narrowed Prompt'],
                    ].map(([label, value]) => (
                      <div key={label} style={{ ...smallCardStyle, padding: 16 }}>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.40)' }}>{label}</div>
                        <div style={{ marginTop: 8, fontSize: 18, fontWeight: 600 }}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '8px 16px 24px' : '8px 24px 24px',
        }}
      >
        <div style={{ ...cardStyle, padding: isMobile ? 20 : 28 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isTablet ? '1fr' : '0.85fr 1.15fr',
              gap: isMobile ? 24 : 36,
              alignItems: 'start',
            }}
          >
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#a7f3d0' }}>Why Jungbloom</div>
              <h2
                style={{
                  marginTop: 12,
                  fontSize: isMobile ? 32 : 52,
                  lineHeight: 1.04,
                  letterSpacing: '-0.03em',
                  fontWeight: 700,
                }}
              >
                Static Assignments Miss What Actually Went Wrong
              </h2>
              <p
                style={{
                  marginTop: 20,
                  maxWidth: 520,
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: 'rgba(255,255,255,0.60)',
                }}
              >
                Most homework systems treat every mistake the same. Jungbloom adapts the next
                question based on how the student is struggling, not just whether the answer was
                correct.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)',
                gap: 14,
              }}
            >
              {benefits.map((item) => (
                <div
                  key={item.title}
                  style={{
                    ...smallCardStyle,
                    padding: 20,
                    background: 'rgba(0,0,0,0.20)',
                  }}
                >
                  <div style={{ fontSize: 20, fontWeight: 600 }}>{item.title}</div>
                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: 'rgba(255,255,255,0.60)',
                    }}
                  >
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="how"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '40px 16px 24px' : '70px 24px 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 20,
            alignItems: 'flex-end',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#a7f3d0' }}>How It Works</div>
            <h2
              style={{
                marginTop: 12,
                fontSize: isMobile ? 32 : 52,
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                fontWeight: 700,
              }}
            >
              From Student Behavior To Better Next Questions
            </h2>
          </div>
          <p
            style={{
              maxWidth: 540,
              fontSize: 16,
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.60)',
            }}
          >
            The flow is simple enough to pilot quickly, but specific enough to reduce repetitive
            teacher effort and improve assignment relevance.
          </p>
        </div>

        <div
          style={{
            marginTop: 24,
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)',
            gap: 14,
          }}
        >
          {steps.map((step) => (
            <div key={step.number} style={{ ...smallCardStyle, padding: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#a7f3d0' }}>{step.number}</div>
              <div
                style={{
                  marginTop: 16,
                  fontSize: isMobile ? 24 : 28,
                  fontWeight: 600,
                  lineHeight: 1.15,
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.60)',
                }}
              >
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '24px 16px' : '24px 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isTablet ? '1fr' : 'repeat(2, 1fr)',
            gap: 14,
          }}
        >
          <div style={{ ...cardStyle, padding: isMobile ? 20 : 28 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#a7f3d0' }}>For Teachers</div>
            <h2
              style={{
                marginTop: 12,
                fontSize: h2Size,
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                fontWeight: 700,
              }}
            >
              Reduce Repetitive Prep Work
            </h2>
            <p
              style={{
                marginTop: 20,
                maxWidth: 560,
                fontSize: 16,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.60)',
              }}
            >
              Instead of manually building multiple follow-up worksheets, teachers can rely on
              Jungbloom to generate better-targeted practice automatically.
            </p>

            <div style={{ marginTop: 22, display: 'grid', gap: 12 }}>
              {[
                'Generate differentiated follow-up questions faster',
                'Reduce repetitive assignment design',
                'Support more students without multiplying prep time',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    ...smallCardStyle,
                    padding: 16,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    background: 'rgba(0,0,0,0.20)',
                  }}
                >
                  <span
                    style={{
                      marginTop: 6,
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: '#34d399',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.72)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...cardStyle, padding: isMobile ? 20 : 28 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#a7f3d0' }}>For Students</div>
            <h2
              style={{
                marginTop: 12,
                fontSize: h2Size,
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                fontWeight: 700,
              }}
            >
              Get The Right Kind Of Practice
            </h2>
            <p
              style={{
                marginTop: 20,
                maxWidth: 560,
                fontSize: 16,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.60)',
              }}
            >
              Students should not keep receiving the same style of question after every mistake.
              Jungbloom adjusts the next task to match the real point of struggle.
            </p>

            <div style={{ marginTop: 22, display: 'grid', gap: 12 }}>
              {[
                'More useful follow-up questions',
                'Less random repetition',
                'Clearer progression from confusion to confidence',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    ...smallCardStyle,
                    padding: 16,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    background: 'rgba(0,0,0,0.20)',
                  }}
                >
                  <span
                    style={{
                      marginTop: 6,
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: '#34d399',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.72)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '40px 16px 24px' : '70px 24px 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isTablet ? '1fr' : '1.05fr 0.95fr',
            gap: 14,
          }}
        >
          <div style={{ ...cardStyle, padding: isMobile ? 20 : 28 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#a7f3d0' }}>
              Adaptive Generation
            </div>
            <h2
              style={{
                marginTop: 12,
                fontSize: h2Size,
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                fontWeight: 700,
              }}
            >
              Question Quality Should Improve With Context
            </h2>
            <p
              style={{
                marginTop: 20,
                maxWidth: 720,
                fontSize: 16,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.60)',
              }}
            >
              Good question generation is not about producing more questions. It is about
              producing more relevant ones. Jungbloom uses student response behavior to shape the
              next step with more precision.
            </p>

            <div
              style={{
                marginTop: 26,
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: 14,
              }}
            >
              <div style={{ ...smallCardStyle, padding: 20, background: 'rgba(0,0,0,0.20)' }}>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>Input Signals</div>
                <div style={{ marginTop: 8, fontSize: 20, fontWeight: 600, lineHeight: 1.35 }}>
                  Timing, Retries, Hesitation, Answer Patterns
                </div>
              </div>

              <div style={{ ...smallCardStyle, padding: 20, background: 'rgba(0,0,0,0.20)' }}>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>Output Logic</div>
                <div style={{ marginTop: 8, fontSize: 20, fontWeight: 600, lineHeight: 1.35 }}>
                  Better-Targeted Follow-Up Questions
                </div>
              </div>
            </div>
          </div>

          <div id="future" style={{ ...cardStyle, padding: isMobile ? 20 : 28, background: '#0d0f0e' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#a7f3d0' }}>
              Future PDF Learning Layer
            </div>
            <h2
              style={{
                marginTop: 12,
                fontSize: h2Size,
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                fontWeight: 700,
              }}
            >
              Built To Learn From Real Teaching Material
            </h2>
            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.60)',
              }}
            >
              In later versions, uploaded PDFs and worksheets can help Jungbloom learn from real
              curriculum-aligned question structures and improve generation quality over time.
            </p>

            <div style={{ marginTop: 24, display: 'grid', gap: 12 }}>
              {[
                'Teacher-uploaded worksheets as structured input',
                'Stronger alignment with real classroom material',
                'Improved question style and quality as the system matures',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    ...smallCardStyle,
                    padding: 16,
                    background: 'rgba(0,0,0,0.20)',
                  }}
                >
                  <div style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.72)' }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                borderRadius: 12,
                border: '1px solid rgba(52,211,153,0.16)',
                background: 'rgba(52,211,153,0.10)',
                padding: 16,
                color: '#d1fae5',
                fontSize: 14,
                lineHeight: 1.8,
              }}
            >
              This layer supports long-term improvement, but the primary value stays the same:
              reducing teacher workload through better adaptive assignment generation.
            </div>
          </div>
        </div>
      </section>

      <section
        id="chat-demo"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '40px 16px 24px' : '70px 24px 24px',
        }}
      >
        <div style={{ ...cardStyle, padding: isMobile ? 20 : 28 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isTablet ? '1fr' : '0.9fr 1.1fr',
              gap: 24,
              alignItems: 'start',
            }}
          >
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#a7f3d0' }}>
                AI Demo
              </div>
              <h2
                style={{
                  marginTop: 12,
                  fontSize: isMobile ? 32 : 52,
                  lineHeight: 1.04,
                  letterSpacing: '-0.03em',
                  fontWeight: 700,
                }}
              >
                Talk To The System
              </h2>
              <p
                style={{
                  marginTop: 20,
                  maxWidth: 520,
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: 'rgba(255,255,255,0.60)',
                }}
              >
                This simple demo shows how Jungbloom can respond through an AI layer.
                For now, this is a basic conversation interface connected to the model.
              </p>

              <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
                {[
                  'Connected through backend API route',
                  'Safe key handling with environment variables',
                  'Can later evolve into friction-based response logic',
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      ...smallCardStyle,
                      padding: 16,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      background: 'rgba(0,0,0,0.20)',
                    }}
                  >
                    <span
                      style={{
                        marginTop: 6,
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: '#34d399',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        lineHeight: 1.8,
                        color: 'rgba(255,255,255,0.72)',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                ...smallCardStyle,
                padding: isMobile ? 16 : 20,
                background: 'rgba(0,0,0,0.24)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 12,
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Live Chat Preview</div>
                  <div
                    style={{
                      marginTop: 4,
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.45)',
                    }}
                  >
                    Basic Gemini Connection
                  </div>
                </div>

                <div
                  style={{
                    padding: '8px 12px',
                    borderRadius: 999,
                    border: '1px solid rgba(52,211,153,0.18)',
                    background: 'rgba(52,211,153,0.10)',
                    color: '#a7f3d0',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Demo
                </div>
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask something..."
                rows={6}
                style={{
                  width: '100%',
                  marginTop: 18,
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: '#0f0f14',
                  color: 'white',
                  padding: '14px',
                  resize: 'vertical',
                  outline: 'none',
                  fontSize: '15px',
                  boxSizing: 'border-box',
                }}
              />

              <div
                style={{
                  marginTop: 12,
                  display: 'flex',
                  gap: 10,
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  style={{
                    ...buttonWhite,
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                <button
                  onClick={() => {
                    setMessage('');
                    setReply('');
                  }}
                  style={buttonSecondary}
                >
                  Clear
                </button>
              </div>

              <div
                style={{
                  marginTop: 18,
                  borderRadius: 12,
                  padding: 16,
                  border: '1px solid rgba(255,255,255,0.10)',
                  background: 'rgba(255,255,255,0.03)',
                  minHeight: 140,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.42)',
                    marginBottom: 10,
                  }}
                >
                  AI Response
                </div>

                <div
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.78)',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {reply || 'The model response will appear here.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '24px 16px 70px' : '24px 24px 90px',
        }}
      >
        <div
          style={{
            background: 'white',
            color: 'black',
            borderRadius: 16,
            padding: isMobile ? 20 : 32,
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isTablet ? '1fr' : '1fr auto',
              gap: 24,
              alignItems: isTablet ? 'start' : 'end',
            }}
          >
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#047857' }}>Final CTA</div>
              <h2
                style={{
                  marginTop: 12,
                  maxWidth: 900,
                  fontSize: isMobile ? 30 : 58,
                  lineHeight: 1.02,
                  letterSpacing: '-0.03em',
                  fontWeight: 700,
                }}
              >
                Jungbloom Generates Better Next Questions, So Teachers Don’t Have To Do It All By
                Hand.
              </h2>
              <p
                style={{
                  marginTop: 18,
                  maxWidth: 720,
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: 'rgba(0,0,0,0.65)',
                }}
              >
                Bring adaptive AI-based assignments into the classroom with a system designed to
                reduce repetitive prep work and improve the usefulness of student practice.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
                width: isMobile ? '100%' : 'auto',
              }}
            >
              <Link href="/contact" style={buttonBlack}>
                Request Pilot Access
              </Link>

              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'transparent',
                  color: 'black',
                  border: '1px solid rgba(0,0,0,0.10)',
                  borderRadius: 10,
                  padding: '14px 18px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  width: isMobile ? '100%' : 'auto',
                  boxSizing: 'border-box',
                }}
              >
                Book A Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}