import Hero from "../../Components/Hero";
import PreferredTech from "./Components/PreferredTech";

import techStackImg from "../../Assets/Hero/techBackground.jpeg";
import InterestedTech from "./Components/InterestedTech";
import KnownTech from "./Components/KnownTech";

const Technologies = () => {
  return (
    <div className="text-slate-200">
      <Hero image={techStackImg}>
        <h1 className="text-4xl text-center">Technologies</h1>
      </Hero>
      <PreferredTech />
      <KnownTech />
      <InterestedTech />
    </div>
  );
};

export default Technologies;
