import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Code, 
  Users, 
  Trophy, 
  Calendar, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  RotateCw, 
  LayoutDashboard, 
  Flame, 
  Award, 
  CheckCircle,
  ExternalLink,
  ChevronRight,
  LogOut,
  MapPin,
  Clock
} from 'lucide-react';
import { INITIAL_USER, INITIAL_HACKATHONS, INITIAL_NOTIFICATIONS, INITIAL_CERTIFICATES } from './mockData';
import './round2.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' | 'login' | 'register' | 'student'
  const [user, setUser] = useState(INITIAL_USER);
  const [hackathons] = useState(INITIAL_HACKATHONS);
  const [activeDashTab, setActiveDashTab] = useState('overview'); // 'overview' | 'my-events' | 'events'

  // Auth States
  const [email, setEmail] = useState('agasthya@campuscode.dev');
  const [password, setPassword] = useState('CampusCode2026!');
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('Agasthya Shetty');
  const [college, setCollege] = useState('National Institute of Technology');
  const [captchaCode, setCaptchaCode] = useState('8F4K');
  const [captchaInput, setCaptchaInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');

  const refreshCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError('');
    if (captchaInput.toUpperCase() !== captchaCode.toUpperCase()) {
      setAuthError('Verification captcha mismatch. Try again.');
      refreshCaptcha();
      return;
    }
    setUser({ ...INITIAL_USER, email, name: email.split('@')[0].toUpperCase() });
    setAuthSuccess('Authenticated! Launching workspace...');
    setTimeout(() => {
      setAuthSuccess('');
      setCurrentPage('student');
    }, 600);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setAuthError('');
    if (captchaInput.toUpperCase() !== captchaCode.toUpperCase()) {
      setAuthError('Verification captcha mismatch. Try again.');
      refreshCaptcha();
      return;
    }
    setUser({ ...INITIAL_USER, name: fullName, email, institution: college });
    setAuthSuccess('Account created! Welcome to CampusCode Arena.');
    setTimeout(() => {
      setAuthSuccess('');
      setCurrentPage('student');
    }, 600);
  };

  return (
    <div className="aura-shell">
      {/* 1. Sleek Floating Header */}
      <header className="aura-header">
        <div className="aura-brand" onClick={() => setCurrentPage('landing')}>
          <div className="brand-slashes">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="brand-label">CAMPUSCODE</span>
          <span className="brand-tag">REBUILD '26</span>
        </div>

        <nav className="aura-nav-pill">
          <button 
            className={currentPage === 'landing' ? 'active' : ''} 
            onClick={() => setCurrentPage('landing')}
          >
            Explore
          </button>
          <button onClick={() => { setCurrentPage('landing'); setTimeout(() => document.getElementById('sprints')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
            Hackathons
          </button>
          <button onClick={() => { setCurrentPage('landing'); setTimeout(() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
            Ecosystem
          </button>
          {user && (
            <button 
              className={currentPage === 'student' ? 'active' : ''} 
              onClick={() => setCurrentPage('student')}
            >
              Workspace
            </button>
          )}
        </nav>

        <div className="aura-auth-btns">
          {user ? (
            <button className="aura-btn-coral" onClick={() => setCurrentPage('student')}>
              ENTER ARENA <ChevronRight size={15} />
            </button>
          ) : (
            <>
              <button className="aura-btn-ghost" onClick={() => setCurrentPage('login')}>
                Sign in
              </button>
              <button className="aura-btn-coral" onClick={() => setCurrentPage('register')}>
                Join Arena <ArrowRight size={15} />
              </button>
            </>
          )}
        </div>
      </header>

      {/* ====================================================================
          PAGE 1: BRAND NEW LANDING EXPERIENCE (Tidewell-Inspired Atmosphere)
          ==================================================================== */}
      {currentPage === 'landing' && (
        <main>
          {/* Hero Section */}
          <section className="aura-hero-stage">
            <div className="aura-hero-grid">
              {/* Left Headline */}
              <div>
                <div className="aura-tag-chip">
                  <span className="pulsing-dot"></span>
                  <span>COLLEGIATE HACKATHON ARENA</span>
                </div>

                <h1 className="aura-headline">
                  Where students <br />
                  <span className="coral-serif">ship ideas</span> into reality.
                </h1>

                <p className="aura-subtext">
                  A unified, high-octane engineering ground for university builders. 
                  Zero fragmented forms, automated anti-cheat gates, and cryptographic verified credentials.
                </p>

                <div className="aura-cta-row">
                  <button className="aura-btn-coral" onClick={() => setCurrentPage('register')}>
                    Start Building Today ↗
                  </button>
                  <button 
                    className="aura-btn-ghost" 
                    onClick={() => document.getElementById('sprints')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Active Sprints
                  </button>
                </div>
              </div>

              {/* Right Floating Glass Card (Hovering over the website like the reference) */}
              <div className="aura-floating-card">
                <div className="card-location-meta">
                  <span>📍 CAMPUSCODE ARENA • REBUILD '26</span>
                  <span>4.98 ★ rating</span>
                </div>

                <div className="glass-item-row">
                  <div className="item-row-title">
                    <span>ReBuild '26 Sprint</span>
                    <span style={{ color: 'var(--lime-accent)', fontSize: '11px' }}>● LIVE SPRINT</span>
                  </div>
                  <div className="item-row-dates">
                    <div>
                      <small style={{ color: 'var(--cream-subtle)', display: 'block' }}>R1 Recreation</small>
                      <strong>Fri 06</strong>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <small style={{ color: 'var(--cream-subtle)', display: 'block' }}>R2 Rebuild</small>
                      <strong style={{ color: 'var(--coral)' }}>Sat 07</strong>
                    </div>
                  </div>
                </div>

                <div className="glass-item-row">
                  <div className="item-row-title">
                    <span>AlgoQuest 2.0</span>
                    <span style={{ color: 'var(--cream-subtle)', fontSize: '11px' }}>UPCOMING</span>
                  </div>
                  <div className="item-row-dates">
                    <div>
                      <small style={{ color: 'var(--cream-subtle)', display: 'block' }}>Starts</small>
                      <strong>Sat 14</strong>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <small style={{ color: 'var(--cream-subtle)', display: 'block' }}>Grand Finale</small>
                      <strong>Sun 15</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="coral-badge-pill">₹18,000 PRIZE POOL</span>
                  <button 
                    style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    onClick={() => setCurrentPage('student')}
                  >
                    Enter Workspace <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Strip like the reference image */}
            <div className="aura-bottom-strip">
              <div className="strip-item">
                <span>Handcrafted Architecture</span>
                <small>Every component built for performance and responsive desktop fluidity.</small>
              </div>
              <div className="strip-item">
                <span>Automated AI Rubrics</span>
                <small>IdeaCheck & RuleBot deliver instantaneous guideline screening.</small>
              </div>
              <div className="strip-item">
                <span>HackMate Teammates</span>
                <small>Discover peers on campus with complementary engineering stacks.</small>
              </div>
              <div className="strip-item">
                <span>Verifiable Certificates</span>
                <small>Cryptographically signed student records with scannable QR verification.</small>
              </div>
            </div>
          </section>

          {/* Active Hackathons Section */}
          <section id="sprints" className="aura-section">
            <div className="aura-section-header">
              <span className="section-sup">CURATED COMPETITIONS</span>
              <h2>Active Collegiate Sprints</h2>
            </div>

            <div className="aura-cards-grid">
              {hackathons.map((hack) => (
                <div key={hack.id} className="aura-glass-card">
                  <div>
                    <span className="card-status-chip">● {hack.status} • {hack.mode}</span>
                    <h3 className="card-title">{hack.title}</h3>
                    <p className="card-desc">{hack.short_description}</p>
                    <div className="card-tags">
                      {hack.tags.map(t => <span key={t} className="card-tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="card-footer-action">
                    <div className="card-prize-val">
                      <small>PRIZE GRANTS</small>
                      <strong>{hack.prize_pool}</strong>
                    </div>
                    <button className="aura-btn-coral" onClick={() => setCurrentPage(user ? 'student' : 'login')}>
                      Participate <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how" className="aura-section" style={{ background: 'rgba(10, 14, 25, 0.5)' }}>
            <div className="aura-section-header">
              <span className="section-sup">HOW CAMPUSCODE WORKS</span>
              <h2>Built For Builders, Not Forms</h2>
            </div>

            <div className="aura-cards-grid">
              <div className="aura-glass-card">
                <div style={{ color: 'var(--coral)', marginBottom: '14px' }}><Users size={28} /></div>
                <h3 className="card-title">01. Match Team</h3>
                <p className="card-desc">Find teammates with complementary frontend, backend, and design skillsets using HackMate.</p>
              </div>
              <div className="aura-glass-card">
                <div style={{ color: 'var(--lime-accent)', marginBottom: '14px' }}><Terminal size={28} /></div>
                <h3 className="card-title">02. Screen Idea</h3>
                <p className="card-desc">Run problem statements through instant AI rule analyzers to ensure 100% submission compliance.</p>
              </div>
              <div className="aura-glass-card">
                <div style={{ color: 'var(--purple-accent)', marginBottom: '14px' }}><Code size={28} /></div>
                <h3 className="card-title">03. Code & Ship</h3>
                <p className="card-desc">Submit GitHub repositories, preview deployments, and track real-time round gates.</p>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ====================================================================
          PAGE 2: REDESIGNED GLASS LOGIN
          ==================================================================== */}
      {currentPage === 'login' && (
        <section className="aura-auth-stage">
          <div className="aura-auth-container">
            <div className="auth-header-block">
              <span style={{ color: 'var(--coral)', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>AUTHENTICATION GATEWAY</span>
              <h2>Enter The Arena</h2>
              <p>Sign in with your campus credentials to access your dashboard.</p>
            </div>

            {authError && <div style={{ background: 'rgba(255, 94, 82, 0.15)', border: '1px solid var(--coral)', color: '#ff8a82', padding: '10px 14px', borderRadius: '10px', fontSize: '12px', marginBottom: '16px' }}>{authError}</div>}
            {authSuccess && <div style={{ background: 'rgba(168, 230, 46, 0.15)', border: '1px solid var(--lime-accent)', color: 'var(--lime-accent)', padding: '10px 14px', borderRadius: '10px', fontSize: '12px', marginBottom: '16px' }}>{authSuccess}</div>}

            <form onSubmit={handleLogin}>
              <div className="auth-form-group">
                <label>INSTITUTIONAL EMAIL</label>
                <div className="auth-input-wrapper">
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="student@university.edu" 
                    required 
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <label>PASSWORD</label>
                <div className="auth-input-wrapper">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="••••••••••••" 
                    required 
                  />
                  <button 
                    type="button" 
                    style={{ background: 'transparent', border: 'none', color: 'var(--cream-subtle)', cursor: 'pointer' }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Bot Verification Captcha */}
              <div className="auth-form-group">
                <label>HUMAN VERIFICATION</label>
                <div className="captcha-container-box">
                  <div className="captcha-display-bubble">{captchaCode}</div>
                  <button 
                    type="button" 
                    onClick={refreshCaptcha}
                    className="aura-btn-ghost"
                    style={{ padding: '8px 14px', fontSize: '11px' }}
                  >
                    <RotateCw size={13} />
                  </button>
                  <div className="auth-input-wrapper" style={{ flex: 1 }}>
                    <input 
                      type="text" 
                      value={captchaInput} 
                      onChange={e => setCaptchaInput(e.target.value)} 
                      placeholder="ENTER CODE" 
                      required 
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="auth-submit-btn">
                AUTHENTICATE & ENTER <ArrowRight size={16} />
              </button>

              <div className="auth-switch-link">
                Don't have an arena pass? 
                <button type="button" onClick={() => setCurrentPage('register')}>
                  Create account →
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* ====================================================================
          PAGE 3: REDESIGNED GLASS REGISTER
          ==================================================================== */}
      {currentPage === 'register' && (
        <section className="aura-auth-stage">
          <div className="aura-auth-container">
            <div className="auth-header-block">
              <span style={{ color: 'var(--coral)', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>NEW BUILDER REGISTRATION</span>
              <h2>Join The Arena</h2>
              <p>Claim your digital coder identity for ReBuild '26 and collegiate hackathons.</p>
            </div>

            {authError && <div style={{ background: 'rgba(255, 94, 82, 0.15)', border: '1px solid var(--coral)', color: '#ff8a82', padding: '10px 14px', borderRadius: '10px', fontSize: '12px', marginBottom: '16px' }}>{authError}</div>}
            {authSuccess && <div style={{ background: 'rgba(168, 230, 46, 0.15)', border: '1px solid var(--lime-accent)', color: 'var(--lime-accent)', padding: '10px 14px', borderRadius: '10px', fontSize: '12px', marginBottom: '16px' }}>{authSuccess}</div>}

            <form onSubmit={handleRegister}>
              <div className="auth-form-group">
                <label>FULL NAME</label>
                <div className="auth-input-wrapper">
                  <input 
                    type="text" 
                    value={fullName} 
                    onChange={e => setFullName(e.target.value)} 
                    placeholder="Agasthya Shetty" 
                    required 
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <label>COLLEGE / INSTITUTION</label>
                <div className="auth-input-wrapper">
                  <input 
                    type="text" 
                    value={college} 
                    onChange={e => setCollege(e.target.value)} 
                    placeholder="National Institute of Technology" 
                    required 
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <label>STUDENT EMAIL</label>
                <div className="auth-input-wrapper">
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="agasthya@campuscode.dev" 
                    required 
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <label>VERIFICATION CODE</label>
                <div className="captcha-container-box">
                  <div className="captcha-display-bubble">{captchaCode}</div>
                  <button 
                    type="button" 
                    onClick={refreshCaptcha}
                    className="aura-btn-ghost"
                    style={{ padding: '8px 14px', fontSize: '11px' }}
                  >
                    <RotateCw size={13} />
                  </button>
                  <div className="auth-input-wrapper" style={{ flex: 1 }}>
                    <input 
                      type="text" 
                      value={captchaInput} 
                      onChange={e => setCaptchaInput(e.target.value)} 
                      placeholder="ENTER CODE" 
                      required 
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="auth-submit-btn">
                REGISTER DIGITAL ID <ArrowRight size={16} />
              </button>

              <div className="auth-switch-link">
                Already registered? 
                <button type="button" onClick={() => setCurrentPage('login')}>
                  Sign in here →
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* ====================================================================
          PAGE 4: REDESIGNED STUDENT DASHBOARD WORKSPACE
          ==================================================================== */}
      {currentPage === 'student' && (
        <section className="aura-dashboard-shell">
          <div className="aura-dashboard-grid">
            {/* Sidebar */}
            <aside className="aura-dash-sidebar">
              <div className="dash-user-profile">
                <div className="avatar-badge">{user?.name ? user.name.slice(0, 2) : 'AS'}</div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '15px' }}>{user?.name || 'Agasthya Shetty'}</h4>
                  <small style={{ color: 'var(--coral)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>STUDENT BUILDER</small>
                </div>
              </div>

              <div className="dash-nav-items">
                <button 
                  className={`dash-nav-btn ${activeDashTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveDashTab('overview')}
                >
                  <LayoutDashboard size={18} /> Overview
                </button>
                <button 
                  className={`dash-nav-btn ${activeDashTab === 'my-events' ? 'active' : ''}`}
                  onClick={() => setActiveDashTab('my-events')}
                >
                  <Flame size={18} /> My Events (3)
                </button>
                <button 
                  className={`dash-nav-btn ${activeDashTab === 'events' ? 'active' : ''}`}
                  onClick={() => setActiveDashTab('events')}
                >
                  <Calendar size={18} /> All Sprints
                </button>
                <button 
                  className="dash-nav-btn" 
                  onClick={() => setCurrentPage('landing')}
                  style={{ marginTop: '20px', color: 'var(--cream-subtle)' }}
                >
                  <LogOut size={18} /> Exit Arena
                </button>
              </div>
            </aside>

            {/* Dashboard Main Workspace */}
            <main className="aura-dash-main">
              {/* Tab 1: Overview */}
              {activeDashTab === 'overview' && (
                <>
                  <div className="dash-welcome-banner">
                    <div>
                      <span style={{ color: 'var(--coral)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>● ACTIVE SPRINT TRACKER</span>
                      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: '#fff', margin: '8px 0' }}>
                        ReBuild '26 — Round 2
                      </h2>
                      <p style={{ color: 'var(--cream-muted)', maxWidth: '480px', fontSize: '14px' }}>
                        You're currently in the live Round 2 Rebuild window. Submit your GitHub repository and live Vercel demo link before 8:00 PM.
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="coral-badge-pill" style={{ fontSize: '13px', padding: '8px 16px' }}>ROUND 2 LIVE</span>
                    </div>
                  </div>

                  <div className="dash-stats-row">
                    <div className="dash-stat-glass-card">
                      <small>REGISTERED SPRINTS</small>
                      <strong>03</strong>
                    </div>
                    <div className="dash-stat-glass-card">
                      <small>ONGOING ROUNDS</small>
                      <strong style={{ color: 'var(--coral)' }}>01</strong>
                    </div>
                    <div className="dash-stat-glass-card">
                      <small>COMPLETED CHALLENGES</small>
                      <strong>04</strong>
                    </div>
                    <div className="dash-stat-glass-card">
                      <small>VERIFIED CERTS</small>
                      <strong style={{ color: 'var(--lime-accent)' }}>02</strong>
                    </div>
                  </div>

                  <div className="aura-glass-card">
                    <h3 className="card-title">My Sprint Deadlines</h3>
                    <div className="glass-item-row" style={{ marginTop: '16px' }}>
                      <div className="item-row-title">
                        <span>ReBuild '26 — Final UI Rebuild Submission</span>
                        <span style={{ color: 'var(--coral)' }}>Today, 8:00 PM IST</span>
                      </div>
                      <p style={{ fontSize: '13px', color: 'var(--cream-muted)' }}>Complete new UI redesign in CampusCode vibe. Include live demo link.</p>
                    </div>
                    <div className="glass-item-row">
                      <div className="item-row-title">
                        <span>AlgoQuest 2.0 Quiz & Sprint</span>
                        <span style={{ color: 'var(--cream-subtle)' }}>14 Nov 2026</span>
                      </div>
                      <p style={{ fontSize: '13px', color: 'var(--cream-muted)' }}>Online qualifier quiz followed by 24h systems coding.</p>
                    </div>
                  </div>
                </>
              )}

              {/* Tab 2: My Events */}
              {activeDashTab === 'my-events' && (
                <div className="aura-glass-card">
                  <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '20px' }}>Joined Hackathons & Quizzes</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div className="glass-item-row">
                      <div className="item-row-title">
                        <span>ReBuild '26 — The Dashboard Recreation Hackathon</span>
                        <span style={{ color: 'var(--coral)' }}>SELECTED FOR ROUND 2</span>
                      </div>
                      <p style={{ color: 'var(--cream-muted)', fontSize: '13px', margin: '6px 0' }}>Team: Ags • Submission Mode: Online Frontend Recreation</p>
                    </div>

                    <div className="glass-item-row">
                      <div className="item-row-title">
                        <span>FirstCommit '26 Quiz Competition 2.0</span>
                        <span style={{ color: 'var(--lime-accent)' }}>COMPLETED</span>
                      </div>
                      <p style={{ color: 'var(--cream-muted)', fontSize: '13px', margin: '6px 0' }}>Score: 92/100 • Certificate issued</p>
                    </div>

                    <div className="glass-item-row">
                      <div className="item-row-title">
                        <span>FirstCommit '26 Quiz Competition</span>
                        <span style={{ color: 'var(--lime-accent)' }}>COMPLETED</span>
                      </div>
                      <p style={{ color: 'var(--cream-muted)', fontSize: '13px', margin: '6px 0' }}>Score: 88/100 • Participation recorded</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: All Events Directory */}
              {activeDashTab === 'events' && (
                <div className="aura-cards-grid">
                  {hackathons.map((h) => (
                    <div key={h.id} className="aura-glass-card">
                      <div>
                        <span className="card-status-chip">● {h.status}</span>
                        <h3 className="card-title">{h.title}</h3>
                        <p className="card-desc">{h.short_description}</p>
                      </div>
                      <div className="card-footer-action">
                        <div className="card-prize-val">
                          <small>REWARDS</small>
                          <strong>{h.prize_pool}</strong>
                        </div>
                        <button className="aura-btn-coral">Sprint Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </main>
          </div>
        </section>
      )}

      {/* Floating Demo Navigation Helper Bar for easy judging */}
      <div className="aura-switch-floater">
        <span className="badge-pill">Round 2 Redesign</span>
        <button 
          className={currentPage === 'landing' ? 'active' : ''} 
          onClick={() => setCurrentPage('landing')}
        >
          1. Landing
        </button>
        <button 
          className={currentPage === 'login' ? 'active' : ''} 
          onClick={() => setCurrentPage('login')}
        >
          2. Login
        </button>
        <button 
          className={currentPage === 'register' ? 'active' : ''} 
          onClick={() => setCurrentPage('register')}
        >
          3. Register
        </button>
        <button 
          className={currentPage === 'student' ? 'active' : ''} 
          onClick={() => setCurrentPage('student')}
        >
          4. Student Dashboard
        </button>
      </div>
    </div>
  );
}
