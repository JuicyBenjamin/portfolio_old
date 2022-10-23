import shrek from "../../Assets/Hero/shrek.jpeg";
const Hero = () => {
  return (
    <div className="w-full">
      <img
        className="w-full aspect-video"
        src={shrek}
        alt="shrek looking almighty"
      />
    </div>
  );
};

export default Hero;
