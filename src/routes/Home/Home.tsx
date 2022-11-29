import Hero from "../../Components/Hero";
import devImg from "../../Assets/Hero/programming.jpeg";

const Home = () => {
  return (
    <div>
      <Hero image={devImg}>
        <h1>Home</h1>
      </Hero>
    </div>
  );
};

export default Home;
