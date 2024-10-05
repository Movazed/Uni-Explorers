import { useContext } from "react";
import "./Header.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import Slider from "../../utils/slider/Slider";
import { MyContext } from "../../context/AppContext";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const contentData = [
  {
    country: "Mussoorie",
    title: "Explore Mussoorie",
  },
  {
    country: "Manali",
    title: "Explore Manali",
  },
  {
    country: "Kasol",
    title: "Explore Kasol",
  },
  {
    country: "Banaras",
    title: "Explore Banaras",
  },
];

const Header = () => {
  const { activeSlideIndex } = useContext(MyContext);

  const handleClass = (activeSlideIndex) => {
    const { country, title } = contentData[activeSlideIndex] || {};

    if (country && title) {
      return (
        <div>
          <h1 className="text-[144px] text-white font-Montserrat font-[800] leading-[140px]">
            Explore <br />
            <span className={`country ${country}`} data-country={country}>
              {country}
            </span>
          </h1>
          <p className="text-white mt-[-70px] p-2 w-[95%] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            similique sit quibusdam doloribus porro ea, perferendis accusantium
            necessitatibus mollitia, possimus quaerat! Accusantium architecto
            officiis saepe vitae incidunt, optio rerum velit.
          </p>
        </div>
      );
    }

    return null;
  };

  const classChange = handleClass(activeSlideIndex);

  return (
    <div className="flex items-center mt-[40px]">
      {/* text content */}
      <div className="w-1/2 pl-[140px]">
        {classChange}

        <div className="mt-[100px] flex gap-12">
          <button className="border-2 border-[#00A189] text-[20px] px-6 py-2 font-semibold text-white hover:text-[#00A189]">
            Book Now
          </button>
          <button className="flex items-center gap-2">
            <FaYoutube className="text-red-700 text-[40px]"/>
            <span className="text-white">Watch Videos like this</span>
          </button>
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-end justify-end relative">

      <div>
        <Slider/>
      </div>

      <div className = "flex gap-4 text-xl text-white absolute bottom-[-60px] right-[100px]">
        <FaYoutube/>
        <FiInstagram/>
        <BsWhatsapp/>
        <FaFacebook/>
      </div>
      
      </div>
    </div>
  );
};

export default Header;
