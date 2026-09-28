import React, { useRef, useState } from 'react'

const allDayThreeHourSlots = [
  '09:00 AM - 12:00 PM',
  '02:00 PM - 05:00 PM',
  '06:00 PM - 09:00 PM',
]

const trainers = [
  {
    name: 'Ananya',
    experience: '5 years of spoken English coaching',
    qualification: 'M.A. English, TESOL Certified',
    email: 'ananya.trainer@example.com',
    phone: '+91 98765 43210',
    focus: 'Conversation & confidence',
    timings: ['Mon: 09:00 AM - 12:00 PM', 'Wed: 03:00 PM - 06:00 PM', 'Sat: 10:00 AM - 01:00 PM'],
    note: 'Available for 3-hour demo slots',
  },
  {
    name: 'Vikram',
    experience: '7 years of interview coaching',
    qualification: 'B.Com, IELTS Trainer',
    email: 'vikram.trainer@example.com',
    phone: '+91 99887 66554',
    focus: 'Business & interview English',
    timings: ['Tue: 10:00 AM - 01:00 PM', 'Thu: 05:00 PM - 08:00 PM', 'Sun: 09:00 AM - 12:00 PM'],
    note: 'Available for 3-hour demo slots',
  },
  {
    name: 'Sushma',
    experience: '4 years of beginner to advanced learning',
    qualification: 'B.A. English, Spoken English Expert',
    email: 'sushma.trainer@example.com',
    phone: '+91 91234 56789',
    focus: 'Grammar & fluency',
    timings: ['Mon: 04:00 PM - 07:00 PM', 'Fri: 02:00 PM - 05:00 PM', 'Sat: 06:00 PM - 09:00 PM'],
    note: 'Available for 3-hour demo slots',
  },
  {
    name: 'Pavani',
    experience: '8 years of all-level spoken English mentoring',
    qualification: 'M.A. English, Communication Coach',
    email: 'pavani.trainer@example.com',
    phone: '+91 93456 12345',
    focus: 'All timings & all English levels',
    timings: allDayThreeHourSlots,
    note: 'Available for 3-hour demo slots each day',
  },
  {
    name: 'Rupasri Matcha',
    experience: '10 years of spoken English and communication coaching',
    qualification: 'M.A. English, Corporate Trainer',
    email: 'rupasri.trainer@example.com',
    phone: '+91 90123 45678',
    focus: 'All timings & all levels',
    timings: allDayThreeHourSlots,
    note: 'Available for 3-hour demo slots each day',
  },
  {
    name: 'Swapna',
    experience: '6 years of spoken English and fluency coaching',
    qualification: 'B.A. English, Pronunciation Specialist',
    email: 'swapna.trainer@example.com',
    phone: '+91 98876 54321',
    focus: 'Fluency, pronunciation & confidence',
    timings: allDayThreeHourSlots,
    note: 'Available for 3-hour demo slots each day',
  },
  {
    name: 'Arjun Kumar',
    experience: '9 years of professional English coaching',
    qualification: 'M.A. English, Soft Skills Trainer',
    email: 'arjun.trainer@example.com',
    phone: '+91 97654 32109',
    focus: 'Grammar, interviews & workplace English',
    timings: allDayThreeHourSlots,
    note: 'Available for 3-hour demo slots each day',
  },
]

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  goal: '',
  preferredTime: '',
}

export default function Contact() {
  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const [demoForm, setDemoForm] = useState(emptyForm)
  const [demoStatus, setDemoStatus] = useState('')
  const trainerListRef = useRef(null)
  const selectedTrainerDetails = trainers.find((trainer) => trainer.name === selectedTrainer)

  const scrollTrainerCards = (direction) => {
    trainerListRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' })
  }

  const handleDemoRequest = (trainerName) => {
    setSelectedTrainer(trainerName)
    setDemoForm((prev) => ({ ...prev, preferredTime: '' }))
    setDemoStatus('')
  }

  const handleDemoFormChange = (event) => {
    const { name, value } = event.target
    setDemoForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleDemoSubmit = (event) => {
    event.preventDefault()

    if (!selectedTrainer) {
      return
    }

    setDemoStatus(alert(`Demo request sent to ${selectedTrainer}. Waiting for the trainer to accept the request.`))
    setDemoForm(emptyForm)
    setSelectedTrainer(null)
  }

  return (
    <div className="page content-page contact-page">
      

      {demoStatus && <p className="demo-status" role="status">{demoStatus}</p>}

      {selectedTrainer && (
        <div className="modal-overlay" onClick={() => setSelectedTrainer(null)}>
          <div className="demo-form-card modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <h2>Book a demo with {selectedTrainer}</h2>
              <button type="button" className="close-modal-btn" onClick={() => setSelectedTrainer(null)}>
                ×
              </button>
            </div>

            <form className="demo-form" onSubmit={handleDemoSubmit}>
              <div className="form-row">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    value={demoForm.name}
                    onChange={handleDemoFormChange}
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={demoForm.email}
                    onChange={handleDemoFormChange}
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={demoForm.phone}
                    onChange={handleDemoFormChange}
                    placeholder="Your phone number"
                    required
                  />
                </label>

                <label>
                  Preferred Time
                  <select
                    name="preferredTime"
                    value={demoForm.preferredTime}
                    onChange={handleDemoFormChange}
                    required
                  >
                    <option value="">Select a time</option>
                    {selectedTrainerDetails?.timings.map((timing) => (
                      <option value={timing} key={timing}>{timing}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Your Goal
                <textarea
                  rows="4"
                  name="goal"
                  value={demoForm.goal}
                  onChange={handleDemoFormChange}
                  placeholder="I want to improve my spoken English and interview confidence."
                  required
                />
              </label>

              <div className="demo-form-actions">
                <button type="submit" className="trainer-demo-btn">Send Demo Request</button>
                <button type="button" className="secondary-demo-btn" onClick={() => setSelectedTrainer(null)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="trainer-section">
        <h2>Meet Our Trainers</h2>

        <div className="trainer-carousel">
          <button
            type="button"
            className="trainer-scroll-btn"
            onClick={() => scrollTrainerCards(-1)}
            aria-label="Show previous trainers"
          >
            &larr;
          </button>

          <div className="trainer-list" ref={trainerListRef}>
            {trainers.map((trainer) => (
              <article className="trainer-card" key={trainer.name}>
                <h3>{trainer.name}</h3>
                <div className="trainer-info-block">
                  <p><strong>Name:</strong> {trainer.name}</p>
                  <p><strong>Exp:</strong> {trainer.experience}</p>
                  <p><strong>Qualification:</strong> {trainer.qualification}</p>
                  <p><strong>Email:</strong> {trainer.email}</p>
                  <p><strong>Contact No:</strong> {trainer.phone}</p>
                </div>

                <div className="trainer-timings">
                  <h4>Available timings</h4>
                  <ul>
                    {trainer.timings.map((slot) => (
                      <li key={slot}>{slot}</li>
                    ))}
                  </ul>
                </div>

                <button type="button" className="trainer-demo-btn" onClick={() => handleDemoRequest(trainer.name)}>
                  Book Demo with {trainer.name.split(' ')[0]}
                </button>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="trainer-scroll-btn"
            onClick={() => scrollTrainerCards(1)}
            aria-label="Show next trainers"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}
