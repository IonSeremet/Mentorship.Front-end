import banner from "../../assets/imgProdus1.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section id="main">
      <div className="main-text">
        <span>Ila's Flowers</span> <br /> Where we reinvent <br />
        the meaning of bouqets
      </div>
      <img src={banner} width="520" alt="leaf-main-image" />
    </section>
  );
};

export default Banner;
