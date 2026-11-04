import React from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Code, 
  Users, 
  Trophy, 
  Calendar, 
  Sparkles, 
  CheckCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function LandingPage({ navigate, hackathons, user }) {
  const [activeTab, setActiveTab] = React.useState('all');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="campus-landing-page">
      {/* Top Navigation */}
      <header className="landing-navbar">
        <div className="landing-navbar-container">
          <div className="landing-brand" onClick={() => navigate('landing')}>
            <span className="brand-logo-mark">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
            <div className="brand-titles">
              <strong className="brand-title">CAMPUSCODE</strong>
              <small className="brand-subtitle">HACKATHON ARENA</small>
            </div>
          </div>

          <nav className="landing-nav-links">
            <button onClick={() => scrollToSection('about')}>ABOUT</button>
            <button onClick={() => scrollToSection('how')}>HOW IT WORKS</button>
            <button onClick={() => scrollToSection('hackathons')}>HACKATHONS</button>
            <button onClick={() => scrollToSection('community')}>COMMUNITY</button>
          </nav>

          <div className="landing-nav-actions">
            {user ? (
              <button className="landing-primary-btn" onClick={() => navigate('student')}>
                GO TO DASHBOARD <ArrowRight size={15} />
              </button>
            ) : (
              <>
                <button className="landing-login-btn" onClick={() => navigate('login')}>
                  LOGIN
                </button>
                <button className="landing-primary-btn" onClick={() => navigate('register')}>
                  JOIN CAMPUSCODE <span>↗</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="landing-hero-section">
        <div className="hero-grid-bg"></div>
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>

        <div className="hero-container">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>NEXT-GEN STUDENT CODING ARENA</span>
          </div>

          <h1 className="hero-headline">
            CODE. <span className="highlight-text">COMPETE.</span> <br />
            <em>BUILD.</em>
          </h1>

          <p className="hero-subtext">
            CampusCode brings university coders, tech teams, organizers, and collegiate hackathons into one unified, hyper-collaborative ecosystem.
          </p>

          <div className="hero-cta-group">
            <button className="hero-main-cta" onClick={() => navigate('register')}>
              START BUILDING TODAY <ArrowRight size={18} />
            </button>
            <button className="hero-secondary-cta" onClick={() => scrollToSection('hackathons')}>
              EXPLORE ACTIVE HACKATHONS
            </button>
          </div>

          <div className="hero-stats-bar">
            <div className="hero-stat-item">
              <strong>15,000+</strong>
              <span>STUDENT CODERS</span>
            </div>
            <div className="hero-stat-sep">/</div>
            <div className="hero-stat-item">
              <strong>180+</strong>
              <span>CAMPUSES CONNECTED</span>
            </div>
            <div className="hero-stat-sep">/</div>
            <div className="hero-stat-item">
              <strong>₹25L+</strong>
              <span>PRIZE GRANTS WON</span>
            </div>
            <div className="hero-stat-sep">/</div>
            <div className="hero-stat-item">
              <strong>99.4%</strong>
              <span>FAIR-EVAL ACCURACY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Active Hackathon Banner */}
      <section id="hackathons" className="landing-section">
        <div className="section-header">
          <span className="section-eyebrow">FEATURED SPRINT</span>
          <h2 className="section-title">REBUILD '26 HACKATHON</h2>
          <p className="section-desc">
            Recreate the CampusCode user flow faithfully — Dashboard, Login, Register, and Student dashboard.
          </p>
        </div>

        <div className="hackathons-grid">
          {hackathons.map((hack) => (
            <div key={hack.id} className="hackathon-card">
              <div className="hackathon-card-header">
                <span className={`status-pill status-${hack.status.toLowerCase()}`}>
                  {hack.status}
                </span>
                <span className="hackathon-mode">{hack.mode}</span>
              </div>

              <div className="hackathon-card-code">{hack.code}</div>
              <h3 className="hackathon-card-title">{hack.title}</h3>
              <p className="hackathon-card-desc">{hack.short_description}</p>

              <div className="hackathon-card-tags">
                {hack.tags.map(tag => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>

              <div className="hackathon-card-footer">
                <div>
                  <small>PRIZE POOL</small>
                  <strong>{hack.prize_pool}</strong>
                </div>
                <button 
                  className="card-action-btn"
                  onClick={() => {
                    if (user) navigate('student');
                    else navigate('login');
                  }}
                >
                  VIEW CHALLENGE <ChevronRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="landing-section dark-alt">
        <div className="section-header">
          <span className="section-eyebrow">STEP BY STEP</span>
          <h2 className="section-title">HOW CAMPUSCODE WORKS</h2>
          <p className="section-desc">From university sign-up to landing verified internships and prize pools.</p>
        </div>

        <div className="how-steps-grid">
          <div className="how-step-card">
            <div className="step-num">01</div>
            <div className="step-icon-wrap"><Users size={24} /></div>
            <h3>Build or Match Teams</h3>
            <p>Use HackMate AI to discover peers on your campus with complementary frontend, backend, or design skills.</p>
          </div>

          <div className="how-step-card">
            <div className="step-num">02</div>
            <div className="step-icon-wrap"><Terminal size={24} /></div>
            <h3>Verify Idea & Rules</h3>
            <p>Run your problem statements through IdeaCheck AI and RuleBot to ensure 100% compliance with rubric guidelines.</p>
          </div>

          <div className="how-step-card">
            <div className="step-num">03</div>
            <div className="step-icon-wrap"><Code size={24} /></div>
            <h3>Code & Submit Sprints</h3>
            <p>Submit repositories, deployed previews, and demo presentations with transparent live evaluation timestamps.</p>
          </div>

          <div className="how-step-card">
            <div className="step-num">04</div>
            <div className="step-icon-wrap"><Trophy size={24} /></div>
            <h3>Win Grants & Roles</h3>
            <p>Earn cryptographic digital credential certificates and interview fast-tracks with industry sponsors.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="landing-section">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-eyebrow">THE MISSION</span>
            <h2 className="section-title">BUILT FOR BUILDERS, BY BUILDERS</h2>
            <p>
              Traditional university portals are disconnected. CampusCode merges competitive coding, verified track records, peer matching, and round-based evaluation into a high-octane engineering dashboard.
            </p>
            <ul className="about-features">
              <li><CheckCircle size={18} className="feat-icon" /> Guaranteed anti-plagiarism & round-based gates</li>
              <li><CheckCircle size={18} className="feat-icon" /> AI-driven teammate discovery with HackMate</li>
              <li><CheckCircle size={18} className="feat-icon" /> Verifiable cryptographic student credentials</li>
            </ul>
          </div>
          <div className="about-visual">
            <div className="terminal-mock">
              <div className="mock-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="terminal-title">campuscode --status</span>
              </div>
              <div className="mock-body">
                <p className="code-line"><span className="prompt">$</span> campuscode auth --role student</p>
                <p className="code-success">✓ Authenticated as Agasthya Shetty [STUDENT]</p>
                <p className="code-line"><span className="prompt">$</span> campuscode hackathons --active</p>
                <p className="code-output">ReBuild '26 Round 1 [ACTIVE] - 4 Pages Recreation</p>
                <p className="code-line"><span className="prompt">$</span> campuscode submit --target rebuild-26</p>
                <p className="code-highlight">🚀 Ready for live demo submission!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section & Footer */}
      <section id="community" className="landing-cta-banner">
        <h2>JOIN THE COMMUNITY ARENA</h2>
        <p>Ready to prove your skills in ReBuild '26? Register now and test your recreation live.</p>
        <button className="hero-main-cta" onClick={() => navigate('register')}>
          GET STARTED NOW <ArrowRight size={18} />
        </button>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <strong>CAMPUSCODE</strong>
            <p>The developer ecosystem for collegiate hackathons and builder talent.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>PAGES</h4>
              <button onClick={() => navigate('landing')}>Dashboard Home</button>
              <button onClick={() => navigate('login')}>Login</button>
              <button onClick={() => navigate('register')}>Register</button>
              <button onClick={() => navigate('student')}>Student Panel</button>
            </div>
            <div className="footer-col">
              <h4>RESOURCES</h4>
              <a href="https://campus-code-ten.vercel.app" target="_blank" rel="noreferrer">Original App ↗</a>
              <a href="https://chat.whatsapp.com/FaW0n5jiZRj8c5mz35e5EC" target="_blank" rel="noreferrer">WhatsApp Group ↗</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CampusCode. ReBuild '26 Participant Recreation.</span>
          <span>Desktop-First Faithfully Engineered Flow</span>
        </div>
      </footer>
    </div>
  );
}
