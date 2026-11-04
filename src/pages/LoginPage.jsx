import React, { useState } from 'react';
import { Eye, EyeOff, RotateCw, ArrowLeft, ArrowRight, ShieldCheck, Mail, Lock } from 'lucide-react';

export default function LoginPage({ navigate, onLoginSuccess }) {
  const [email, setEmail] = useState('agasthya@campuscode.dev');
  const [password, setPassword] = useState('CampusCode2026!');
  const [showPassword, setShowPassword] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('8F4K');
  const [viewMode, setViewMode] = useState('credentials'); // 'credentials' | 'forgot'
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const generateCaptcha = () => {
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
    setError('');

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    if (captchaInput.toUpperCase() !== captchaCode.toUpperCase()) {
      setError('Invalid captcha verification code. Please try again.');
      generateCaptcha();
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess({
        id: "usr_2026_cc",
        name: email.split('@')[0].toUpperCase(),
        email: email,
        role: "STUDENT"
      });
      navigate('student');
    }, 800);
  };

  const handleForgot = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your registered email address.');
      return;
    }
    setResetSent(true);
    setError('');
  };

  return (
    <div className="campus-login">
      {/* Dynamic Cyber Grid and SVG Wave Background */}
      <div className="login-grid"></div>
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      <div className="login-network" aria-hidden="true">
        <svg viewBox="0 0 1400 800" preserveAspectRatio="none">
          <path d="M0 600 C180 450 250 620 420 430 S680 80 900 270 S1150 500 1400 180" />
          <path d="M80 130 C280 300 380 80 570 270 S800 620 1080 500 S1250 400 1400 620" />
          <path d="M250 800 C400 600 570 650 720 460 S970 180 1160 80" />
          <circle cx="420" cy="430" r="4" />
          <circle cx="900" cy="270" r="4" />
          <circle cx="570" cy="270" r="4" />
          <circle cx="1080" cy="500" r="4" />
        </svg>
      </div>

      {/* Top Bar inside Login */}
      <nav className="login-nav">
        <button type="button" className="login-brand" onClick={() => navigate('landing')}>
          <span className="brand-logo-mark">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="login-brand-titles">
            <strong>CAMPUSCODE</strong>
            <small>HACKATHON ARENA</small>
          </div>
        </button>

        <button type="button" className="login-back" onClick={() => navigate('landing')}>
          <ArrowLeft size={14} /> BACK TO HOME
        </button>
      </nav>

      {/* Main Login Card */}
      <main className="login-main">
        <div className="login-card">
          <div className="login-card-header">
            <div>
              <span className="login-eyebrow">AUTHENTICATION GATEWAY</span>
              <h1 className="login-title">
                {viewMode === 'credentials' ? 'LOGIN TO ARENA' : 'RESET PASSWORD'}
              </h1>
            </div>
            <div className="login-step-badge">
              <span>STEP</span>
              <strong>{viewMode === 'credentials' ? '01' : 'RESET'}</strong>
            </div>
          </div>

          <div className="login-divider"></div>

          {error && <div className="login-alert-error">{error}</div>}

          {viewMode === 'credentials' ? (
            <form onSubmit={handleLogin} className="login-form">
              <div className="login-field">
                <label>INSTITUTIONAL OR REGISTERED EMAIL</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon"><Mail size={16} /></span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@university.edu"
                    required
                  />
                </div>
              </div>

              <div className="login-field">
                <div className="label-with-action">
                  <label>PASSWORD</label>
                  <button 
                    type="button" 
                    className="forgot-text-btn" 
                    onClick={() => { setViewMode('forgot'); setError(''); }}
                  >
                    FORGOT PASSWORD?
                  </button>
                </div>
                <div className="login-input-wrap">
                  <span className="login-input-icon"><Lock size={16} /></span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Bot Check Captcha */}
              <div className="login-field">
                <label>VERIFICATION CODE</label>
                <div className="captcha-row">
                  <div className="captcha-display-badge">
                    <span>{captchaCode}</span>
                  </div>
                  <button
                    type="button"
                    className="captcha-refresh-btn"
                    onClick={generateCaptcha}
                    title="Generate new captcha"
                  >
                    <RotateCw size={14} /> NEW
                  </button>
                  <input
                    type="text"
                    className="captcha-input"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    placeholder="ENTER CODE"
                    maxLength={6}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="login-submit-btn" disabled={loading}>
                {loading ? 'AUTHENTICATING...' : 'SIGN IN TO DASHBOARD'} <ArrowRight size={16} />
              </button>

              <div className="login-footer-row">
                <span>NEW TO CAMPUSCODE?</span>
                <button type="button" onClick={() => navigate('register')} className="link-highlight">
                  CREATE ACCOUNT →
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleForgot} className="login-form">
              {resetSent ? (
                <div className="reset-success-box">
                  <ShieldCheck size={32} className="success-icon" />
                  <h3>OTP Code Dispatched</h3>
                  <p>A verification code was sent to <strong>{email}</strong>. Use your security code to reset your credentials.</p>
                  <button
                    type="button"
                    className="login-submit-btn"
                    onClick={() => { setViewMode('credentials'); setResetSent(false); }}
                  >
                    RETURN TO SIGN IN
                  </button>
                </div>
              ) : (
                <>
                  <p className="forgot-explain">
                    Enter the email associated with your CampusCode student or organizer account. We will transmit a single-use verification code.
                  </p>
                  <div className="login-field">
                    <label>EMAIL ADDRESS</label>
                    <div className="login-input-wrap">
                      <span className="login-input-icon"><Mail size={16} /></span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@campus.edu"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="login-submit-btn">
                    SEND RESET OTP <ArrowRight size={16} />
                  </button>
                  <div className="login-footer-row">
                    <button type="button" onClick={() => setViewMode('credentials')} className="link-highlight">
                      ← BACK TO LOGIN
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
