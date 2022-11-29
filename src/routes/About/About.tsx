import PersonCard from "./components/PersonCard";
import StrengthWeakness from "./components/StrengthWeakness";

import portrait from "../../Assets/Images/selvportraet.jpg";

const About = () => {
  return (
    <div>
      <PersonCard
        className="mt-20 flex justify-center"
        img={portrait}
        name="Benjamin Rensch Vinterberg"
        title="Frontend Web Developer"
        details="A 26 year old with big aspirations and a high inclination for tech and programming. Learns about relational databases because it's 'Fun'"
      />
      <StrengthWeakness />
    </div>
  );
};

export default About;
