function ExperienceCard({ experience }) {
  console.log("experience =", experience);

  if (!experience) {
    return <div>Experience data missing</div>;
  }

  return (
    <div className="exp-card">
      <h3>{experience.role}</h3>
    </div>
  );
}

export default ExperienceCard;