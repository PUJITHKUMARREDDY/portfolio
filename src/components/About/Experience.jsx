import ExperienceCard from "./ExperienceCard";
import "./About.css";

const experiences = [
  {
    role: "Trainee Software Development Engineer",
    company: "IQVIA",
    duration: "Aug 2025 - Present",
    location: "Bangalore, India",
    points: [
      "Developing enterprise applications using Appian.",
      "Building Process Models and Interfaces.",
      "Creating Expression Rules.",
      "Designing Record Types and CDTs.",
      "Working with Integrations."
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="section-header">
        <p className="section-tag">EXPERIENCE</p>
        <h2>Professional Journey</h2>
      </div>

      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          experience={exp}
        />
      ))}

    </section>
  );
}

export default Experience;