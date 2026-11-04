import React, { useState } from 'react';
import { Eye, EyeOff, RotateCw, ArrowLeft, ArrowRight, CheckCircle2, User, Mail, Lock, Shield } from 'lucide-react';

export default function RegisterPage({ navigate, onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    name: 'Agasthya Shetty',
    email: 'agasthya@campuscode.dev',
    password: '',
    confirmPassword: '',
    role: 'STUDENT'
  });

  const [step, setStep] = useState('details'); // 'details' | 'otp'
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAgeAgreed, setIsAgeAgreed] = useState(true);
  const [captchaCode, setCaptchaCode] = useState('7X9M');
  const [captchaInput, setCaptchaInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const generateCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
  };

  const calculatePasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const strength = calculatePasswordStrength(formData.password);

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all mandatory fields.');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must have at least 8 characters with letters, numbers, and symbols.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!isAgeAgreed) {
      setError('You must be 18 years or older to register.');
      return;
    }

    if (captchaInput.toUpperCase() !== captchaCode.toUpperCase()) {
      setError('Invalid captcha code.');
      generateCaptcha();
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 600);
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    setError('');

    if (otp.length < 4) {
      setError('Please enter the 6-digit verification code.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onRegisterSuccess({
        id: "usr_new_" + Date.now(),
        name: formData.name,
        email: formData.email,
        role: formData.role
      });
      navigate('student');
    }, 700);
  };

  return (
    <div className="campus-login">
      <div className="login-grid"></div>
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

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

      <main className="login-main">
        <div className="login-card wide-card">
          <div className="login-card-header">
            <div>
              <span className="login-eyebrow">STUDENT & ORGANIZER ONBOARDING</span>
              <h1 className="login-title">
                {step === 'details' ? 'CREATE YOUR ACCOUNT' : 'SECURITY VERIFICATION'}
              </h1>
            </div>
            <div className="login-step-badge">
              <span>STEP</span>
              <strong>{step === 'details' ? '01 / 02' : '02 / 02'}</strong>
            </div>
          </div>

          <div className="login-divider"></div>

          {error && <div className="login-alert-error">{error}</div>}

          {step === 'details' ? (
            <form onSubmit={handleDetailsSubmit} className="login-form">
              {/* Role Toggle Selector */}
              <div className="role-selector-group">
                <button
                  type="button"
                  className={`role-tab ${formData.role === 'STUDENT' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, role: 'STUDENT' })}
                >
                  <User size={16} /> STUDENT BUILDER
                </button>
                <button
                  type="button"
                  className={`role-tab ${formData.role === 'ORGANIZER' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, role: 'ORGANIZER' })}
                >
                  <Shield size={16} /> HACKATHON ORGANIZER
                </button>
              </div>

              <div className="form-grid-two">
                <div className="login-field">
                  <label>FULL NAME</label>
                  <div className="login-input-wrap">
                    <span className="login-input-icon"><User size={16} /></span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Agasthya Shetty"
                      required
                    />
                  </div>
                </div>

                <div className="login-field">
                  <label>CAMPUS EMAIL ADDRESS</label>
                  <div className="login-input-wrap">
                    <span className="login-input-icon"><Mail size={16} /></span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@university.edu"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-grid-two">
                <div className="login-field">
                  <label>PASSWORD</label>
                  <div className="login-input-wrap">
                    <span className="login-input-icon"><Lock size={16} /></span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Min. 8 characters"
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

                <div className="login-field">
                  <label>CONFIRM PASSWORD</label>
                  <div className="login-input-wrap">
                    <span className="login-input-icon"><Lock size={16} /></span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="strength-bar-wrap">
                  <div className="strength-header">
                    <span>SECURITY STRENGTH</span>
                    <strong>{['WEAK', 'FAIR', 'GOOD', 'STRONG'][strength - 1] || 'TOO SHORT'}</strong>
                  </div>
                  <div className="strength-bars">
                    {[1, 2, 3, 4].map((idx) => (
                      <span
                        key={idx}
                        className={`strength-dot ${idx <= strength ? 'active' : ''}`}
                      ></span>
                    ))}
                  </div>
                </div>
              )}

              {/* Age Agreement & Captcha */}
              <div className="login-field checkbox-field">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={isAgeAgreed}
                    onChange={(e) => setIsAgeAgreed(e.target.checked)}
                  />
                  <span>I confirm that I am 18 years of age or older and agree to CampusCode terms.</span>
                </label>
              </div>

              <div className="login-field">
                <label>HUMAN VERIFICATION</label>
                <div className="captcha-row">
                  <div className="captcha-display-badge">
                    <span>{captchaCode}</span>
                  </div>
                  <button
                    type="button"
                    className="captcha-refresh-btn"
                    onClick={generateCaptcha}
                  >
                    <RotateCw size={14} /> NEW
                  </button>
                  <input
                    type="text"
                    className="captcha-input"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    placeholder="ENTER CAPTCHA"
                    maxLength={6}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="login-submit-btn" disabled={loading}>
                {loading ? 'INITIALIZING DISPATCH...' : 'PROCEED TO OTP VERIFICATION'} <ArrowRight size={16} />
              </button>

              <div className="login-footer-row">
                <span>ALREADY HAVE AN ACCOUNT?</span>
                <button type="button" onClick={() => navigate('login')} className="link-highlight">
                  LOGIN →
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleOtpVerify} className="login-form">
              <div className="otp-banner">
                <CheckCircle2 size={30} className="success-icon" />
                <h3>VERIFICATION CODE DISPATCHED</h3>
                <p>We sent a 6-digit verification code to <strong>{formData.email}</strong>. (For demo testing, enter <strong>262626</strong> or any 6 digits).</p>
              </div>

              <div className="login-field">
                <label>6-DIGIT VERIFICATION CODE</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">#</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="262626"
                    className="otp-input-field"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="login-submit-btn" disabled={loading}>
                {loading ? 'CONFIRMING ACCOUNT...' : 'VERIFY & ENTER STUDENT ARENA'} <ArrowRight size={16} />
              </button>

              <div className="login-footer-row">
                <button type="button" onClick={() => setStep('details')} className="link-highlight">
                  ← BACK TO EDIT DETAILS
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
