import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const trainerByCourse = {
  basic: 'Ananya , Sushma',
  intermediate: 'Vikram , Pavani',
  advanced: 'Rupasri , Arjun Kumar',
  grammar: 'Ananya, Sushma, Vikram, Pavani, Rupasri, Arjun Kumar',
};

function CourseTrainerBanner({ courseId }) {
  const trainer = trainerByCourse[courseId] || 'Our expert trainer';

  return (
    <div className="course-trainer-banner">
      <strong>Trainer:</strong> {trainer}
    </div>
  );
}

export default function Services() {
  return (
    <div className="page content-page">
      <h1>Spoken English Learning Courses</h1>
      <nav className="service-tabs">
        <NavLink to="/courses">Overview</NavLink>
        <NavLink to="/courses/basic">Basic Level</NavLink>
        <NavLink to="/courses/intermediate">Intermediate</NavLink>
        <NavLink to="/courses/advanced">Advanced</NavLink>
        <NavLink to="/courses/grammar">Grammar</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export function CourseDetailPage() {
  const { courseId } = useParams();

  const courseMap = {
    basic: Basic,
    intermediate: Intermediate,
    advanced: Advanced,
    grammar: Grammar,
  };

  const CourseComponent = courseMap[courseId] || ServicesOverview;
  return <CourseComponent />;
}

export function ServicesOverview() {
  return (
    <div className="service-overview">
      <h2>Choose a speaking path that suits your goal.</h2>
      <p>
        If you struggle to convert your thoughts from Telugu to English, these
        courses are designed specifically for you. We explain complex English
        rules using simple Telugu examples so you can grasp concepts quickly.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Basic Level (Zero to English)</h3>
          <p>
            Perfect if you know Telugu but struggle with basic English sentence
            structures. You will learn daily greetings, basic vocabulary,
            tenses, and how to frame simple sentences without fear.
          </p>
          <p className="course-trainer-inline">Trainer: Ananya , Sushma</p>
        </div>

        <div className="info-card">
          <h3>Intermediate Level (Conversational Practice)</h3>
          <p>
            Ideal if you understand English but cannot speak fluently. Learn how
            to think in English instead of translating from Telugu in your head,
            and master casual conversations.
          </p>
          <p className="course-trainer-inline">Trainer: Vikram , Pavani</p>
        </div>

        <div className="info-card">
          <h3>Advanced Level (Professional Mastery)</h3>
          <p>
            Tailored for job seekers, software employees, and students preparing
            for interviews. Focuses on corporate communication, email writing,
            presentation skills, and public speaking with high confidence.
          </p>
          <p className="course-trainer-inline">Trainer: Rupasri , Arjun Kumar</p>
        </div>
      </div>
   
    </div>
  );
}

export function Grammar() {
  return (
    <div className="service-panel">
      <CourseTrainerBanner courseId="grammar" />
      <h2>Grammar: Build Clear, Correct Sentences</h2>
      <p>
        Strengthen the grammar behind everyday conversation, writing, and
        professional communication with practical Telugu-to-English examples.
      </p>

      <h3>Grammar Topics</h3>
      <ul>
        <li>Parts of speech and sentence structure</li>
        <li>Articles, prepositions, and conjunctions</li>
        <li>Subject-verb agreement and common errors</li>
        <li>Active and passive voice</li>
        <li>Direct and indirect speech</li>
        <li>Punctuation and sentence correction practice</li>
      </ul>
    </div>
  );
}

export function Basic() {
  return (
    <div className="service-panel">
      <CourseTrainerBanner courseId="basic" />
      <h2>Basic Level: English Tenses Mastery (Telugu to English)</h2>

      <p>
        This course is designed to help you understand all{" "}
        <strong>12 English Tenses</strong> using simple Telugu explanations. By
        the end of this course, you will stop translating in your head and start
        speaking sentences accurately.
      </p>

      <h3>Module 1: The Foundations </h3>
      <ul>
        <li>
          <strong>Introduction to Tenses:</strong> What are tenses and why are
          they important?
        </li>
        <li>
          <strong>Subject &amp; Verbs:</strong> Understanding Help Verbs (am,
          is, are, was, were) and Action Verbs (V1, V2, V3, V4).
        </li>
      </ul>

      <h3>Module 2: Present Tense </h3>
      <ul>
        <li>
          <strong>Simple Present Tense:</strong> How to talk about daily habits,
          routines, and universal truths.{" "}
          <em>
            (e.g., నేను ప్రతిరోజు కాలేజీకి వెళ్తాను / I go to college every
            day).
          </em>
        </li>
        <li>
          <strong>Present Continuous Tense:</strong> Talking about actions
          happening right now.{" "}
          <em>
            (e.g., నేను ఇప్పుడు అన్నం తింటున్నాను / I am eating rice right now).
          </em>
        </li>
        <li>
          <strong>Present Perfect Tense:</strong> Actions that just finished.{" "}
          <em>
            (e.g., నేను ఇప్పుడే హోంవర్క్ పూర్తి చేశాను / I have just finished my
            homework).
          </em>
        </li>
        <li>
          <strong>Present Perfect Continuous Tense:</strong> Actions that
          started in the past and are still continuing.
        </li>
      </ul>

      <h3>Module 3: Past Tense</h3>
      <ul>
        <li>
          <strong>Simple Past Tense:</strong> How to talk about completed past
          actions.{" "}
          <em>
            (e.g., నేను నిన్న సినిమా చూశాను / I watched a movie yesterday).
          </em>
        </li>
        <li>
          <strong>Past Continuous Tense:</strong> Actions that were happening at
          a specific time in the past.{" "}
          <em>
            (e.g., నిన్న ఈ సమయానికి నేను నిద్రపోతున్నాను / I was sleeping at
            this time yesterday).
          </em>
        </li>
        <li>
          <strong>Past Perfect &amp; Past Perfect Continuous:</strong> Talking
          about older past actions clearly.
        </li>
      </ul>

      <h3>Module 4: Future Tense </h3>
      <ul>
        <li>
          <strong>Simple Future Tense:</strong> Talking about plans and things
          you will do later.{" "}
          <em>
            (e.g., నేను రేపు హైదరాబాద్ వెళ్తాను / I will go to Hyderabad
            tomorrow).
          </em>
        </li>
        <li>
          <strong>Future Continuous Tense:</strong> Actions that will be
          happening in the future.
        </li>
        <li>
          <strong>Future Perfect &amp; Future Perfect Continuous:</strong>{" "}
          Predicting completed actions in the future.
        </li>
      </ul>

      <h3>Module 5: Sentence Transformations &amp; Speaking Practice</h3>
      <ul>
        <li>
          <strong>Positive &amp; Negative Sentences:</strong> How to say "Yes"
          and "No" correctly in all tenses.
        </li>
        <li>
          <strong>Asking Questions:</strong> Mastering "Wh-" questions and
          "Yes/No" questions so you can start conversations easily.
        </li>
      </ul>
    </div>
  );
}

export function Intermediate() {
  return (
    <div className="service-panel">
      <CourseTrainerBanner courseId="intermediate" />
      <h2>Intermediate Level: Spoken English Fluency Builder</h2>

      <p>
        Take your English beyond basic sentences. This course focuses on
        building your fluency, improving your sentence flow, and giving you the
        exact structures you need to hold real-life conversations without
        hesitation.
      </p>

      <h3>Module 1: Mastering Modal Verbs </h3>
      <p>
        Learn how to express ability, permission, advice, and possibility using
        simple Telugu-to-English comparisons.
      </p>
      <ul>
        <li>
          <strong>Ability &amp; Permission (Can / Could):</strong> How to talk
          about what you can do now and what you could do in the past.{" "}
          <em>(e.g., నేను ఇంగ్లీష్ మాట్లాడగలను / I can speak English).</em>
        </li>
        <li>
          <strong>Advice &amp; Obligation (Should / Must / Have to):</strong>{" "}
          Giving advice to others and talking about daily rules/duties.{" "}
          <em>
            (e.g., నువ్వు తప్పకుండా అక్కడికి వెళ్ళాలి / You must go there).
          </em>
        </li>
        <li>
          <strong>Possibility &amp; Requests (May / Might / Would):</strong>{" "}
          Asking for permission politely and expressing doubt.{" "}
          <em>(e.g., రేపు వర్షం పడవచ్చు / It might rain tomorrow).</em>
        </li>
        <li>
          <strong>Past Regrets (Should have / Could have):</strong> Talking
          about things you wish you had done differently in the past.{" "}
          <em>
            (e.g., నేను అప్పుడు బాగా చదువుకోవాల్సింది / I should have studied
            well back then).
          </em>
        </li>
      </ul>

      <h3>Module 2: Connecting Sentences &amp; Advanced Phrases</h3>
      <ul>
        <li>
          <strong>Conjunctions:</strong> Using words like{" "}
          <em>but, because, although,</em> and <em>therefore</em> to speak
          longer sentences without stopping.
        </li>
        <li>
          <strong>Daily Idioms &amp; Phrasal Verbs:</strong> Swapping textbook
          English for natural phrases that native speakers use.
        </li>
      </ul>

      <h3>Module 3: Active Speaking Activities</h3>
      <p>
        These practical exercises are designed to break your hesitation and help
        you think directly in English.
      </p>
      <ul>
        <li>
          <strong>The 1-Minute Extempore :</strong> Choose a simple
          topic (like "My Favorite Festival" or "Social Media") and speak for 60
          seconds without pausing or using Telugu.
        </li>
        <li>
          <strong>Role-Play Situations :</strong> Practical
          speaking practice for real-world scenarios:
        </li>
        <li>Ordering food at a restaurant.</li>
        <li>Booking a doctor's appointment.</li>
        <li>Talking to a customer care executive.</li>
        <li>Handling a minor issue with a shopkeeper.</li>
        <li>
          <strong>Picture Description Challenge:</strong> Look at an image and
          describe what is happening, who is in it, and what they are doing to
          improve instant sentence formation.
        </li>
        <li>
          <strong>Storytelling in the Past:</strong> Learn how to narration an
          incident (like a recent trip or a funny childhood memory) smoothly
          using a mix of past tenses and modals.
        </li>
      </ul>
    </div>
  );
}

export function Advanced() {
  return (
    <div className="service-panel">
      <CourseTrainerBanner courseId="advanced" />
      <h2>Advanced Level: Corporate English &amp; Professional Mastery</h2>
      
      <p>
        This course is designed for corporate employees, software professionals,
        students preparing for placements, and anyone who wants to speak English
        with authority, elegance, and absolute confidence in formal
        environments.
      </p>

      <h3>Module 1: Corporate &amp; Business Communication </h3>
      <ul>
        <li>
          <strong>Professional Email Writing:</strong> How to draft polite,
          clear, and impactful emails for managers, clients, and HR teams.
        </li>
        <li>
          <strong>Meeting Etiquette &amp; Vocabulary:</strong> Key phrases to
          use when interrupting politely, presenting an opinion, or disagreeing
          professionally.{" "}
          <em>
            (e.g., How to politely say "I disagree" without sounding rude).
          </em>
        </li>
        <li>
          <strong>Active vs. Passive Voice for Business:</strong> Shifting your
          sentence structure to sound objective and highly professional.
        </li>
      </ul>

      <h3>
        Module 2: The Interview Success Blueprint 
      </h3>
      <ul>
        <li>
          <strong>"Tell Me About Yourself" Mastery:</strong> Crafting the
          perfect, structured 2-minute pitch that impresses interviewers
          instantly.
        </li>
        <li>
          <strong>Handling Tough Interview Questions:</strong> Using the{" "}
          <strong>STAR Method</strong> (Situation, Task, Action, Result) to
          explain project experiences and achievements clearly.
        </li>
        <li>
          <strong>Salary Negotiation &amp; HR Rounds:</strong> Formal English
          vocabulary used to talk about salary expectations, notice periods, and
          career goals.
        </li>
      </ul>

      <h3>
        Module 3: High-Impact Public Speaking &amp; Presenting
      </h3>
      <ul>
        <li>
          <strong>Presentation Structure:</strong> Designing an opening hook,
          structured body, and solid conclusion for any presentation or project
          demo.
        </li>
        <li>
          <strong>Voice Modulation &amp; Body Language:</strong> Learning how to
          control pacing, pause for effect, and use body language to command
          attention.
        </li>
        <li>
          <strong>Handling Q&amp;A Sessions:</strong> Phrases to use when you
          don't know the answer to a question on the spot, or need time to
          think.
        </li>
      </ul>

      <h3>Module 4: Real-World Advanced Mock Labs</h3>
      <ul>
        <li>
          <strong>Mock Group Discussions (GD):</strong> Practicing how to enter
          a discussion, lead a point, and summarize topics commonly asked in
          campus placements.
        </li>
        <li>
          <strong>The Mock Interview Lab:</strong> 1-on-1 interview simulations
          with instant feedback on grammar, confidence, and filler word usage
          (like <em>um, uh, like</em>).
        </li>
        <li>
          <strong>The Elevator Pitch:</strong> Summarizing a complex business
          idea or a tech project in under 60 seconds clearly.
        </li>
      </ul>
    </div>
  );
}
