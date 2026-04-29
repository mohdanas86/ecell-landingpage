import { AnimatedSocialBeam } from "./component/ui/AnimatedSocialBeam";

export default function Home() {
  return (
    <main className="brochure">
      <section className="panel-left reveal delay-1">
        <div className="left-top">
          <p className="intro-text">
            The E-Cell at SRM Ramapuram is a dedicated startup ecosystem built to
            empower student and alumni founders. We provide incubation support,
            mentorship, and guidance for hackathon teams to turn ideas into
            real-world ventures.
          </p>

          <h1 className="welcome-block">
            <span className="welcome-line">WELCOME</span>
            <span className="welcome-line">TO</span>
            <span className="welcome-line accent">E-CELL</span>
          </h1>
        </div>

        <p className="website-url">www.ecellrmp.srm.edu.in</p>
      </section>

      <section className="panel-center reveal delay-2">
        <div className="logo-mark">
          <span className="logo-letter">e</span>
          <span className="logo-burst" aria-hidden="true" />
        </div>

        <div className="logo-name">
          <div className="logo-name-main">
            SRM<span className="pipe">|</span>
            <span>e-cell</span>
          </div>
          <div className="logo-subtitle">IST | Easwari | Dental | SEAD</div>
          <div className="logo-location">Chennai Ramapuram</div>
        </div>
      </section>

      <section className="panel-right reveal delay-3">
        <div className="advantages-section">
          <p className="open-tag">Open from 09:00 to 18:30</p>
          <h2 className="section-heading">Our Advantages</h2>
          <p className="advantages-list">
            <strong>Idea to Production</strong> |{" "}
            <strong>Flexible Timings</strong> |{" "}
            <strong>Attendance Protection (OD)</strong> |{" "}
            <strong>Internship Opportunities</strong>
          </p>
        </div>

        <div className="photo-block">
          <div className="photo-label">
            <div className="photo-icon">PHOTO</div>
            <span>Team + Events Gallery</span>
          </div>
        </div>

        <div className="socials-section">
          <h2 className="section-heading">Visit Our Socials</h2>
          <AnimatedSocialBeam />
          <ul className="socials-list">
            <li>
              <div className="social-icon icon-ig">IG</div>
              <span>Instagram: @your_handle</span>
            </li>
            <li>
              <div className="social-icon icon-li">IN</div>
              <span>LinkedIn: /your-page</span>
            </li>
            <li>
              <div className="social-icon icon-fb">FB</div>
              <span>Facebook: /your-page</span>
            </li>
            <li>
              <div className="social-icon icon-wa">WA</div>
              <span>WhatsApp: +91 00000 00000</span>
            </li>
          </ul>
        </div>

        <div className="tagline-banner">
          <p className="tagline-text">
            Stay Ahead of Trends
            <br />
            and Technology
          </p>
        </div>
      </section>
    </main>
  );
}
