import {
  ReactLogo,
  TailwindLogo,
  TypescriptLogo,
} from "../../../../Assets/TechLogos";
import Card from "../../../../Components/Card";

const PreferredTech = () => {
  return (
    <div>
      <h2 className="text-2xl p-8">My Preffered Techstack</h2>
      <Card className="flex gap-6 align-center justify-center">
        <ReactLogo className="w-32" />
        <TypescriptLogo className="w-32" />
        <TailwindLogo className="w-32" />
      </Card>
    </div>
  );
};

export default PreferredTech;
