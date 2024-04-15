  import Slider from "react-slick";
  import './HeaderSlider.scss'
  import HeaderSection from "../HeaderSection/HeaderSection";


  function HeaderSlider() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      ltr: true
    };
    return (
      <div className="slider-container">
        <Slider className="Slider" {...settings}>
          <div className="Slider-Image">
          <div className="gradient-overlay"></div>
            <img src="./Images/HeaderSection.png" alt="" />
          </div>
          <div className="Slider-Image">
          <div className="gradient-overlay"></div>
          <img src="./Images/HeaderSection2.jpg" alt="" />
          </div>
          <div className="Slider-Image">
          <div className="gradient-overlay"></div>
            <img src="./Images/HeaderSection3.jpg" alt="" />
          </div>
        </Slider>
        <div className="slider-container-HeaderSection">
            <HeaderSection/>
        </div>
      </div>
    );
  }

  export default HeaderSlider;
