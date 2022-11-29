import shrek from "../../Assets/Hero/shrek.jpeg";
import { FC } from "react";
import { HeroProps } from "./HeroProps.types";

const Hero: FC<HeroProps> = ({ image, children }) => {
  return (
    <header className="bg-slate-900 h-fit flex justify-center content-center">
      <img
        className="w-full aspect-video lg:aspect-[16/5] object-cover opacity-50"
        src={image}
        alt="shrek looking almighty"
      />
      <div className="absolute text-8xl">{children}</div>
    </header>
  );
};

export default Hero;
