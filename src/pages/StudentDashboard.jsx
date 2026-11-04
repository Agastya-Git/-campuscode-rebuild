import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Sparkles, 
  Award, 
  CreditCard, 
  Bot, 
  BookOpen, 
  Bell, 
  HelpCircle, 
  User, 
  LogOut, 
  Menu, 
  X, 
  ExternalLink, 
  CheckCircle, 
  Clock, 
  Send,
  Search,
  ChevronRight,
  TrendingUp,
  Shield,
  Layers
} from 'lucide-react';

export default function StudentDashboard({ user, hackathons, notifications, certificates, onLogout, navigate }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userNotifications, setUserNotifications] = useState(notifications);
  const [selectedHackathon, setSelectedHackathon] = useState(hackathons[0]);
  
  // Interactive IdeaCheck / RuleBot mock states
  const [ideaInput, setIdeaInput] = useState('');
  const [ideaResult, setIdeaResult] = useState(null);
  const [ideaLoading, setIdeaLoading] = useState(false);

  const [ruleQuestion, setRuleQuestion] = useState('');
  const [ruleAnswer, setRuleAnswer] = useState(null);

  const unreadCount = userNotifications.filter(n => !n.is_read).length;

  const handleMarkAllRead = () => {
    setUserNotifications(userNotifications.map(n => ({ ...n, is_read: true })));
  };

  const checkIdea = (e) => {
    e.preventDefault();
    if (!ideaInput.trim()) return;
    setIdeaLoading(true);
    setTimeout(() => {
      setIdeaLoading(false);
      setIdeaResult({
        score: "94/100",
        feasibility: "Very High",
        novelty: "Strong Collegiate Match",
        feedback: "Great alignment with ReBuild '26! Recreating the 4 core pages with high desktop fidelity and responsive state management covers all evaluation points for Round 1."
      });
    }, 900);
  };

  const askRuleBot = (e) => {
    e.preventDefault();
    if (!ruleQuestion.trim()) return;
    setRuleAnswer({
      q: ruleQuestion,
      a: "For ReBuild '26: You must faithfully recreate 4 pages: Public Dashboard, Login, Register, and Student Dashboard. Frontend-only with mock data is accepted. Submit live demo link + GitHub repository before 6 Nov 10:00 PM."
    });
  };

  const navItems = [
    { name: 'Overview', icon: <LayoutDashboard size={18} /> },
    { name: 'Events', icon: <Calendar size={18} /> },
    { name: 'My Events', icon: <Layers size={18} /> },
    { name: 'HackMate AI', icon: <Sparkles size={18} /> },
    { name: 'IdeaCheck AI', icon: <Bot size={18} /> },
    { name: 'RuleBot AI', icon: <Shield size={18} /> },
    { name: 'Certificates', icon: <Award size={18} /> },
    { name: 'Digital Card', icon: <CreditCard size={18} /> },
    { name: 'Student Guide', icon: <BookOpen size={18} /> },
    { name: 'Notifications', icon: <Bell size={18} />, badge: unreadCount },
    { name: 'Help & Support', icon: <HelpCircle size={18} /> },
    { name: 'Profile', icon: <User size={18} /> },
  ];

  return (
    <div className="student-panel">
      {/* Background Gradients */}
      <div className="student-bg-grid"></div>
      <div className="student-bg-orb one"></div>
      <div className="student-bg-orb two"></div>

      {/* Mobile Topbar */}
      <div className="student-mobile-topbar">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="student-menu-button">
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="mobile-brand" onClick={() => navigate('landing')}>
          CAMPUSCODE
        </div>
        <div className="student-mobile-avatar">
          {user?.name?.slice(0, 2).toUpperCase() || 'AS'}
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`student-sidebar ${sidebarOpen ? 'student-sidebar-open' : ''}`}>
        <button className="student-sidebar-close" onClick={() => setSidebarOpen(false)}>
          ‹
        </button>

        <div className="student-brand" onClick={() => navigate('landing')}>
          <span className="brand-logo-mark">
            <span></span><span></span><span></span>
          </span>
          <div className="brand-titles">
            <strong>CAMPUSCODE</strong>
            <small>STUDENT ARENA</small>
          </div>
        </div>

        <div className="sidebar-label">WORKSPACE</div>
        <nav className="student-nav">
          {navItems.map((item) => (
            <button
              key={item.name}
              type="button"
              className={`student-nav-item ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(item.name);
                setSidebarOpen(false);
              }}
            >
              <span className="student-nav-icon">{item.icon}</span>
              <span className="nav-title-text">{item.name}</span>
              {item.badge > 0 && <span className="nav-badge">{item.badge}</span>}
              {activeTab === item.name && <b className="nav-arrow">→</b>}
            </button>
          ))}
        </nav>

        <div className="student-sidebar-bottom">
          <div className="sidebar-label">ACCOUNT</div>
          <div className="sidebar-user">
            <div className="avatar-circle">
              {user?.name?.slice(0, 2).toUpperCase() || 'AS'}
            </div>
            <div className="user-info">
              <strong>{user?.name || 'Agasthya Shetty'}</strong>
              <small>{user?.role || 'STUDENT'}</small>
            </div>
          </div>
          <button type="button" className="logout-btn" onClick={onLogout}>
            <LogOut size={15} /> LOG OUT
          </button>
        </div>
      </aside>

      {/* Main Student Content */}
      <main className="student-main">
        {/* Top Header Bar */}
        <header className="student-topbar">
          <div className="topbar-breadcrumbs">
            <span>CAMPUSCODE / STUDENT</span>
            <strong>{activeTab.toUpperCase()}</strong>
          </div>

          <div className="student-top-actions">
            <button
              type="button"
              className="student-top-notification"
              onClick={() => setActiveTab('Notifications')}
              title="Notifications"
            >
              <Bell size={18} />
              {unreadCount > 0 && <b className="notif-badge">{unreadCount}</b>}
            </button>

            <div className="topbar-user" onClick={() => setActiveTab('Profile')}>
              <div className="topbar-avatar">
                {user?.name?.slice(0, 2).toUpperCase() || 'AS'}
              </div>
              <span className="topbar-username">{user?.name || 'Agasthya Shetty'}</span>
            </div>
          </div>
        </header>

        {/* Tab View Container */}
        <div className="student-content">
          {/* TAB: OVERVIEW */}
          {activeTab === 'Overview' && (
            <div className="student-view-fade">
              {/* Welcome Banner */}
              <div className="student-hero">
                <div className="student-hero-copy">
                  <span className="hero-kicker">BUILD · LEARN · COLLABORATE</span>
                  <h2>{selectedHackathon?.title || "ReBuild '26 — The Dashboard Recreation Hackathon"}</h2>
                  <p>
                    {selectedHackathon?.description || "Recreate the CampusCode user flow faithfully — Dashboard, Login, Register, and Student dashboard."}
                  </p>
                  <div className="hero-btn-row">
                    <button className="student-primary-btn" onClick={() => setActiveTab('Events')}>
                      OPEN EVENT SPRINT <b>↗</b>
                    </button>
                    <button className="student-secondary-btn" onClick={() => setActiveTab('RuleBot AI')}>
                      CHECK SUBMISSION RULES
                    </button>
                  </div>
                </div>

                <div className="student-hero-avatars">
                  <div className="large-avatar-card">
                    <div className="avatar-big">{user?.name?.slice(0, 2).toUpperCase() || 'AS'}</div>
                    <div className="avatar-meta">
                      <strong>{user?.name || 'Agasthya Shetty'}</strong>
                      <span>STATUS: QUALIFIED R1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Stats Metric Counters */}
              <div className="student-stats-grid">
                <div className="stat-card">
                  <span className="stat-label">REGISTERED</span>
                  <div className="stat-number">{user?.stats?.registered ?? 3}</div>
                  <span className="stat-detail">CAMPUS SPRINT TRACKS</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">ONGOING</span>
                  <div className="stat-number accent-cyan">{user?.stats?.ongoing ?? 1}</div>
                  <span className="stat-detail">ACTIVE SPRINT</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">COMPLETED</span>
                  <div className="stat-number">{user?.stats?.completed ?? 4}</div>
                  <span className="stat-detail">EVALUATED PROJECTS</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">CERTIFICATES</span>
                  <div className="stat-number accent-purple">{user?.stats?.certificates ?? 2}</div>
                  <span className="stat-detail">VERIFIED CREDENTIALS</span>
                </div>
              </div>

              {/* Enrich Cards: Upcoming Deadlines & AI Teammates */}
              <div className="student-enrich">
                {/* Upcoming Deadlines */}
                <div className="student-panel-card enrich-card">
                  <div className="student-panel-title">
                    <span>UPCOMING DEADLINES</span>
                    <button onClick={() => setActiveTab('Events')}>VIEW ALL ↗</button>
                  </div>
                  <div className="enrich-deadlines">
                    <div className="enrich-deadline">
                      <div className="enrich-date">
                        <strong>06 NOV</strong>
                        <small>10:00 PM</small>
                      </div>
                      <div className="enrich-deadline-info">
                        <strong>ReBuild '26 — Round 1 Demo & Code</strong>
                        <span>FINAL SPRINT SUBMISSION</span>
                      </div>
                    </div>
                    <div className="enrich-deadline">
                      <div className="enrich-date">
                        <strong>14 NOV</strong>
                        <small>09:00 AM</small>
                      </div>
                      <div className="enrich-deadline-info">
                        <strong>AlgoQuest Hackathon Start</strong>
                        <span>DATA STRUCTURES ARENA</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Spotlight */}
                <div className="student-panel-card enrich-card enrich-ai">
                  <div className="student-panel-title">
                    <span>AI SPOTLIGHT</span>
                  </div>
                  <h3>Your AI teammates are ready.</h3>
                  <p>Check your architecture idea, match with teammates, or audit the rubric rules in real-time.</p>
                  <div className="enrich-ai-actions">
                    <button onClick={() => setActiveTab('IdeaCheck AI')}>
                      <Sparkles size={14} /> IDEACHECK
                    </button>
                    <button onClick={() => setActiveTab('HackMate AI')}>
                      <User size={14} /> HACKMATE
                    </button>
                    <button onClick={() => setActiveTab('RuleBot AI')}>
                      <Shield size={14} /> RULEBOT
                    </button>
                  </div>
                </div>

                {/* Journey Progress */}
                <div className="student-panel-card enrich-card">
                  <div className="student-panel-title">
                    <span>YOUR JOURNEY</span>
                    <button onClick={() => setActiveTab('Certificates')}>CREDENTIALS ↗</button>
                  </div>
                  <div className="enrich-journey">
                    <div className="journey-item">
                      <span>Hackathons</span>
                      <div className="progress-bar"><div className="fill" style={{ width: '75%' }}></div></div>
                      <strong>3</strong>
                    </div>
                    <div className="journey-item">
                      <span>Completed</span>
                      <div className="progress-bar"><div className="fill" style={{ width: '100%' }}></div></div>
                      <strong>4</strong>
                    </div>
                    <div className="journey-item">
                      <span>Certificates</span>
                      <div className="progress-bar"><div className="fill" style={{ width: '50%' }}></div></div>
                      <strong>2</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Column Section: Current Activity & Notifications */}
              <div className="student-two-col">
                <div className="student-panel-card">
                  <div className="student-panel-title">
                    <span>01 / CURRENT ACTIVITY</span>
                    <button onClick={() => setActiveTab('Events')}>VIEW ALL ↗</button>
                  </div>
                  <div className="current-event-box">
                    <div className="current-event-code">CC-REBUILD-26</div>
                    <h3>ReBuild '26 — The Dashboard Recreation Hackathon</h3>
                    <div className="current-event-meta">
                      <span className="badge-status-ongoing">ROUND 1 ACTIVE</span>
                      <span>ONLINE / DESKTOP-FIRST</span>
                      <span>DEADLINE: 06 NOV, 10:00 PM IST</span>
                    </div>
                    <div className="rebuild-checklist">
                      <h4>Submission Checklist:</h4>
                      <ul>
                        <li><CheckCircle size={15} color="#10b981" /> Public Dashboard (Landing) faithfully rebuilt</li>
                        <li><CheckCircle size={15} color="#10b981" /> Authentication Gateway (Login) recreated</li>
                        <li><CheckCircle size={15} color="#10b981" /> Student / Organizer Register flow with OTP</li>
                        <li><CheckCircle size={15} color="#10b981" /> Student Dashboard with responsive tabs & metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="student-panel-card">
                  <div className="student-panel-title">
                    <span>02 / LIVE NOTIFICATIONS</span>
                    <button onClick={() => setActiveTab('Notifications')}>OPEN ALL ↗</button>
                  </div>
                  <div className="notification-mini-list">
                    {userNotifications.slice(0, 3).map(n => (
                      <div key={n.id} className={`notification-mini ${n.is_read ? 'read' : 'unread'}`}>
                        <span className="live-dot"></span>
                        <div className="notif-content">
                          <strong>{n.title}</strong>
                          <p>{n.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: EVENTS */}
          {activeTab === 'Events' && (
            <div className="student-view-fade">
              <div className="section-tab-header">
                <h2>EXPLORE HACKATHONS</h2>
                <p>Browse open sprints, registration deadlines, and college tech competitions.</p>
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
                      {hack.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                    </div>
                    <div className="hackathon-card-footer">
                      <div>
                        <small>PRIZE POOL</small>
                        <strong>{hack.prize_pool}</strong>
                      </div>
                      <button 
                        className="card-action-btn"
                        onClick={() => {
                          setSelectedHackathon(hack);
                          setActiveTab('Overview');
                        }}
                      >
                        SET ACTIVE ↗
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: MY EVENTS */}
          {activeTab === 'My Events' && (
            <div className="student-view-fade">
              <div className="section-tab-header">
                <h2>MY REGISTERED EVENTS</h2>
                <p>Events you are currently participating in or have completed.</p>
              </div>

              <div className="my-events-list">
                {hackathons.filter(h => h.registered).map(h => (
                  <div key={h.id} className="my-event-card">
                    <div className="event-info">
                      <span className="event-code-badge">{h.code}</span>
                      <h3>{h.title}</h3>
                      <p>{h.description}</p>
                    </div>
                    <div className="event-action-col">
                      <span className={`status-badge status-${h.status.toLowerCase()}`}>{h.status}</span>
                      <button className="student-primary-btn" onClick={() => { setSelectedHackathon(h); setActiveTab('Overview'); }}>
                        GO TO WORKSPACE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: HACKMATE AI */}
          {activeTab === 'HackMate AI' && (
            <div className="student-view-fade">
              <div className="section-tab-header">
                <h2>HACKMATE AI — TEAMMATES MATCHING</h2>
                <p>Find university peers with complementary skills for ReBuild '26 or upcoming team hackathons.</p>
              </div>

              <div className="teammates-grid">
                {[
                  { name: "Devansh Nair", role: "Backend Engineer", college: "IIT Bombay", skills: ["Go", "Node.js", "PostgreSQL", "Docker"] },
                  { name: "Pooja Sharma", role: "UI/UX Designer", college: "NID Ahmedabad", skills: ["Figma", "Design Systems", "Prototyping"] },
                  { name: "Rohan Varma", role: "Fullstack Developer", college: "BITS Pilani", skills: ["React", "Next.js", "TypeScript", "Tailwind"] }
                ].map((mate, i) => (
                  <div key={i} className="mate-card">
                    <div className="mate-avatar">{mate.name.slice(0, 2).toUpperCase()}</div>
                    <h3>{mate.name}</h3>
                    <span className="mate-role">{mate.role}</span>
                    <small className="mate-college">{mate.college}</small>
                    <div className="mate-skills">
                      {mate.skills.map(s => <span key={s} className="tag-pill">{s}</span>)}
                    </div>
                    <button className="mate-invite-btn">
                      INVITE TO TEAM ↗
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: IDEACHECK AI */}
          {activeTab === 'IdeaCheck AI' && (
            <div className="student-view-fade">
              <div className="section-tab-header">
                <h2>IDEACHECK AI — ARCHITECTURE & VIABILITY</h2>
                <p>Submit your hackathon problem statement or design concept for algorithmic assessment.</p>
              </div>

              <div className="ideacheck-box">
                <form onSubmit={checkIdea}>
                  <label>DESCRIBE YOUR REBUILD '26 ARCHITECTURE & FEATURES</label>
                  <textarea
                    rows={5}
                    value={ideaInput}
                    onChange={(e) => setIdeaInput(e.target.value)}
                    placeholder="e.g. Recreating the CampusCode user flow faithfully: Public landing page, Login with captcha & OTP reset, Register with role toggle & password strength, and the Student Dashboard with interactive tabs and responsive layout..."
                  />
                  <button type="submit" className="student-primary-btn" disabled={ideaLoading}>
                    {ideaLoading ? 'RUNNING AI AUDIT...' : 'ANALYZE CONCEPT'} <Sparkles size={16} />
                  </button>
                </form>

                {ideaResult && (
                  <div className="ideacheck-result">
                    <div className="result-score-badge">
                      <span>RUBRIC SCORE</span>
                      <strong>{ideaResult.score}</strong>
                    </div>
                    <div className="result-details">
                      <h4>Audit Summary:</h4>
                      <p><strong>Feasibility:</strong> {ideaResult.feasibility}</p>
                      <p><strong>Novelty / Alignment:</strong> {ideaResult.novelty}</p>
                      <p className="feedback-text">{ideaResult.feedback}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: RULEBOT AI */}
          {activeTab === 'RuleBot AI' && (
            <div className="student-view-fade">
              <div className="section-tab-header">
                <h2>RULEBOT AI — REBUILD '26 FAQ & COMPLIANCE</h2>
                <p>Instant answers on submission requirements, rules, deadlines, and eligibility.</p>
              </div>

              <div className="rulebot-box">
                <form onSubmit={askRuleBot} className="rulebot-form">
                  <input
                    type="text"
                    value={ruleQuestion}
                    onChange={(e) => setRuleQuestion(e.target.value)}
                    placeholder="Ask RuleBot: What are the exact submission deliverables for Round 1?"
                  />
                  <button type="submit" className="student-primary-btn">
                    <Send size={16} /> ASK RULEBOT
                  </button>
                </form>

                {ruleAnswer ? (
                  <div className="rulebot-response">
                    <div className="q-bubble"><strong>You asked:</strong> {ruleAnswer.q}</div>
                    <div className="a-bubble">
                      <Shield size={20} className="shield-icon" />
                      <div>
                        <strong>CampusCode RuleBot Verified Answer:</strong>
                        <p>{ruleAnswer.a}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rulebot-quick-prompts">
                    <span>POPULAR INQUIRIES:</span>
                    <button onClick={() => setRuleQuestion('Can I submit Round 1 without a team?')}>
                      Can I submit Round 1 without a team?
                    </button>
                    <button onClick={() => setRuleQuestion('What 4 pages must be recreated?')}>
                      What 4 pages must be recreated?
                    </button>
                    <button onClick={() => setRuleQuestion('When is the Round 1 deadline?')}>
                      When is the Round 1 deadline?
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: CERTIFICATES */}
          {activeTab === 'Certificates' && (
            <div className="student-view-fade">
              <div className="section-tab-header">
                <h2>VERIFIED CREDENTIALS & CERTIFICATES</h2>
                <p>Cryptographically secured proof of participation and achievement at CampusCode.</p>
              </div>

              <div className="certificates-grid">
                {certificates.map((cert) => (
                  <div key={cert.id} className="certificate-card">
                    <div className="cert-badge"><Award size={36} /></div>
                    <h3>{cert.title}</h3>
                    <div className="cert-meta">
                      <span>ISSUED: {cert.issueDate}</span>
                      <span>CREDENTIAL: {cert.credentialId}</span>
                      <strong className="cert-grade">{cert.grade}</strong>
                    </div>
                    <div className="cert-actions">
                      <button className="cert-download-btn">DOWNLOAD PDF ↗</button>
                      <button className="cert-verify-btn">VERIFY HASH</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: DIGITAL CARD */}
          {activeTab === 'Digital Card' && (
            <div className="student-view-fade">
              <div className="section-tab-header">
                <h2>STUDENT DIGITAL ID CARD</h2>
                <p>Your official verifiable collegiate coder pass for hackathon check-ins.</p>
              </div>

              <div className="digital-card-container">
                <div className="digital-id-card">
                  <div className="card-top">
                    <span className="card-logo">CAMPUSCODE // ARENA PASS</span>
                    <span className="card-chip"></span>
                  </div>
                  <div className="card-middle">
                    <div className="card-avatar">{user?.name?.slice(0, 2).toUpperCase() || 'AS'}</div>
                    <div className="card-details">
                      <h2>{user?.name || 'Agasthya Shetty'}</h2>
                      <span className="role-tag">VERIFIED STUDENT BUILDER</span>
                      <p>{user?.institution || 'National Institute of Technology'}</p>
                    </div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-id-num">ID: CC-2026-9812-749</div>
                    <div className="card-qr-mock">QR VALIDATED</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: NOTIFICATIONS */}
          {activeTab === 'Notifications' && (
            <div className="student-view-fade">
              <div className="section-tab-header-row">
                <div>
                  <h2>NOTIFICATIONS</h2>
                  <p>System announcements, event approvals, and round milestones.</p>
                </div>
                <button className="mark-read-btn" onClick={handleMarkAllRead}>
                  MARK ALL AS READ
                </button>
              </div>

              <div className="notifications-full-list">
                {userNotifications.map(n => (
                  <div key={n.id} className={`notification-row ${n.is_read ? 'read' : 'unread'}`}>
                    <div className="notif-indicator"></div>
                    <div className="notif-info">
                      <div className="notif-header">
                        <strong>{n.title}</strong>
                        <small>{new Date(n.created_at).toLocaleDateString()}</small>
                      </div>
                      <p>{n.message}</p>
                      {n.body && <small className="notif-body-note">{n.body}</small>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: STUDENT GUIDE */}
          {activeTab === 'Student Guide' && (
            <div className="student-view-fade">
              <div className="section-tab-header">
                <h2>STUDENT WORKSPACE GUIDE</h2>
                <p>Learn how to maximize your score and advance across the 4 stages.</p>
              </div>
              <div className="student-guide-grid">
                <div className="guide-card">
                  <span className="guide-num">01</span>
                  <h3>GET STARTED</h3>
                  <p>Use your Dashboard to track your current sprints, milestones, and upcoming submission timers.</p>
                </div>
                <div className="guide-card">
                  <span className="guide-num">02</span>
                  <h3>JOIN A HACKATHON</h3>
                  <p>Open the Events tab, select a track, register, and confirm your team or individual entry.</p>
                </div>
                <div className="guide-card">
                  <span className="guide-num">03</span>
                  <h3>FORM A SQUAD</h3>
                  <p>Visit HackMate AI to match skills and team up before the Round 1 lock timestamp.</p>
                </div>
                <div className="guide-card">
                  <span className="guide-num">04</span>
                  <h3>SUBMIT & WIN</h3>
                  <p>Upload your repository, hosted preview link, and demo video for peer and judge evaluations.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB: HELP & SUPPORT */}
          {activeTab === 'Help & Support' && (
            <div className="student-view-fade">
              <div className="section-tab-header">
                <h2>HELP & COMMUNITY SUPPORT</h2>
                <p>Have questions regarding Round 1 submissions or test mock credentials?</p>
              </div>
              <div className="help-box">
                <p>
                  Official WhatsApp Support Group: <br />
                  <a href="https://chat.whatsapp.com/FaW0n5jiZRj8c5mz35e5EC" target="_blank" rel="noreferrer" className="link-highlight">
                    Join Official CampusCode WhatsApp Group ↗
                  </a>
                </p>
                <p>Reference live dashboard: <a href="https://campus-code-ten.vercel.app" target="_blank" rel="noreferrer" className="link-highlight">campus-code-ten.vercel.app ↗</a></p>
              </div>
            </div>
          )}

          {/* TAB: PROFILE */}
          {activeTab === 'Profile' && (
            <div className="student-view-fade">
              <div className="section-tab-header">
                <h2>STUDENT PROFILE</h2>
                <p>Manage your developer credentials and collegiate details.</p>
              </div>

              <div className="profile-details-card">
                <div className="profile-avatar-row">
                  <div className="avatar-big">{user?.name?.slice(0, 2).toUpperCase() || 'AS'}</div>
                  <div>
                    <h3>{user?.name || 'Agasthya Shetty'}</h3>
                    <p>{user?.email || 'agasthya@campuscode.dev'}</p>
                    <span className="role-tag">ROLE: {user?.role || 'STUDENT'}</span>
                  </div>
                </div>

                <div className="profile-fields-grid">
                  <div className="field-block">
                    <label>INSTITUTION</label>
                    <input type="text" readOnly value={user?.institution || 'National Institute of Technology'} />
                  </div>
                  <div className="field-block">
                    <label>HACKATHONS REGISTERED</label>
                    <input type="text" readOnly value={user?.stats?.registered ?? 3} />
                  </div>
                  <div className="field-block">
                    <label>VERIFIED BADGES</label>
                    <input type="text" readOnly value="ReBuild '26 Round 1 Contender" />
                  </div>
                  <div className="field-block">
                    <label>TEAM STATUS</label>
                    <input type="text" readOnly value="Individual Contender" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
