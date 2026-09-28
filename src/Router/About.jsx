import React from "react";

export default function About() {
  return (
    <div className="page content-page">
      <h1>Welcome to Rupasri English Learning Hub!</h1>
      <p>
        Are you ready to speak English with{" "}
        <strong>confidence, fluency, and clarity</strong>? You are in the right
        place!
      </p>
      <p>
        I&apos;m <strong>Rupasri</strong>, an English teacher and coach
        dedicated to helping learners worldwide break through the fear of
        speaking. Whether you are preparing for a job interview, studying for an
        exam like IELTS, moving to an English-speaking country, or just want to
        chat naturally with native speakers, this website and my YouTube channel
        are built for you.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Why Follow My Channel?</h3>
          <p>
            Learning grammar rules from a textbook is one thing, but using them
            in real-world conversations is another. My videos focus on
            practical, actionable English that you can use immediately.
          </p>
        </div>

        <div className="info-card">
          <h3>What You Will Master</h3>
          <p>
            Everyday conversations, natural idioms, pronunciation and accent
            training, simplified grammar for speaking, and confidence-building
            techniques.
          </p>
        </div>

        <div className="info-card">
          <h3>My Mission</h3>
          <p>
            I started this channel because I saw so many students who could read
            and write English perfectly but struggled to speak it out loud. My
            goal is to make speaking English feel natural, fun, and
            life-changing.
          </p>
        </div>
      </div>

      <div className="timeline-box">
        <h2>Here is what you will master here:</h2>
        <ul>
          <li>
            <strong>Everyday Conversations:</strong> Learn natural idioms,
            slang, and phrasal verbs that native speakers actually use.
          </li>
          <li>
            <strong>Pronunciation &amp; Accent Training:</strong> Clear
            exercises to help you reduce your native accent and be easily
            understood.
          </li>
          <li>
            <strong>Grammar for Speaking:</strong> Simplified grammar hacks that
            help you build sentences instantly without overthinking.
          </li>
          <li>
            <strong>Confidence Builders:</strong> Mindset shifts and public
            speaking tips to help you stop freezing when it&apos;s your turn to
            talk.
          </li>
        </ul>
      </div>

      <div className="timeline-box">
        <h2>Join Our Global Community!</h2>
        <p>
          New videos drop every day.
        </p>
        <p>
          👉{" "}
          <a
            href="http://www.youtube.com/@RupasriMatcha53"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Click Here to Subscribe on YouTube</strong>
          </a>{" "}
          and never miss a lesson!
        </p>
      </div>

      <div className="timeline-box">
        <h2>Get in Touch</h2>
        <p>
          For business inquiries, sponsorships, or collaboration proposals,
          please reach out via email at:{" "}
          <strong>rupasri.matcha@gmail.com</strong>
        </p>
      </div>
    </div>
  );
}
