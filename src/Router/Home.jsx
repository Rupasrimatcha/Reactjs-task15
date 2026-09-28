import { useEffect, useReducer, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useBatch } from '../context/BatchContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { addBooking } from '../redux/demoSlice'

const emptyDemo = {
  fullName: '',
  email: '',
  phone: '',
  course: '',
  demoMode: 'Online',
  preferredTime: '',
}

const availableTimes = [
  '08:00 AM — 09:00 AM',
  '09:00 AM — 10:00 AM',
  '10:00 AM — 11:00 AM',
  '11:00 AM — 12:00 PM',
  '12:00 PM — 01:00 PM',
  '02:00 PM — 03:00 PM',
  '03:00 PM — 04:00 PM',
  '04:00 PM — 05:00 PM',
  '05:00 PM — 06:00 PM',
  '06:00 PM — 07:00 PM',
  '07:00 PM — 08:00 PM',
  '08:00 PM — 09:00 PM',
]

function demoReducer(state, action) {
  switch (action.type) {
    case 'change':
      return { ...state, [action.field]: action.value }
    case 'reset':
      return emptyDemo
    default:
      return state
  }
}

export default function Home() {
  const [demoData, dispatch] = useReducer(demoReducer, emptyDemo)
  const [savedBookings, setSavedBookings] = useLocalStorage('demoBookings', [])
  const nameInputRef = useRef(null)
  const navigate = useNavigate()
  const reduxDispatch = useDispatch()
  const { selectedMode, setSelectedMode } = useBatch()

  useEffect(() => {
    nameInputRef.current?.focus()
  }, [])

  function handleDemoChange(e) {
    const { name, value } = e.target
    dispatch({ type: 'change', field: name, value })

    if (name === 'demoMode') {
      setSelectedMode(value)
    }
  }

  function handleDemoSubmit(e) {
    e.preventDefault()

    const booking = {
      id: Date.now(),
      ...demoData,
      selectedMode,
      createdAt: new Date().toISOString(),
    }

    reduxDispatch(addBooking(booking))
    setSavedBookings((prev) => [...prev, booking])

    alert('Your demo request has been sent successfully. Our team will contact you soon.')
    dispatch({ type: 'reset' })
    setSelectedMode('Online')
  }

  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Spoken English Learning Center English to Telugu</p>
          <h1>Speak fluently, confidently, and naturally.</h1>
          <p className="lead">
            Learn practical English for daily conversations, job interviews,
            presentations, and confident communication in real-life situations.
          </p>

          <div className="cta-group">
            <button type="button" onClick={() => navigate('/courses')} className="primary-btn">
              Explore Courses
            </button>
            <button type="button" onClick={() => navigate('/about')} className="secondary-btn">
              Our Method
            </button>
          </div>

          <a
            href="http://www.youtube.com/@RupasriMatcha53"
            target="_blank"
            rel="noreferrer"
            className="youtube-btn"
          >
            Subscribe on YouTube
          </a>

          <div className="mini-stats">
            <div>
              <strong>25K+</strong>
              <span>learners</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>student rating</span>
            </div>
            <div>
              <strong>8 weeks</strong>
              <span>clear progress</span>
            </div>
          </div>
        </div>

        <div className="login-card">
          <form onSubmit={handleDemoSubmit} className="login-form">
            <h2>Schedule a free demo</h2>

            <label htmlFor="demo-fullName">
              Full Name
              <input
                ref={nameInputRef}
                id="demo-fullName"
                name="fullName"
                type="text"
                value={demoData.fullName}
                onChange={handleDemoChange}
                placeholder="Enter your full name"
                required
              />
            </label>

            <label htmlFor="demo-email">
              Email
              <input
                id="demo-email"
                name="email"
                type="email"
                value={demoData.email}
                onChange={handleDemoChange}
                placeholder="Enter email"
                required
              />
            </label>

            <label htmlFor="demo-phone">
              Phone Number
              <input
                id="demo-phone"
                name="phone"
                type="tel"
                value={demoData.phone}
                onChange={handleDemoChange}
                placeholder="Enter phone number"
                required
              />
            </label>

            <label htmlFor="demo-course">
              Course Interest
              <select
                id="demo-course"
                name="course"
                value={demoData.course}
                onChange={handleDemoChange}
                required
              >
                <option value="">Select a course</option>
                <option value="Spoken English">Spoken English</option>
                <option value="Interview Skills">Interview Skills</option>
                <option value="Business English">Business English</option>
                <option value="Kids English">Kids English</option>
              </select>
            </label>

            <label htmlFor="demo-mode">
              Demo Mode
              <select
                id="demo-mode"
                name="demoMode"
                value={demoData.demoMode || selectedMode}
                onChange={handleDemoChange}
                required
              >
                <option value="select Mode">Select Mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </label>

            <label htmlFor="demo-preferredTime">
              Available Timing
              <select
                id="demo-preferredTime"
                name="preferredTime"
                value={demoData.preferredTime}
                onChange={handleDemoChange}
                required
              >
                <option value="">Select a time slot</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>

            <button type="submit">Book Demo</button>
          </form>
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <h3>Daily Conversation</h3>
          <p>Practice real-life greetings, questions, and everyday speaking with confidence.</p>
        </article>
        <article className="feature-card">
          <h3>Pronunciation</h3>
          <p>Improve stress, rhythm, and clarity through short, focused speaking drills.</p>
        </article>
        <article className="feature-card">
          <h3>Confidence Building</h3>
          <p>Learn to speak naturally and express your ideas in school, work, and travel.</p>
        </article>
      </section>
    </div>
  )
}
