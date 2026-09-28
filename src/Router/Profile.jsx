export default function Profile() {
  return (
    <div className="page content-page profile-page">
      <header className="brand-profile-header">
        <div className="brand-profile-copy">
          <p className="eyebrow">About the brand</p>
          <h1>Videos by RS</h1>
          <p className="lead">
            A spoken English learning platform helping learners speak confidently in real life,
            from daily conversations to interviews and professional communication.
          </p>
        </div>

        <div className="brand-profile-card">
          <h3>Learning Focus</h3>
          <p>Confidence-building English for beginners, intermediates, and professionals.</p>
          <ul>
            <li>Daily speaking practice</li>
            <li>Grammar made simple</li>
            <li>Interview and business fluency</li>
          </ul>
        </div>
      </header>

      <div className="brand-profile-grid">
        <div className="progress-panel">
          <h2>Our Mission</h2>
          <p>
            Videos by RS is designed to make English learning practical, simple, and confidence-driven.
            We focus on spoken communication, not just textbook rules.
          </p>
        </div>

        <div className="progress-panel">
          <h2>What We Offer</h2>
          <p><strong>Course styles:</strong> Basic, Intermediate, and Advanced English learning paths.</p>
          <p><strong>Teaching method:</strong> Telugu-to-English explanations with application-based speaking practice.</p>
          <p><strong>Support:</strong> Demo booking, guided coaching, and trainer-based learning plans.</p>
        </div>
      </div>

      <div className="profile-insights">
        <div className="info-card">
          <h3>Core Strength</h3>
          <p>Real-life speaking confidence</p>
        </div>
        <div className="info-card">
          <h3>Speciality</h3>
          <p>English for communication and interviews</p>
        </div>
        <div className="info-card">
          <h3>Audience</h3>
          <p>Students, professionals, and job seekers</p>
        </div>
      </div>

      <div className="contact-info profile-contact-box">
        <h3>Connect with us</h3>
        <p>Email: rupasri.trainer@example.com</p>
        <p>Phone: +91  90123 45678</p>
        <p>Location: Hyderabad, India</p>
        <p>We help learners improve speaking skills for real-life communication and confidence.</p>
      </div>
    </div>
  )
}
